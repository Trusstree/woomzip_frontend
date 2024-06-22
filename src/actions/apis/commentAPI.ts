"use server";

import { privateApi } from "@/configs/axiosClient";

export const postComment = async (comment: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await privateApi.post(`/community/comment/create`, comment);
    data = result?.data;
  } catch (err) {
    error = err.response?.data;
  }

  return [data, error];
};
