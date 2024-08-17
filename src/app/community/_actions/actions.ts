'use server';

import { getPosts } from '@/actions/apis/postAPI';

export async function loadPostData({ searchParams, numShowItems }) {
  const page = searchParams.page ? Number(searchParams.page) : 1;
  const category = searchParams.tag;
  const q = searchParams.q;

  const params = {
    skip: numShowItems * (page - 1) + 1,
    limit: numShowItems,
  };
  if (category) params['category'] = category;
  if (q) params['q'] = q;

  const [data, error] = await getPosts(params);

  if (error) {
    console.error(error);
    return;
  }

  return [data.data[0].posts, data.data[0].total];
}
