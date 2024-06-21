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

export const getHouse = async (houseNum: number) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await publicApi.get(`/house/find-my-house/detail`, {
      params: { hid: houseNum },
      headers: {},
    });

    data = result?.data;
  } catch (err) {
    error = err.response?.data;
  }

  return [data, error];
};

export const postHouse = async (house: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await privateApi.post(`/house/enroll`, house);
    data = result?.data;
  } catch (err) {
    error = err.response?.data;
  }

  return [data, error];
};

export const updateHouse = async (house: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await privateApi.post(`/house/`, house);
    data = result?.data;
  } catch (err) {
    error = err.response?.data;
  }

  return [data, error];
};

export const postHouseReview = async (body: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await privateApi.post(`/review/house/create`, body);
    data = result?.data;
  } catch (err) {
    error = err.response?.data;
  }

  return [data, error];
};

export const getHouseReviews = async (houseNum: number) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await publicApi.get(`/house/review/${houseNum}`, {
      params: {},
      headers: {},
    });

    data = result?.data;
  } catch (err) {
    error = err.response?.data;
  }

  return [data, error];
};
