import { z } from "zod";
import { CreateGDPR_FAQ } from "~/features/GDPR - FAQ/services/CF";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const gdprRouter = createTRPCRouter({
  rquestGDPR: protectedProcedure
    .input(
      z.object({
        name: z
          .string()
          .min(2, { message: "Name should have at least 2 letters" }),
        mobile: z.number().min(9, {
          message: "number should have at least 10 numbers",
        }),
        email: z.string().email({ message: "Invalid email" }),
        request: z
          .string()
          .min(2, { message: "Name should have at least 2 letters" }),
        message: z
          .string()
          .min(10, { message: "Message should have at least 10 letters" }),
      })
    )
    .mutation(({ ctx, input }) => {
      const data = CreateGDPR_FAQ(input);
    }),
});
