import { apiClient } from "@/configs/apiClient";

export const getPosts = async (params: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.get(`/apis/post`, {
      params: params,
      headers: {}
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
};

export const getPost = async (postNum: number) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.get(`/apis/post/${postNum}`, {
      params: {},
      headers: {}
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
};

export const getPostCount = async (params: any) => {
  let [count, countError] = [undefined, undefined] as any;

  try {
    const result = await apiClient.get(`/apis/post/count`, {
      params: params,
      headers: {}
    });
    count = result?.data;
  } catch (err) {
    countError = err;
  }

  return { count, countError };
};

export const postPost = async (post: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.post(`/apis/post`, post, { headers: {} });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
};