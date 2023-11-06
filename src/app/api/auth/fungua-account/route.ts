import { hash } from 'bcryptjs';
import User from '@/models/user';
import connetDB from '@/db';
import validator from 'validator';
import sendEmailVerification from '@/utils/sendEmail';

export async function POST(req: Request) {
  try {
    connetDB();
    const body = await req.json();

    const { firstName, lastName, email, password } = body;

    console.log(body);

    if (!validator.isEmail(email)) {
      return Response.json({ error: 'Invalid crendential' }, { status: 422 });
    }

    const exist = await User.findOne({ email: email.trim() });

    if (exist) {
      return Response.json(
        { error: 'User already exist' },
        {
          status: 403,
        }
      );
    }

    const newPassword = await hash(password.trim(), 12);

    const user = await User.create({
      email: email.trim().toLowerCase(),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      password: newPassword,
    });

    await sendEmailVerification(user);

    return Response.json(
      {
        status: 'PENDING',
        msg: 'Verification Email sent',
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return Response.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
