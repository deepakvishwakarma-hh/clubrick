import { z } from "zod";

import {
    createTRPCRouter,
    publicProcedure,
    protectedProcedure,
} from "~/server/api/trpc";

export const conversationRouter = createTRPCRouter({
    messages: publicProcedure.query((conversation_id) => {
        return
    })
})