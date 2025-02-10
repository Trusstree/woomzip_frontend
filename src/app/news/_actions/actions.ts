'use server';

import { getPosts } from '@/actions/apis/postAPI';
import { getNewss } from '@/actions/apis2/newsAPI';

export async function loadPostData({ searchParams, numShowItems }) {
  const page = searchParams.page ? Number(searchParams.page) : 1;
  const category = searchParams.category;
  const q = searchParams.q;

  const params = {
    skip: numShowItems * (page - 1) + 1,
    limit: numShowItems,
  };
  if (category) params['category'] = category;
  if (q) params['q'] = q;

  const [data, error] = await getNewss(params);

  if (error) {
    console.error(error);
    return [undefined, undefined];
  }

  return data.payload;
}
