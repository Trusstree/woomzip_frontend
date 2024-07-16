"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getPost } from "@/actions/apis/postAPI";
import DOMPurify from "dompurify";
import PostMenu from "@/components/posts/PostMenu";
import PostList from "@/components/posts/PostList";
import Comments from "@/components/posts/Comments";
import { getPostHeartUser } from "@/actions/apis/heartAPI";
import { getUserAccessToken } from "@/actions/auth/authAction";
import Count from "@/components/posts/Count";

type PostpageProps = {
  pid: number;
};

type PostData = {
  id: number;
  author: string;
  category: string;
  comments: string;
  created_at: string;
  likeCount: number;
  pictures: string;
  text: string;
  thumbnail: string;
  title: string;
  updated_at: string;
  viewCount: number;
  commentCount: number;
  nickname: string;
  content: string;
  user_img_url: string;
};

const style = {
  일반: { backgroundColor: "#CCD6FF", color: "#314FC0" },
  공지: { backgroundColor: "#FFCCCC", color: "#C03142" },
  질문: { backgroundColor: "#E2FFCC", cololr: "#8AC031" },
};

export default function PostClient(props: PostpageProps) {
  const { pid } = props;
  const [postData, setPostData] = useState<PostData | undefined>(undefined);
  const [comments, setComments] = useState<string[]>(["render"]);
  const [isPostLike, setIsPostLike] = useState<number>(0);
  const [isCommentLike, setIsCommentLike] = useState<number[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (comments[0] !== "render") return;

      const [data, error] = await getPost(pid);
      if (error) {
        console.log(error);
        return;
      }

      if (!postData) setPostData(data.data.post);
      setComments(data.data.comments);

      const accessToken = await getUserAccessToken();
      if (!accessToken) return;

      const [heartData, heartError] = await getPostHeartUser(pid);
      if (heartError) {
        console.error(heartError);
        return;
      }

      if (heartData.data[0]["isPostLike"]) {
        setPostData({ ...data.data.post, post_like_count: data.data.post.post_like_count - 1 });
      }

      setIsPostLike(heartData.data[0]["isPostLike"]);
      setIsCommentLike(heartData.data[0]["isCommentLike"]);
    };

    fetchData();
  }, [comments, pid, postData]);

  return postData ? (
    <div>
      <div style={{ backgroundColor: "#FAFBFC", borderRadius: "17px", padding: "30px", marginTop: "80px" }}>
        <div
          style={{
            backgroundColor: style[postData.category].backgroundColor,
            borderColor: style[postData.category].backgroundColor,
            width: "60px",
            fontSize: "16px",
            color: style[postData.category].color,
            borderRadius: "15px",
            padding: "3px 7px",
            textAlign: "center",
            margin: "10px 0",
          }}
        >
          {postData.category}
        </div>

        <h2>{postData.title}</h2>

        <div className="row" style={{ marginTop: "30px" }}>
          <div style={{ width: "50px", height: "40px" }}>
            <Image
              src={postData.user_img_url || "/blur_image.png"}
              alt={"pic"}
              width={40}
              height={40}
              style={{ objectFit: "cover", borderRadius: "50px", overflow: "hidden", width: "35px", height: "35px" }}
            />
          </div>
          <div style={{ fontSize: "16px", color: "gray", fontWeight: "400", width: "auto", margin: "5px 0 0 0" }}>
            {postData.nickname}
          </div>
        </div>

        <div
          className="py-5 my-5"
          style={{ minHeight: "300px" }}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(postData.content),
          }}
        />
      </div>
      <div
        className={`card-footer rounded-bottom-3 fw-normal px-2`}
        style={{ backgroundColor: "white", borderColor: "white", marginTop: "20px" }}
      >
        <div className="d-flex justify-content-between">
          <Count
            pid={pid}
            viewCount={postData.viewCount}
            commentCount={comments.length}
            likeCount={postData.likeCount}
            isPostLike={isPostLike}
          />
        </div>
      </div>

      <div style={{ backgroundColor: "#FAFBFC", borderRadius: "17px", padding: "30px", margin: "50px 0 100px 0" }}>
        <Comments pid={pid} comments={comments} setComments={setComments} isCommentLike={isCommentLike} />
      </div>

      {/* 추천정보 */}
      <PostMenu title={"더 많은 글을 구경해보세요!"} routeUrl={"/house"} routeText={"더보기"} horizontalScroll={true}>
        <PostList numShowItems={4} />
      </PostMenu>

      {/* <MobileView style={{ width: "130%", marginLeft: "-10vw", overflow: "hidden" }}>
        <div
          style={{
            backgroundColor: style[postData.category].backgroundColor,
            borderColor: style[postData.category].backgroundColor,
            width: "60px",
            fontSize: "14px",
            color: style[postData.category].color,
            borderRadius: "15px",
            padding: "3px 7px",
            textAlign: "center",
            margin: "20px 0 10px 0",
          }}
        >
          {postData.category}
        </div>
        <h4 style={{ width: "100%", marginLeft: "" }}>{postData.title}</h4>

        <div className="row" style={{ marginTop: " 10px" }}>
          <div style={{ width: "50px", height: "40px" }}>
            <Image
              src={postData.user_img_url || "/blur_image.png"}
              alt={"pic"}
              width={40}
              height={40}
              style={{ objectFit: "cover", borderRadius: "50px", overflow: "hidden", width: "35px", height: "35px" }}
            />
          </div>
          <div style={{ fontSize: "16px", color: "gray", fontWeight: "400", width: "auto", margin: "5px 0 0 0" }}>
            {postData.nickname}
          </div>
        </div>

        <div
          style={{ minHeight: "400px", marginTop: "20px" }}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(postData.content),
          }}
        />
        <div
          className={`card-footer rounded-bottom-3 fw-normal px-2`}
          style={{ backgroundColor: "white", borderColor: "white" }}
        >
          <div className="d-flex justify-content-between" style={{ marginLeft: "4px" }}>
            <Count
              pid={pid}
              viewCount={postData.viewCount}
              commentCount={comments.length}
              likeCount={postData.likeCount}
              isPostLike={isPostLike}
            />
          </div>
        </div>
        <div style={{ margin: "60px 0" }}>
          <Comments pid={pid} comments={comments} setComments={setComments} isCommentLike={isCommentLike} />
        </div>

        <PostMenu title={"더 많은 글을 구경해보세요!"} routeUrl={"/house"} routeText={"더보기"} horizontalScroll={true}>
          <PostList numShowItems={6} />
        </PostMenu>
      </MobileView> */}
    </div>
  ) : (
    <div>Loading</div>
  );
}
