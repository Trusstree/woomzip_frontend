'use server';

import { publicApi } from '@/configs/axiosClient';

export const postInquire = async (
  body: InquireHouseInfoState & InquireServiceInfoState & InquireContactInfoState,
): Promise<[ApiProductResponse, any]> => {
  let [data, error] = [undefined, undefined] as [ApiProductResponse, any];

  try {
    const result = await publicApi.post(`/inquiries`, body);
    data = result?.data;
  } catch (err) {
    error = err.response?.data;
    if (!error) error = err;
  }
  return [data, error];
};
