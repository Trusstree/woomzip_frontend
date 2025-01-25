'use server';

import { publicApi } from '@/configs/axiosClient';

export const postAPI = async (url: string, body: any): Promise<[ApiResponse<any>, ApiError]> => {
  let [data, error]: [ApiResponse<any>, ApiError] = [undefined, undefined];

  try {
    const result = await publicApi.post(url, body);
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

export async function getAPI(url: string, params = {}): Promise<[ApiResponse<any>, ApiError]> {
  let [response, error]: [ApiResponse<any>, ApiError] = [undefined, undefined];

  try {
    const result = await publicApi.get(url, {
      params: params,
      headers: {},
    });
    if (!result) throw '서버에 문제가 생겼습니다. 새로고침 후에 다시 시도해주세요!';
    if (result.data.result.code >= 400) throw result.data;
    response = result?.data;
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
  return [response, error];
}
