import { apiClient, signedApiClient } from "@/configs/apiClient";

export const getHouses = async (params: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.get(`/house/find-my-house`, {
      params: params,
      headers: {},
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};

export const postPlanning = async (house: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await signedApiClient.post(`/planning/apply`, house);
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};
