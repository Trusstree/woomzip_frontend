'use server';

import { postAPI } from '@/lib/apiUtil';

export const postInquire: (
  inquiry: Omit<InquireProductInfoState, 'productData'> & InquireServiceInfoState & InquireContactInfoState,
) => Promise<[ApiNewssResponse, ApiError]> = async (
  inquiry: Omit<InquireProductInfoState, 'productData'> & InquireServiceInfoState & InquireContactInfoState,
) => await postAPI(`/inquiries`, inquiry);
