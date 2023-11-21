import { apiClient } from "@/configs/apiClient";

export const getHouses = async () => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.get(`/api/house`, {
      params: {},
      headers: {}
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
};

export const getHouse = async (houseNum: number) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.get(`/api/house/${houseNum}`, {
      params: {},
      headers: {}
    });
    
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
};

export const postHouse = async (house: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.post(`/api/house`, house, { headers: {} });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
};

export const getHouseCount = async () => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.get(`/api/house/count/`, { headers: {} });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
}