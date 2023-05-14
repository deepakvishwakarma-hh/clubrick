import { z } from "zod";
import { CreateGDPR_FAQ } from "~/features/GDPR - FAQ/services/CF";
import { CreateGroup, getGroupByGroupName } from "~/features/groups/CRUD";
import { Main } from "~/features/groups/types/GET";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import { GroupSchema } from "~/server/zod/group";

export const groupRouter = createTRPCRouter({
  CreateGroup: protectedProcedure
    .input(
      GroupSchema
    )
    .mutation(async ({ ctx, input }) => {
      const data = await CreateGroup({
        ...input, admin:ctx.session.user.id
      })
      return data
    }),
    getGroupByGroupName:protectedProcedure
  .input(
    z.object({
       groupname:z.string()
    })
  )
  .query(async ({ ctx, input }) => {
    const userData  = await getGroupByGroupName(input.groupname);
    return userData;
  }),
});
