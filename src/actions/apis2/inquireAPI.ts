'use server';

import { publicApi } from '@/configs/axiosClient';

export const postInquire = async (
  body: Omit<InquireProductInfoState, 'productData'> & InquireServiceInfoState & InquireContactInfoState,
): Promise<[ApiProductResponse, any]> => {
  let [data, error]: [ApiProductResponse, ApiError] = [undefined, undefined];

  try {
    const result = await publicApi.post(`/inquiries`, body);
    if (!result) throw '서버에 문제가 생겼습니다. 새로고침 후에 다시 시도해주세요!';
    if (result.data.result.code >= 400) throw result.data;
    data = result?.data;
  } catch (err) {
    if (!err.result)
      error = {
        title: '서버 에러',
        message: '서버에 문제가 생겼습니다. 새로고침 후에 다시 시도해주세요!',
      };
    else
      error = {
        title: err.result.message,
        message: err.payload,
      };
  }
  return [data, error];
};
