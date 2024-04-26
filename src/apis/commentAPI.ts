import { apiClient } from "@/configs/apiClient";

export const getComment = async (id: string) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.get(`/apis/comment`, {
      params: {id: id},
      headers: {}
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
};

export const postComment = async (comment: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.post(`/apis/comment`, comment);
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
};
