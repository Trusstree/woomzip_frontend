'use server';

import { publicApi } from '@/configs/axiosClient';

export async function getProduct(productId: number): Promise<[ApiProductResponse, any]> {
  let [response, error] = [undefined, undefined] as [ApiProductResponse, any];

  try {
    const result = await publicApi.get(`/products/${productId}`, {
      params: {},
      headers: {},
    });
    if (!result) throw '서버에 문제가 생겼습니다. 새로고침 후에 다시 시도해주세요!';
    if (result.data.result.code >= 400) throw result.data;
    response = result?.data;
  } catch (err) {
    if (!err?.result)
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
};

export async function getProducts(): Promise<[ApiProductsResponse, any]> {
  let [response, error] = [undefined, undefined] as [ApiProductsResponse, any];

  try {
    const result = await publicApi.get(`/products`, {
      params: {},
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
};
