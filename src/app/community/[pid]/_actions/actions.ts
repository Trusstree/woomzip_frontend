'use server';

import { getPost } from '@/actions/apis/postAPI';

export async function loadData(pid: any) {
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
