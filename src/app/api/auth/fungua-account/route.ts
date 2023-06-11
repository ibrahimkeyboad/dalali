import { hash } from 'bcryptjs';
import User from '@/models/user';
import { NextResponse } from 'next/server';
import connetDB from '@/db';
import validator from 'validator';

export async function POST(req: Request) {
  connetDB();

  interface bodyData {
    name: string;
    email: string;
    password: string;
  }

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

    await User.create({
      email: email.trim().toLowerCase(),
      name: name.trim(),
      password: newPassword,
    });

    return NextResponse.json({ msg: 'Imeisha iyo😎' }, { status: 201 });
  } catch (error) {
    console.log('API error', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
