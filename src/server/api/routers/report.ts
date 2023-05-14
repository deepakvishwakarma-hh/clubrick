import { BsCartX } from "react-icons/bs";
import { z } from "zod";
import { GenerateReport } from "~/features/report/CRUD";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const reportRouter = createTRPCRouter({
  generate_report: publicProcedure
    .input(
      z.object({
        report_type: z.string(),

        report_reason: z.string(),

        report_description: z.string().optional(),

        item_id: z.number(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const data = await GenerateReport({
        ...input,
        reporting_user_id: ctx?.session?.user?.id,
      });
      return data;
    }),
});
