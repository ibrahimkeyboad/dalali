import User from '@/models/user';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId');
  const uniqueString = searchParams.get('uniqueString');
  console.log(userId, uniqueString);

  const user = await User.findById({ _id: userId });

  return NextResponse.json({ user });
}
