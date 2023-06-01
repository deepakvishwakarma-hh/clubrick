import { type StrapiRegistrationData } from 'strapi-sdk-js';
import convertPhoneNumber from '~/utils/extractNumber';
import strapi from '~/utils/strapi';

interface type extends StrapiRegistrationData {
  email: string;
  password: string;
  firstName: string;
  lastName?: string;
  phone: string;
}
export const createUser = async (userData: any) => {
  try {
    const { password, email, firstName, lastName, phone } = userData;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { user, jwt } = await strapi.register({
      email: email,
      username: phone,
      password: password,
      firstname: firstName,
      lastname: lastName,
      phone_number: convertPhoneNumber(phone),
    } as any);

    return { user, password };
  } catch (error: any) {
    console.log(error);
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-member-access
    throw new Error(`${error?.error?.message}`);
  }
};
