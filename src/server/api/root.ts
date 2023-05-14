import { createTRPCRouter } from "~/server/api/trpc";
import { exampleRouter } from "~/server/api/routers/example";
import { authRouter } from "./routers/auth";
import { userRouter } from "./routers/user";
import { postRouter } from "./routers/post";
import { reportRouter } from "./routers/report";
import { commentRouter } from "./routers/comment";
import { gdprRouter } from "./routers/gdpr";
import { groupRouter } from "./routers/group";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  auth: authRouter,
  user: userRouter,
  post: postRouter,
  report: reportRouter,
  comment: commentRouter,
  gdpr: gdprRouter,
  group:groupRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
