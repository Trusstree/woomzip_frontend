import { apiClient, signedApiClient } from "@/configs/apiClient";

export const getUser = async (uid: string|number, token: string) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.get(`/apis/users/profile`, {
      params: {uid: uid},
      headers: { Authorization: `Bearer ${token}` }
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [ data, error ];
};

export const postUser = async (user: any, token: string) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.post(`/apis/users/enroll`, user, { 
      headers: { Authorization: `Bearer ${token}` }
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
};

export const putUser = async (user: any, token: string) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await signedApiClient.post(`/apis/users/update`, user, { headers: {
      Authorization:`Bearer ${token}`
    } });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [ data, error ];
};