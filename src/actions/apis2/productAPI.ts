'use server';

import { getAPI } from '@/lib/apiUtil';

export const getProduct: (productId: number) => Promise<[ApiProductResponse, ApiError]> = async (productId: number) =>
  await getAPI(`/products/${productId}`);
export const getProducts: (params?: object) => Promise<[ApiProductsResponse, ApiError]> = async (params?: object) =>
  await getAPI(`/products`, params);