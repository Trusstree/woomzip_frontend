import { ApiClient } from "@/api/apiClient";

export const getConstructors = async () => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await ApiClient.get(`/api/constructor`, {
      params: {},
      headers: {}
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
};

export const getConstructor = async (constructorNum: number) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await ApiClient.get(`/api/constructor/${constructorNum}`, {
      params: {},
      headers: {}
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
};

export const postConstructor = async (constructor: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await ApiClient.post(`/api/constructor/`, constructor, { headers: {} });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
};