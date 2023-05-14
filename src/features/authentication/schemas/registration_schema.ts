import { validateBirthday, validatePassword } from "../hooks/validation";

export const registration_Schema = {
  username: (value: string) =>
    value.length < 2 ? "Name must have at least 2 letters" : null,
  email: (value: string) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
  password: validatePassword,
  confirmPassword: (value: any, values: any) =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    value !== (values?.password as string) ? "Passwords did not match" : null,
  country: (value: string) => (!value ? "Please Select Your Country" : null),
  gdpr: (value: boolean) => (!value ? "Please Accept Privacy Policy." : null),
  birthday: validateBirthday,
};
