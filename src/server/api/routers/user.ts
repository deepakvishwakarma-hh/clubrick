/** @format */

import { z } from 'zod';
import { env } from '~/env.mjs';
import { createUser } from '~/features/authentication/services/register';
import {
  deleteUser,
  getAllUsers,
  getUserProfile,
  getUserProfileByUseName,
  searchUser,
  updateUser,
} from '~/features/user/services/CRUD';
import { Main } from '~/features/user/types/GET';

import { createTRPCRouter, publicProcedure, protectedProcedure } from '~/server/api/trpc';
import strapi from '~/utils/strapi';

export const userRouter = createTRPCRouter({
  getUserProile: protectedProcedure.query(async ({ ctx }) => {
    const userData = await getUserProfile(ctx?.session?.user?.id);
    // @ts-ignore
    return userData as Main;
  }),
  getUserByUserName: protectedProcedure
    .input(
      z.object({
        username: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const userData = await getUserProfileByUseName(input.username);
      return userData;
    }),
  getUserByid: protectedProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .query(async ({ ctx, input }) => {
      const userData = await getUserProfile(input.id);
      return userData;
    }),
  deleteUser: protectedProcedure.mutation(({ ctx }) => {
    return deleteUser(ctx?.session?.user?.id);
  }),
  updateUser: protectedProcedure
    .input(
      z.object({
        image: z.string().optional(), // we need to chnage to perfact file type
        banner: z.string().optional(), // we need to chnage to perfact file type
        username: z.string().optional(),
        firstname: z.string().optional(),
        lastname: z.string().optional(),
        education: z
          .object({
            school: z.string().optional(),
            year: z.date().optional(),
          })
          .optional(),
        is_otp_verified: z.boolean().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const data = await updateUser({
        data: input,
        id: ctx?.session?.user?.id,
      });
      return data;
    }),
  getSuggestedUsers: protectedProcedure.query(async ({ ctx }) => {
    const userData = await getAllUsers();
    return userData;
  }),
  searchUser: protectedProcedure
    .input(z.object({ query: z.string() }))
    .query(async ({ ctx, input }) => {
      const userData = await searchUser(input.query);
      return userData;
    }),
});
