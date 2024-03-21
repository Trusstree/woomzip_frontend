import { apiClient } from "@/configs/apiClient";

export const getUser = async (id: string) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.get(`/apis/user`, {
      params: {id: id},
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
    const result = await apiClient.post(`/apis/user`, user, { headers: {} });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
};

export const putUser = async (user: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.put(`/apis/user`, user, { headers: {} });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [ data, error ];
};

export const getUserLast = async (user: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.get(`/apis/user/last`, { headers: {} });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
};