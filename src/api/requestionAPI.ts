import { apiClient } from "@/configs/apiClient";

export const getRequestions = async () => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.get(`/api/requestion`, {
      params: {},
      headers: {}
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
    const result = await apiClient.get(`/api/requestion/${requestionNum}`, {
      params: {},
      headers: {}
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
    const result = await apiClient.post(`/api/requestion/`, requestion, { headers: {} });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
};