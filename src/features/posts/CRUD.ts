/** @format */

import strapi from "~/utils/strapi";
import { CREATE_POST, POST_UPDATE } from "./types/post";
import {
  AUDIENCE_INTERFACE,
  LIKE_API_INTERFACE,
  POST_API_INTERFACE,
  VIEWS_API_INTERFACE,
} from "./types/API";
import { uploadFiles } from "~/utils/bunny";
// Fake Post Data

// Populate Properties
// Popoulate
const populate = ["hashtags", "likes", "user", "activity_feeling", "views"];
let Config = {
  populate,
  sort: "createdAt:desc",
};

// Create A new Post
export const CreatePost = async (data: CREATE_POST) => {
  try {
    const resp = await strapi.create<POST_API_INTERFACE[]>("posts", data);
    return resp.data;
  } catch (error) {
    throw new Error(`some error occured`);
  }
};
// Delete Post
export const DeletePost = async (id: number) => {
  try {
    const resp = await strapi.delete("posts", id);
    return resp.data;
  } catch (error) {
    throw new Error(`some error occured`);
  }
};
// Update Post
export const UpdatePost = async (data: POST_UPDATE, id: string) => {
  try {
    const resp = await strapi.axios.put(`posts/30`, {
      data: data,
    });
    return resp.data;
  } catch (error) {
    throw new Error(`some error occured`);
  }
};
// getPost By Id
export const GetPostById = async (id: number) => {
  try {
    const MyPost = await strapi.findOne("posts", id, Config);
    return MyPost.data;
  } catch (error) {
    throw new Error(`some error occured`);
  }
};
// GetAll Posts
export const GetAllPosts = async () => {
  try {
    const MyPost = await strapi.find<POST_API_INTERFACE[]>("posts", Config);
    return MyPost.data;
  } catch (error) {
    throw new Error(`some error occured`);
  }
};

// Get User Post

export const getUserPosts = async (id: number) => {
  try {
    const MyPost = await strapi.find<POST_API_INTERFACE[]>("posts", {
      filters: {
        user: id,
      },
      populate,
    });
    return MyPost.data;
  } catch (error) {
    throw new Error(`some error occured`);
  }
};
// Get User Post

export const getUserPostsByUserID = async (id: number) => {
  try {
    const MyPost = await strapi.find<POST_API_INTERFACE[]>("posts", {
      filters: {
        user: id,
      },
      populate,
    });
    return MyPost.data;
  } catch (error) {
    throw new Error(`some error occured`);
  }
};

// Saved The Post Into User
export const savedPost = async ({
  userId,
  postId,
}: {
  userId: number;
  postId: number;
}) => {
  try {
    const updatedUser = await strapi.axios.put(`users/${userId}`, {
      saved_post: postId,
    });
    return updatedUser.data;
  } catch (error) {
    throw new Error(`Some Error Occrrued`);
  }
};
// Update Likes

export const UpdatesLikes = async (data: LIKE_API_INTERFACE) => {
  try {
    const resp = await strapi.axios.put(`posts/${data.postId}`, {
      data: data,
    });
    return resp.data;
  } catch (error) {
    throw new Error(`${"SOme Error Occured"}`);
  }
};

export const UpdateAudience = async (data: AUDIENCE_INTERFACE) => {
  try {
    const resp = await strapi.axios.put(`posts/${data.postId}`, {
      data: data,
    });
    return resp.data;
  } catch (error) {
    throw new Error(`${"SOme Error Occured"}`);
  }
};
export const UpdateViews = async (data: VIEWS_API_INTERFACE) => {
  try {
    const resp = await strapi.axios.put(`posts/${data.postId}`, {
      data: data,
    });
    return resp.data;
  } catch (error) {
    throw new Error(`${"SOme Error Occured"}`);
  }
};
