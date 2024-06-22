"use server";

import { privateApi } from "@/configs/axiosClient";

export const getLikeHouses = async (params: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await privateApi.get(`/mypage/like-houses`, {
      params: params,
    });
    data = result?.data;
  } catch (err) {
    error = err.response?.data;
  }

  return [data, error];
};
