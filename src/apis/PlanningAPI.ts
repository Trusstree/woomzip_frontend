"use server";

import { privateApi, publicApi } from "@/configs/axiosClient";

export const getHouses = async (params: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await publicApi.get(`/house/find-my-house`, {
      params: params,
      headers: {},
    });
    data = result?.data;
  } catch (err) {
    error = err.response?.data;
  }

  return [data, error];
};

export const postPlanning = async (house: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await privateApi.post(`/planning/apply`, house);
    data = result?.data;
  } catch (err) {
    error = err.response?.data;
  }

  return [data, error];
};
