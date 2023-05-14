import strapi from "~/utils/strapi";
type FAQ = {
  name: string;
  email: string;
  message: string;
  mobile: number;
  request: string;
  lastname?: string;
};
export const CreateGDPR_FAQ = async (data: FAQ) => {
  try {
    const resp = await strapi.axios.post("gdpr-faqs", {
      data: {
        name: "virender",
        lastname: "kumar",
        mobile: 88888888,
        email: "virenderkumar@gmail.com",
        request: "Objection to data sharing – CCPA",
        message: "Give the details",
      },
    });
    return resp;
  } catch (error) {
    throw new Error(`some error occured`);
  }
};
