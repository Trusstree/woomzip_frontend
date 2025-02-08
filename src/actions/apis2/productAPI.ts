'use server';

import { getAPI } from '@/lib/apiUtil';

export const getProduct: (productId: number, params?: object) => Promise<[ApiProductResponse, ApiError]> = async (
  productId: number,
  params: object,
) => await getAPI(`/products/${productId}`, params);
export const getProducts: (params?: object) => Promise<[ApiProductsResponse, ApiError]> = async (params?: object) =>
  await getAPI(`/products`, params);
