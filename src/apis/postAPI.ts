"use server";

import { privateApi, publicApi } from "@/configs/axiosClient";

export const getPosts = async (params: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await publicApi.get(`/community`, {
      params: params,
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};

export const getPost = async (postNum: number) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await publicApi.get(`/community/detail`, {
      params: { pid: postNum },
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};

export const postPost = async (post: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await privateApi.post(`/community/post/create`, post);
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
};
