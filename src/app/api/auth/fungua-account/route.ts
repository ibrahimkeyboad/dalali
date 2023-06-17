import { hash } from 'bcryptjs';
import User from '@/models/user';
import { NextResponse } from 'next/server';
import connetDB from '@/db';
import validator from 'validator';
import nodemailer from 'nodemailer';
import { v4 as uuid } from 'uuid';

export async function POST(req: Request) {
  connetDB();

  interface bodyData {
    name: string;
    email: string;
    password: string;
  }

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ibrahimmwanga07@gamil.com',
      pass: 'ibra2571',
    },
  });

  transporter.verify((err, success) => {
    if (err) {
      console.log(err);
    } else {
      console.log('message');
      console.log(success);
    }
  });

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

    sendEmailVerification(user, NextResponse);

    return NextResponse.json({ msg: 'Imeisha iyo😎' }, { status: 201 });
  } catch (error) {
    console.log('API error', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}

async function sendEmailVerification(user, res) {
  const currentUrl = 'http://localhost:3000/';

  const uniqueString = uuid() + user._id;

  const mailOptions = {
    form: 'ibrahimmwanga07@gmail.com',
    to: 'mwangaibrahim27@gmail.com',
    subject: 'Verify your email',
    html: `<p>Verify your email address to complete the signup into your account.</p> <p>This link expires in <strong>6 hours. </strong> </p> <p>Press <a href=${currentUrl}user/verify/>${user._id}/${uniqueString}>here</a> to proceed</p>`,
  };

  try {
    const result = await hash(uniqueString, 12);
  } catch (err) {
    console.log(err);
  }
}
