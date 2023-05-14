// Create Group Function
import { stringify } from 'postcss';
import { z} from 'zod';
import { GroupSchema } from '~/server/zod/group';
import strapi from "~/utils/strapi";
import { Datum, Main } from './types/GET';
const CreateGroupT = GroupSchema.extend({
    admin:z.number()
})
type Type = z.infer<typeof CreateGroupT> 

export const CreateGroup = async (data:Type) => {
    try {
      const resp = await strapi.create ("groups", data);
      return resp.data;
    } catch (error) {
      throw new Error(`some error occured`);
    } }


    // Get User Details
export const getGroupByGroupName = async (username: string) => {
  try {
    const user = await strapi.find<Datum[]>("groups", {
      filters: {
        url: username,
      },
      populate: [
      "members"
      ],
    });

    return user
  } catch (error) {
    throw new Error(`Some Error Occured`);
  }
};

// Add Member to Groups 
export const sendGroupRequest = async (id:number,data:any) =>{
const sendReq = await strapi.update("groups",id,data)
}