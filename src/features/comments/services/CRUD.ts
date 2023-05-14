/** @format */

import strapi from "~/utils/strapi";
import {
  CreateCommentType,
  CreateSubCommentType,
} from "../types/Createcomment";
import { Main } from "../types/GET";
import { Like } from "../types/LIKE";

//Create A new Comment
const CreateNewComment = async (data: CreateCommentType) => {
  try {
    const newComment = await strapi.create(`comments`, data);
    return newComment.data;
  } catch (error) {
    throw new Error("Some Error Occurred");
  }
};
// Delete a Comment
const deleteComment = async (id: number) => {
  try {
    const response = await strapi.delete("comments", id);
    return response.data;
  } catch (error) {
    throw new Error("Some Error Occurred");
  }
};
// Start a new Thread for the Comment
const startThread = async (data: CreateSubCommentType) => {
  try {
    const newComment = await strapi.axios.post(
      "comments/api::post.post:1",
      data
    );
    return newComment.data;
  } catch (error) {
    throw new Error("Some Error Occurred");
  }
};
// Update a Comment
const updateComment = async (
  id: number,

  content: string
) => {
  try {
    const response = await strapi.axios.put(`comments/${id}`, {
      data: {
        content,
      },
    });
    return response.data;
  } catch (error) {
    console.log("Udpate Req Error:", error);
    throw new Error("Some Error Occurred");
  }
};

// GET REQUEST
const getCommentsByPostId = async (id: number) => {
  try {
    const response = await strapi.axios.get(
      `comments?populate=author&filters[post]=${id}&pagination[page]=1&pagination[pageSize]=5&sort=createdAt%3Adesc&populate=likes`
    );
    return response.data;
  } catch (error) {
    throw new Error("Some Error Occurred");
  }
};
// Update A like on comment

const updateCommentLikeCount = async (id: number, likes: Like[]) => {
  try {
    const response = await strapi.axios.put(`comments/${id}`, {
      data: {
        likes,
      },
    });
    return response.data;
  } catch (error) {
    console.log("Udpate Req Error:", error);
    throw new Error("Some Error Occurred");
  }
};

export {
  CreateNewComment,
  deleteComment,
  startThread,
  updateComment,
  getCommentsByPostId,
  updateCommentLikeCount,
};
