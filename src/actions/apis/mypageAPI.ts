"use server";

import { publicApi, privateApi } from "@/configs/axiosClient";

export const getLikeHouses = async (params: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await privateApi.get(`/mypage/like-houses`, {
      params: params,
    });
    data = result?.data;
  } catch (err) {
    error = err.response?.data;
  }

  return [data, error];
};

export const getCompanyMypage = async (uid: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await publicApi.get(`/mypage/company/${uid}`);
    data = result?.data;
  } catch (err) {
    error = err.response?.data;
  }

  return [data, error];
};

export const getCompanyConfirm = async (uid: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await privateApi.get(`/auth/company/confirm/${uid}`);
    data = result?.data;
  } catch (err) {
    error = err.response?.data;
  }

  return [data, error];
};

export const getCompanyList = async () => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await privateApi.get(`/auth/company`);
    data = result?.data;
  } catch (err) {
    error = err.response?.data;
  }

  return [data, error];
};
