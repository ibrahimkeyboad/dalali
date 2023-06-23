import { hash } from 'bcryptjs';
import User from '@/models/user';
import { NextResponse } from 'next/server';
import connetDB from '@/db';
import validator from 'validator';
import nodemailer from 'nodemailer';
import { v4 as uuid } from 'uuid';
import VerificationToken from '@/models/token';

const transporter = nodemailer.createTransport({
  service: process.env.SERVICE,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

transporter.verify((error, sucess) => {
  if (error) {
    console.log('error', error);
  } else {
    console.log('message');

    console.log('sucess', sucess);
  }
});

export async function POST(req: Request) {
  await connetDB();

  try {
    const body = await req.json();

    const { name, email, password }: bodyData = body;

    if (!validator.isEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid crendential' },
        { status: 422 }
      );
    }

    const exist = await User.findOne({ email: email.trim() });

    if (exist) {
      return NextResponse.json(
        { error: 'User already exist' },
        {
          status: 403,
        }
      );
    }

    const newPassword = await hash(password.trim(), 12);

    const user = await User.create({
      email: email.trim().toLowerCase(),
      name: name.trim(),
      password: newPassword,
    });

    await sendEmailVerification(user);

    return NextResponse.json(
      {
        status: 'PENDING',
        msg: 'Verification Email sent',
      },
      { status: 201 }
    );
  } catch (error) {
    console.log('API error', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}

async function sendEmailVerification(user: User) {
  const currentUrl = 'http://localhost:3000/';

  const uniqueString = uuid() + user._id;

  const mailOptions = {
    form: process.env.USER,
    to: user.email,
    subject: 'Verify your email',
    html: `
        <p>Verify your email address to complete the signup into your account.
        </p> 
        <p>This link expires in <strong>6 hours. </strong> </p> <div> 
          <p>Press</p> 
          <a 
            href=${currentUrl}/verify/email?userId=${user._id}&uniqueString=${uniqueString}
            >
            here
            </a> 
          <p>to proceed</p>
        </div>`,
  };

  const hashId = await hash(uniqueString, 12);

  await VerificationToken.create({
    identifier: user._id,
    token: hashId,
    expires: Date.now() + 21600000,
  });
  await transporter.sendMail(mailOptions);
}
