// import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import { AuthOptions } from 'next-auth';

import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import validator from 'validator';
import VerificationToken from '@/models/token';
import sendEmailVerification from '@/utils/sendEmail';
import User from '@/models/user';

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'email' },
        password: { label: 'password', type: 'text' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error('Invalid crendential.');
        }

        if (!validator.isEmail(credentials.email)) {
          throw new Error('Invalid crendential.');
        }

        const user = await User.findOne({
          email: credentials.email.trim().toLowerCase(),
        });

        if (!user.iEmailVerified) {
          await VerificationToken.findOneAndDelete({ identifier: user._id });

          await sendEmailVerification(user);

          throw new Error('Your email is not verified.');
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!user || !isCorrectPassword) {
          throw new Error('Invalid crendential.');
        }
        return user;
      },
    }),
  ],

  callbacks: {
    async signIn(params) {
      console.log('params', params);
      return true;
    },
  },

  pages: {
    signIn: '/',
  },
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
};
