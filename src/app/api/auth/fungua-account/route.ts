import { hash } from 'bcryptjs';
import User from '@/models/user';
import { NextResponse } from 'next/server';
import { connetDB } from '@/db';

export async function POST(req: Request) {
  connetDB();
  console.log('api router 😎');

  interface bodyData {
    name: string;
    email: string;
    password: string;
  }

  try {
    const body = await req.json();

    console.log(body);

    const { name, email, password }: bodyData = body;

    const exist = await User.findOne({ email });

    if (exist) {
      return NextResponse.json(
        { error: 'User already exist' },
        {
          status: 403,
        }
      );
    }

    const newPassword = await hash(password, 12);

    await User.create({ email, name, password: newPassword });

    return NextResponse.json({ msg: 'Imeisha iyo😎' });
  } catch (error) {
    console.log('API error', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
