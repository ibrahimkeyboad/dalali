import nodemailer from 'nodemailer';
import { v4 as uuid } from 'uuid';
import VerificationToken from '@/models/token';
import { hash } from 'bcryptjs';
import { baseUrl } from '@/actions/url';

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
  } else {
  }
});

async function sendEmailVerification(user: User) {
  const currentUrl = baseUrl;

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

export default sendEmailVerification;
