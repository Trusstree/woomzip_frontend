import { apiClient } from "@/configs/apiClient";

export const getUser = async (userNum: number) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.get(`/api/user/${userNum}`, {
      params: {},
      headers: {}
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
};

export const postUser = async (user: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.post(`/api/user/`, user, { headers: {} });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
};

export const updateUser = async (user: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.put(`/api/user/`, user, { headers: {} });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
};