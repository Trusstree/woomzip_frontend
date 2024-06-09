"use client";

import { getPost } from "@/apis/postAPI";
import { useEffect, useState } from "react";
import Image from "next/image";
import DOMPurify from "dompurify";
import PostMenu from "@/components/posts/PostMenu";
import PostList from "@/components/posts/PostList";
import Comments from "@/app/community/[pid]/_components/Comments";
import { getPostHeartUser } from "@/apis/HeartAPI";
import { getUserAccessToken } from "@/actions/auth/getUserAccessToken";
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
};

const style = {
  일반: { backgroundColor: "#CCD6FF", color: "#314FC0" },
  공지: { backgroundColor: "#FFCCCC", color: "#C03142" },
  질문: { backgroundColor: "#E2FFCC", cololr: "#8AC031" },
};

export default function PostClient(props: PostpageProps) {
  const { pid } = props;
  const [postData, setPostData] = useState(undefined as PostData | undefined);
  const [comments, setComments] = useState(["render"]);
  const [isPostLike, setIsPostLike] = useState(0);
  const [isCommentLike, setIsCommentLike] = useState([]);

  useEffect(() => {
    (async () => {
      if (comments[0] != "render") return;

      const [data, error] = await getPost(pid);
      if (error) {
        console.log(error);
        return;
      }
      console.log(data);

      if (!postData) setPostData(data.data.post);
      setComments(data.data.comments);

      // 로그인 확인하기
      const at = await getUserAccessToken();
      if (!at) return;

      const [heartData, heartError] = await getPostHeartUser(pid);
      console.log(heartData);
      if (heartError) {
        console.error(heartError);
        return;
      }
      if (heartData.data[0]["isPostLike"]) {
        setPostData({ ...data.data.post, ["post_like_count"]: data.data.post["post_like_count"] - 1 });
      }
      setIsPostLike(heartData.data[0]["isPostLike"]);
      setIsCommentLike(heartData.data[0]["isCommentLike"]);
      console.log(heartData.data[0]);
    })();
  }, [comments]);

  return postData ? (
    <div className="container">
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
          {postData["category"]}
        </div>

        <h2>{postData.title}</h2>

        <div className="row" style={{ marginTop: "30px" }}>
          <div style={{ width: "50px", height: "40px" }}>
            <Image
              src={postData?.["user_img_url"] || "/blur_image.png"}
              alt={"pic"}
              width={40}
              height={40}
              style={{ objectFit: "cover", borderRadius: "50px", overflow: "hidden", width: "35px", height: "35px" }}
            />
          </div>
          <div style={{ fontSize: "16px", color: "gray", fontWeight: "400", width: "auto", margin: "5px 0 0 0" }}>
            {postData["nickname"]}
          </div>
        </div>

        <div
          className="py-5 my-5"
          style={{ minHeight: "500px" }}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(String(postData["content"])),
          }}
        />
        <div
          className={`card-footer rounded-bottom-3 fw-normal px-2`}
          style={{ backgroundColor: "white", borderColor: "white" }}
        >
          <div className="d-flex justify-content-between" style={{ backgroundColor: "#FAFBFC" }}>
            <Count
              pid={pid}
              viewCount={postData["view_count"]}
              commentCount={comments.length}
              likeCount={postData["post_like_count"]}
              isPostLike={isPostLike}
              setIsPostLike={setIsPostLike}
            />
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#FAFBFC", borderRadius: "17px", padding: "30px", margin: "50px 0 100px 0" }}>
        <Comments pid={pid} comments={comments} setComments={setComments} isCommentLike={isCommentLike} />
      </div>

      {/* 추천정보 */}
      <PostMenu title={"더 많은 글을 구경해보세요!"} routeUrl={"/house"} routeText={"더보기"} horizontalScroll={true}>
        <PostList numShowItems={6} />
      </PostMenu>
    </div>
  ) : (
    <div>Loading</div>
  );
}
