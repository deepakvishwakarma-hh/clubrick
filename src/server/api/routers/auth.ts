import { z } from "zod";
import { createUser } from "~/features/authentication/services/register";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const authRouter = createTRPCRouter({
  register: publicProcedure
    .input(
      z.object({
        email: z.string(),
        password: z.string(),
        firstName: z.string(),
        lastName: z.string().optional(),
        phone: z.string()
      })
    )
    .mutation(async ({ input, ctx }) => {

      const userData = await createUser(input);
      return userData;
    }),


});
