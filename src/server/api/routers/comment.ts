/** @format */

import { invariant } from "framer-motion";
import { z } from "zod";
import { env } from "~/env.mjs";
import { createUser } from "~/features/authentication/services/register";
import {
  CreateNewComment,
  deleteComment,
  getCommentsByPostId,
  startThread,
  updateComment,
  updateCommentLikeCount,
} from "~/features/comments/services/CRUD";
import { Main } from "~/features/comments/types/GET";
import { UpdatesLikes } from "~/features/posts/CRUD";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import strapi from "~/utils/strapi";

export const commentRouter = createTRPCRouter({
  getCommentByPostId: protectedProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .query(async ({ input, ctx }) => {
      const userData: Main = await getCommentsByPostId(input.id);
      return userData;
    }),
  createSubComment: protectedProcedure
    .input(
      z.object({
        commentId: z.number(),
        content: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const data = startThread({
        author: {
          email: ctx.session.user?.email as string,
          user_id: ctx.session.user.id,
          username: ctx.session.user?.username as string,
        },
        threadOf: input.commentId,
        content: input.content,
      });
      return data;
    }),

  createComment: protectedProcedure
    .input(
      z.object({
        postId: z.number(),
        content: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const data = CreateNewComment({
        author: {
          email: ctx?.session?.user?.email as string,
          user_id: ctx.session.user.id,
          username: ctx?.session?.user?.username as string,
        },
        content: input.content,
        post: input.postId,
      });
      return data;
    }),

  deleteComment: protectedProcedure
    .input(
      z.object({
        commentId: z.number(),
      })
    )
    .mutation(({ ctx, input }) => {
      return deleteComment(input.commentId);
    }),

  updateComment: protectedProcedure
    .input(
      z.object({
        commentId: z.number(),
        content: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const data = await updateComment(input.commentId, input.content);
      return data;
    }),
  updateLikeCount: protectedProcedure
    .input(
      z.object({
        commentId: z.number(),
        likes: z.array(
          z.object({
            user_id: z.number(),
          })
        ),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const data = await updateCommentLikeCount(input.commentId, input.likes);
      return data;
    }),
});
