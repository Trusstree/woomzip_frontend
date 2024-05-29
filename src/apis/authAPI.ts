"use server";

import { privateApi, publicApi } from "@/configs/axiosClient";

export const getAccessToken = async () => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await publicApi.get(`/auth/access`);
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};

export const refreshAccessToken = async () => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await privateApi.get(`/users/test`);
    console.log(result);
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};
