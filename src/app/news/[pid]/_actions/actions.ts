'use server';

import { getNews } from '@/actions/apis2/newsAPI';

export async function loadPostData(pid: any): Promise<any> {
  let [postData, comments]:[any, any] = [undefined, undefined];
  const [data, error] = await getNews(pid);

  if (error) {
    console.log(error);
    return { postData, comments };
  }

  postData = data.payload;

  return postData;
}
