/** @format */

import { type GetServerSidePropsContext } from 'next';
import { getServerSession, type NextAuthOptions, type DefaultSession } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
// import { env } from "~/env.mjs";
import { prisma } from '~/server/db';

import { loginUserBackend } from '~/features/authentication/services/login_user';

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: number;
      country: string | null | undefined;
      birthday: Date;
      jwt: string | null | undefined;
      username: string;
      is_otp_verified: boolean;
      // ...other properties
      // role: UserRole;
    } & DefaultSession['user'];
  }

  interface User {
    country: string;
    birthday: Date;
    username: string;
    jwt: string;
    is_otp_verified: boolean;
    // ...other properties
    // role: UserRole;
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */

export const authOptions: NextAuthOptions = {
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    authorized({ token }: any) {
      if (token) return true; // If there is a token, the user is authenticated
    },
    jwt({ token, account, user }) {
      if (user) {
        token.sub = user.id;
        token.country = user.country;
        token.username = user.username;
        token.avatar = user.image;
        token.jwt = user.jwt;
        token.user = user;
        token.otp_verification_state = user.is_otp_verified;
        return token;
      }
      return token;
      // console.log("user:", user);
      // console.log(user);
      // console.log(token);
    },
    session({ session, token, user }) {
      session.user.id = token.sub as any;
      session.user.country = token.country as string;
      session.user.image = token.avatar as string;
      session.user.jwt = token.jwt as string;
      session.user.username = token.username as string;
      session.user.is_otp_verified = token.is_otp_verified as boolean;
      return session;
    },
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        identifier: {
          label: 'Identifier',
          type: 'string',
          placeholder: 'example@example.com or example',
        },
        password: { label: 'Password', type: 'password' },
      },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      async authorize(credentials) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const user = await loginUserBackend({
          identifier: credentials?.identifier as string,
          password: credentials?.password as string,
        });
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return user;
      },
    }),

    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],

  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth/login',
    newUser: '/register',
  },

  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext['req'];
  res: GetServerSidePropsContext['res'];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
