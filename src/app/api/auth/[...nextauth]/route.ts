import clientPromise from '@/db/mongodb';
import User from '@/models/user';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import NextAuth, { AuthOptions } from 'next-auth';

import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import validator from 'validator';
import VerificationToken from '@/models/token';
import sendEmailVerification from '@/utils/sendEmail';
import { NextResponse } from 'next/server';

export const authOptions: AuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'email' },
        password: { label: 'password', type: 'text' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return NextResponse.json(
            {
              msg: 'Invalid crendential.',
              error: 'Please fill all the field',
            },
            { status: 401 }
          );
        }

        if (!validator.isEmail(credentials.email)) {
          return NextResponse.json(
            {
              msg: 'Invalid crendential.',
              error: 'Your email is not valid',
            },
            { status: 403 }
          );
        }

        const user = await User.findOne({
          email: credentials.email.trim().toLowerCase(),
        });

        if (!user.iEmailVerified) {
          await VerificationToken.findOneAndDelete({ identifier: user._id });

          await sendEmailVerification(user);

          return NextResponse.json(
            {
              msg: 'Your email is not verified.',
              error: 'Please check your email ',
            },
            { status: 401 }
          );
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!user || !isCorrectPassword) {
          return NextResponse.json(
            {
              msg: 'Invalid crendential.',
              error: 'Make sure you add correct value',
            },
            { status: 401 }
          );
        }
        return user;
      },
    }),
  ],
  pages: {
    signIn: '/',
  },
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
