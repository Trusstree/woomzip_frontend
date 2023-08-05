import { ApiClient } from "@/api/apiClient";

export const getBuilders = async () => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await ApiClient.get(`/builder`, {
      params: {},
      headers: {}
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
};

export const getBuilder = async (builderNum: number) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await ApiClient.get(`/builder/${builderNum}`, {
      params: {},
      headers: {}
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
};

export const postBuilder = async (builder: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await ApiClient.post(`/builder/`, builder, { headers: {} });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
};