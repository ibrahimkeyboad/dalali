import User from '@/models/user';
import nodemailer from 'nodemailer';
import crypto from 'crypto';

const sendEmail = async (email: string, subject: string, text: string) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      service: process.env.SERVICE,
      port: 587,
      secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject: subject,
      text: text,
    });
    console.log('email sent sucessfully');
  } catch (error) {
    console.log('email not sent');
    console.log(error);
  }
};

module.exports = sendEmail;

export async function POST(req: Request) {
  const body = await req.json();

  const user = await User.findOneAndUpdate({ email: body.email }, {});

  // const token = await new Token({
  //   userId: user._id,
  //   token: crypto.randomBytes(32).toString('hex'),
  // }).save();
}
