import clientPromise from '@/db/mongodb';
import User from '@/models/user';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import NextAuth, { AuthOptions } from 'next-auth';

import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import validator from 'validator';

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
          throw new Error('Invalid Credetials');
        }
        console.log(credentials.email, credentials.password);
        console.log(validator.isEmail(credentials.email));

        if (!validator.isEmail(credentials.email)) {
          throw new Error('Invalid crendential');
        }

        const user = await User.findOne({
          email: credentials.email.trim().toLowerCase(),
        });

        if (!user.iEmailVerified) {
          throw new Error('Your email is not verified. Please Verify it');
        }

        console.log(user);

        if (!user || !user.password) {
          throw new Error('Invalid credentials');
        }
        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isCorrectPassword) {
          throw new Error('Invalid credentials');
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
