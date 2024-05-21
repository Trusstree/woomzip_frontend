"use server";

import { privateApiServer } from "@/configs/privateApiServer";
import { publicApi } from "@/configs/publicApi";
import { cookies } from "next/headers";

export const getUser = async (uid: string | number) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await privateApiServer.get(`/users/profile`, {
      params: { uid: uid },
    });
    data = result?.data;
  } catch (err) {
    console.log(err);
    error = err;
  }

  return [data, error];
};

export const signinUser = async (user: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await publicApi.post(`/auth/sign-in`, user);
    const cookieStorage = cookies();
    cookieStorage.set("accessToken", result?.data.data.access_token, {
      //expires?: Date;
      //domain: ".buildintruss.com",
      path: "/",
      secure: true,
      httpOnly: true,
      sameSite: true,
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};
