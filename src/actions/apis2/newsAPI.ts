'use server';

import { getAPI, postAPI } from '@/lib/apiUtil';

export const getNewss: (params: object) => Promise<[ApiNewssResponse, ApiError]> = async (params: object) =>
  await getAPI(`/news`, params);
export const getNews: (postNum: number) => Promise<[ApiNewsResponse, ApiError]> = async (postNum: number) =>
  await getAPI(`/news`, { pid: postNum });
export const postNews: (news: object) => Promise<[ApiNewssResponse, ApiError]> = async (news: object) =>
  await postAPI(`news/post`, news);
