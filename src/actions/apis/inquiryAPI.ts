'use server';

import { publicApi } from '@/configs/axiosClient';

export const postInquiryMain = async (inquiry: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await publicApi.post(`/planning/main`, inquiry);
    data = result?.data;
  } catch (err) {
    error = err.response?.data;
    if (!error) error = err;
  }

  return [data, error];
};

export const postInquiryHouse = async (inquiry: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await publicApi.post(`/planning/house`, inquiry);
    data = result?.data;
  } catch (err) {
    error = err.response?.data;
    if (!error) error = err;
  }

  return [data, error];
};
