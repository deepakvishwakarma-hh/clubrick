/** @format */

import { z } from "zod";
import { env } from "~/env.mjs";
import { createUser } from "~/features/authentication/services/register";
import {
  CreatePost,
  DeletePost,
  GetAllPosts,
  GetPostById,
  UpdateAudience,
  UpdatePost,
  UpdateViews,
  UpdatesLikes,
  getUserPosts,
  getUserPostsByUserID,
  savedPost,
} from "~/features/posts/CRUD";
import { deleteUser, getUserProfile } from "~/features/user/services/CRUD";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import strapi from "~/utils/strapi";

export const postRouter = createTRPCRouter({
  getAllPost: protectedProcedure.query(async ({ ctx }) => {
    const userData = await GetAllPosts();
    return userData;
  }),
  getPostById: protectedProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .query(async ({ input, ctx }) => {
      const userData = await GetPostById(input.id);
      return userData;
    }),
  getUserPosts: protectedProcedure.query(async ({ ctx }) => {
    const userData = await getUserPosts(ctx?.session?.user?.id);
    return userData;
  }),

  getUserPostsByUserId: protectedProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .query(async ({ ctx, input }) => {
      const userData = await getUserPostsByUserID(input.id);
      return userData;
    }),
  createPost: protectedProcedure
    .input(
      z.object({
        category: z.string(),
        audience: z.string().optional(),
        caption: z.string().optional(),
        content: z.any().optional(),
        boosted_post: z.boolean().default(false),
        mentions: z.any().optional(),
        hashtags: z
          .array(
            z.object({
              hashtag: z.string(),
            })
          )
          .optional(),
        activity_feeling: z
          .object({
            content: z.string().optional(),
            type: z.string(),
          })
          .optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const data = CreatePost({
        user: ctx.session.user.id,
        caption: input.caption,
        activity_feeling: input.activity_feeling,
        content: input.content,
        hashtags: input.hashtags,
        mentions: input.mentions,
        boosted_post: false,
        createdAtPost: new Date().getTime().toString(),
        category: input.category,
      });
      return data;
    }),

  deletePost: protectedProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .mutation(({ ctx, input }) => {
      return DeletePost(input.id);
    }),

  updatePost: protectedProcedure
    .input(
      z.object({
        caption: z.string().optional(),
        content: z.array(z.string()).optional(),
        mentions: z
          .object({
            image: z.string().optional(),
            video: z.string().optional(),
          })
          .optional(),
        shares: z.string().optional(),
        audience: z.string().optional(),
        hashtags: z
          .array(
            z.object({
              hashtag: z.string(),
            })
          )
          .optional(),
        likes: z
          .array(
            z
              .object({
                type: z.string(),
              })
              .optional()
          )
          .optional(),
        activity_feeling: z
          .array(
            z.object({
              content: z.string(),
              type: z.string(),
            })
          )
          .optional(),
      })
    )
    .mutation(async ({ input }) => {
      const update = await UpdatePost(input, "28");
      return update;
    }),
  savePost: protectedProcedure
    .input(
      z.object({
        postId: z.number(),
      })
    )
    .mutation(({ ctx, input }) => {
      return savedPost({
        userId: ctx.session.user.id,
        postId: input.postId,
      });
    }),
  updateLikeCount: protectedProcedure
    .input(
      z.object({
        likes: z.array(
          z.object({
            type: z.string(),
            user_id: z.number(),
          })
        ),
        postId: z.number(),
      })
    )
    .mutation(({ ctx, input }) => {
      return UpdatesLikes({
        likes: input.likes,
        postId: input.postId,
      });
    }),
  updateAudience: protectedProcedure
    .input(
      z.object({
        audience: z.string(),
        postId: z.number(),
      })
    )
    .mutation(({ ctx, input }) => {
      return UpdateAudience({
        audience: input.audience,
        postId: input.postId,
      });
    }),
  updateViewsCount: protectedProcedure
    .input(
      z.object({
        views: z.array(
          z.object({
            user_id: z.number(),
          })
        ),
        postId: z.number(),
      })
    )
    .mutation(({ ctx, input }) => {
      return UpdateViews({
        views: input.views,
        postId: input.postId,
      });
    }),
});
