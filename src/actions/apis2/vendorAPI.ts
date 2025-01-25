'use server';

import { postAPI } from '@/lib/apiUtil';

export const postNews: (vendor: object) => Promise<[ApiVendorResponse, ApiError]> = async (vendor: object) =>
  await postAPI(`/vendors`, vendor);
