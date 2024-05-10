import { apiClient } from "@/configs/apiClient";

export const getRequestions = async () => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.get(`/requestion`, {
      params: {},
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
};

export const getRequestion = async (requestionNum: number) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.get(`/requestion/${requestionNum}`, {
      params: {},
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
};

export const postRequestion = async (requestion: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.post(`/requestion/`, requestion);
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
};
