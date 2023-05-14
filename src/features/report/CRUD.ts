import strapi from "~/utils/strapi";
import { GENERATE_REPORT_TYPE } from "./types/CRUD";

export const GenerateReport = async (data: GENERATE_REPORT_TYPE) => {
  try {
    const resp = await strapi.create("reports", data);
    return resp.data;
  } catch (error) {
    throw new Error(`Some error Occurred`);
  }
};
