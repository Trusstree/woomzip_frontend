import { apiClient, signedApiClient } from "@/configs/apiClient";

export const getPosts = async (params: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.get(`/apis/community`, {
      params: params,
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
    const result = await apiClient.get(`/apis/community/detail`, {
      params: { pid: postNum },
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
};

export const postPost = async (post: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await signedApiClient.post(
      `/apis/community/post/create`,
      post,
    );
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
};
