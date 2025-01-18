'use server';

import { publicApi } from '@/configs/axiosClient';

// API 호출 함수
export const postVendors = async (body: any): Promise<[ApiProductResponse, any]> => {
  let [data, error] = [undefined, undefined] as [ApiProductResponse, any];

  try {
    const result = await publicApi.post(`/vendors`, body);
    if (result.data.result.code >= 400) throw result.data.result.message;
    data = result?.data;
  } catch (err) {
    error = err;
  }
  return [data, error];
};

