import { publicApi } from "@/configs/axiosClient";

export const getComment = async (id: string) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await publicApi.get(`/comment`, {
      params: { id: id },
      headers: {},
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
    const result = await publicApi.post(`/comment`, comment);
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
};
