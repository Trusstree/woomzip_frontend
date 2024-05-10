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

export const getHouse = async (houseNum: number) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.get(`/house/find-my-house/detail`, {
      params: { hid: houseNum },
      headers: {},
    });

    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};

export const postHouse = async (house: any, token: string) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await signedApiClient.post(`/house/enroll`, house);
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};

export const updateHouse = async (house: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await signedApiClient.post(`/house/`, house);
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};
