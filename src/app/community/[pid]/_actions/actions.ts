'use server';

import { getPost, getPosts } from '@/actions/apis/postAPI';

export async function loadPostData(pid: any) {
  let [postData, comments] = [undefined, undefined];

  const [data, error] = await getPost(pid);

  if (error) {
    console.log(error);
    return { postData, comments };
  }

  postData = data.data.post;
  comments = data.data.comments;

  return { postData, comments };
}

export async function loadRecommendPostData(pid: any) {
  const [page, numShowItems] = [1, 10];

  const params = {
    skip: numShowItems * (page - 1) + 1,
    limit: numShowItems,
  };

  const [data, error] = await getPosts(params);

  if (error) {
    console.log(error);
    return undefined;
  }

  console.log(data);
  return data.data[0].posts;
}
