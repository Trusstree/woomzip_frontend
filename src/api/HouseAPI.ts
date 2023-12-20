import { apiClient } from "@/configs/apiClient";

export const getHouses = async (params: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.get(`/api/house`, {
      params: params,
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

export const getHouseLast = async (params: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.get(`/api/house/last`, {
      params: params,
      headers: {}
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
}

export const getHouseCount = async (params: any) => {
  let [count, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.get(`/api/house/count`, {
      params: params,
      headers: {}
    });
    count = result?.data;
  } catch (err) {
    error = err;
  }

  return { count, error };
}
