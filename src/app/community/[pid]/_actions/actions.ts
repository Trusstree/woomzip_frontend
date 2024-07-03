"use server";

import { getUserAccessToken } from "@/actions/auth/authAction";
import { getPostHeartUser } from "@/actions/apis/HeartAPI";
import { getPost } from "@/actions/apis/postAPI";

export async function loadData(pid: any) {
  let [postData, comments, isPostLike, isCommentLike] = [undefined, undefined, undefined, undefined];

  const [data, error] = await getPost(pid);

  if (error) {
    console.log(error);
    return { postData, comments, isPostLike, isCommentLike };
  }

  postData = data.data.post;
  comments = data.data.comments;

  // 로그인 확인하기
  const at = await getUserAccessToken();
  if (!at) return { postData, comments, isPostLike, isCommentLike };

  const [heartData, heartError] = await getPostHeartUser(pid);

  if (heartError) {
    console.error(heartError);
    return { postData, comments, isPostLike, isCommentLike };
  }

  isPostLike = heartData?.data[0]["isPostLike"];
  isCommentLike = heartData?.data[0]["isCommentLike"];

  return { postData, comments, isPostLike, isCommentLike };
}
