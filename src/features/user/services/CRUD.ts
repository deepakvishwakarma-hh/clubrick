/** @format */

import { signOut } from "next-auth/react";
import { RouterOutputs } from "~/utils/api";
import strapi from "~/utils/strapi";
import { UpdateUserT } from "../types/CRUD";
import { TAG_SEARCH_TYPE } from "~/features/posts/types/tag,d";
import { Main } from "../types/GET";

// Get User Details
export const getUserProfileByUseName = async (username: string) => {
  try {
    const user = await strapi.find("users", {
      filters: {
        username: username,
      },
      populate: [
        "work",
        "education",
        "role"
      ],
    });

    return user;
  } catch (error) {
    throw new Error(`Some Error Occured`);
  }
};

// Get User Details
export const getUserProfile = async (id: number) => {
  try {
    const user = await strapi.findOne("users", id, {
      populate: ["work", "education"],
    });
    return user;
  } catch (error) {
    throw new Error(`Some Error Occured`);
  }
};
//  Update
export const updateUser = async ({
  data,
  id,
}: {
  data: UpdateUserT;
  id: number;
}) => {
  try {
    if (data.education?.year) {
      let year = data.education.year.getFullYear();
      data.education.year = year;
    }
    const updatedUser = await strapi.axios.put(`users/${id}`, data);
    return updatedUser.data;
  } catch (error) {
    throw new Error(`Some Error Occured`);
  }
};
//Delete/
export const deleteUser = async (id: number) => {
  try {
    const resp = await strapi.delete("users", id);
    signOut();
    return resp;
  } catch (error) {
    throw new Error(`Some Error Occured`);
  }
};

// Get ALL .groupEnd
export const getAllUsers = async () => {
  try {
    const resp = await strapi.find("users", {
      fields: ["id", "username", "image"],
      pagination: {
        start: 0,
        limit: 5,
      },
    });

    return resp;
  } catch (error) {
    throw new Error(`Some Error Occured`);
  }
};

export const searchUser = async (query: string) => {
  try {
    const resp = await strapi.find<any>("users", {
      pagination: {
        start: 0,
        limit: 10,
      },
      fields: ["id", "username", "image"],
      filters: {
        username: {
          $containsi: query,
        },
      },
    });

    return resp;
  } catch (error) {
    throw new Error(`Some Error Occured`);
  }
};
