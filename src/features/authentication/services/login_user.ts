import axios from "axios";
import { signIn } from "next-auth/react";
import Router from "next/router";
import strapi from "~/utils/strapi";
interface type {
  identifier: string;
  password: string;
  path?: string;
}
const loginUserClientSide = async ({ identifier, password, path }: type) => {
  const res = await signIn("credentials", {
    identifier: identifier,
    password: password,

    redirect: false,
    callbackUrl: "/",
  });
  if (res?.error) {
    return {error: res.error}
    // console.log(res.error);
  } else {
    void Router.push(`${path ? path : "/home"}`);
  }
  return res;
};

const loginUserBackend = async ({ identifier, password }: type) => {
  try {
    const { jwt, user } = await strapi.login({
      identifier,
      password,
    });
    user.jwt = jwt;
    return user;
  } catch (e: any) {
    console.log(e);
    //@typescript-eslint/no-unsafe-member-access
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-member-access
    throw new Error(`${e?.error?.message}`);
    // console.log(e);
    // const errorMessage = e.response.data.message;
    // Redirecting to the login page with error message          in the URL
    // throw new Error(errorMessage + '&email=' + credentials.email)
    // return e;
  }
};

export { loginUserBackend, loginUserClientSide };
