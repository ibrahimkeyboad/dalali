// import connectDB from '@/db';
import VerificationToken from '@/models/token';
import User from '@/models/user';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId');
  const uniqueString = searchParams.get('uniqueString');
  console.log(userId, uniqueString);

  try {
    // await connectDB();
    const userVerification = await VerificationToken.findOne({
      identifier: userId,
    });

    if (!userVerification) {
      console.log('no user');
      return NextResponse.json(
        {
          title: 'Invalid ',
          link: '/fungua-account',
          msg: 'User not found please login or sign up',
        },
        { status: 404 }
      );
    }

    if (userVerification.expires < Date.now()) {
      await VerificationToken.deleteOne({ identifier: userId });
      await User.findByIdAndDelete({ _id: userId });
      return NextResponse.json(
        {
          title: 'Token was expire.',
          link: '/login',

          msg: 'Token was expire. Please log in try log in to get new token',
        },
        {
          status: 403,
        }
      );
    }

    const user = await User.findByIdAndUpdate(
      { _id: userId },
      { iEmailVerified: true }
    );

    return NextResponse.json(
      {
        title: 'Email is verify sucessfull',
        link: `/login?email=${user.email}`,
        msg: 'login',
      },
      {
        status: 202,
      }
    );
  } catch (err) {
    new NextResponse('something went wrong', { status: 500 });
  }
}
