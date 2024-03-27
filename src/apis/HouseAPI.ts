import { apiClient } from "@/configs/apiClient";
import { HouseDataType } from "@/types/house";

export const getHouses = async (params: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.get(`/apis/house/enroll`, {
      params: params,
      headers: {}
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [ data, error ];
};

export const getHouse = async (houseNum: number) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.get(`/apis/house/${houseNum}`, {
      params: {},
      headers: {}
    });
    
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [ data, error ];
};

export const postHouse = async (house: HouseDataType) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.post(`/apis/house`, house, { headers: {} });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [ data, error ];
};

export const getHouseCount = async (params: any) => {
  let [count, countError] = [undefined, undefined] as any;

  try {
    const result = await apiClient.get(`/apis/house/count`, {
      params: params,
      headers: {}
    });
    count = result?.data;
  } catch (err) {
    countError = err;
  }

  return [ count, countError ];
}

export const putHouse = async (house: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.put(`/apis/house/`, house, { headers: {} });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [ data, error ];
}