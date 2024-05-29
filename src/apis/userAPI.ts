"use server";

import { privateApi, publicApi } from "@/configs/axiosClient";
import { cookies } from "next/headers";

export const getUser = async (uid: string | number) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await privateApi.get(`/users/profile`, {
      params: { uid: uid },
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};

export const postUser = async (user: any, token: string) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await publicApi.post(`/users/enroll`, user);
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
};

export const putUser = async (user: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await privateApi.post(`/users/update`, user);
    data = result?.data;
  } catch (err) {
    console.log("asdfqmnqqpqwoed하나둘하나둘1");
    error = err;
  }
  console.log("asdfqmnqqpqwoed하나둘하나둘8");
  return [data, error];
};

export const signinUser = async (user: { login_id: string; password: string }) => {
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
    console.log("error");
    error = err;
  }

  return [data, error];
};

export const signupUser = async (user: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await publicApi.post(`/auth/sign-up`, user);
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};

export const validateID = async (user_id: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await publicApi.get(`/auth/exist/id`, {
      params: { id: user_id },
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};

export const validateName = async (nickname: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await publicApi.get(`/auth/exist/nickname`, {
      params: { nickname: nickname },
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};
