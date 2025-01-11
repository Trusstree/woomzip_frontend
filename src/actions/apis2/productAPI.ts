// porductAPI.ts

import { publicApi } from '@/configs/axiosClient';

// API 호출 함수
export async function getProduct(productId: number): Promise<[ApiProductResponse, any]> {
  let [response, error] = [undefined, undefined] as [ApiProductResponse, any];

  try {
    const result = await publicApi.get(`/products/${productId}`);
    response = result?.data;
  } catch (err) {
    error = err.response?.data;
    if (!error) error = err;
  }

  return [response, error];
}

// API 호출 함수
export async function getProducts(): Promise<[ApiProductsResponse, any]> {
  let [response, error] = [undefined, undefined] as [ApiProductsResponse, any];

  try {
    const result = await publicApi.get(`/products`, {
      params: {},
      headers: {},
    });
    response = result?.data;
  } catch (err) {
    error = err.response?.data;
    if (!error) error = err;
  }

  return [response, error];
}