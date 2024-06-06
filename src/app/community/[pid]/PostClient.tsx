"use client";

import { getPost } from "@/apis/postAPI";
import { useEffect, useState } from "react";
import Image from "next/image";
import DOMPurify from "dompurify";
import PostMenu from "@/components/posts/PostMenu";
import PostList from "@/components/posts/PostList";
import Comments from "@/components/posts/Comments";
import { cardCountText, elapsedTimeText } from "@/lib/stringUtil";
import { postPostHeart, postPostHeartRemove, getPostHeartUser } from "@/apis/HeartAPI";
import { getUserAccessToken } from "@/actions/auth/getUserAccessToken";
import Thumb from "@/components/Thumb";

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
  const [isPostlike, setIsPostlike] = useState(0);
  const [isCommentLike, setIsCommentLike] = useState([]);

  useEffect(() => {
    (async () => {
      if (comments[0] != "render") return;

      const [data, error] = await getPost(pid);
      if (error) {
        console.log(error);
        return;
      }

      if (!postData) setPostData(data.data.post);
      setComments(data.data.comments);

      // 로그인 확인하기
      const at = await getUserAccessToken();
      if (!at) return;

      const [heartData, heartError] = await getPostHeartUser(pid);

      if (heartError) {
        console.error(heartError);
        return;
      }
      if (heartData.data[0]["isPostLike"]) {
        setPostData({ ...data.data.post, ["post_like_count"]: data.data.post["post_like_count"] - 1 });
      }
      setIsPostlike(heartData.data[0]["isPostLike"]);
      setIsCommentLike(heartData.data[0]["isCommentLike"]);
    })();
  }, [comments]);

  const handleLike = async () => {
    if (!isPostlike) {
      const [data, error] = await postPostHeart(pid);
      if (error) {
        console.error(error);
        return;
      }
      setIsPostlike(1);
    } else {
      const [data, error] = await postPostHeartRemove(pid);
      if (error) {
        console.error(error);
        return;
      }
      setIsPostlike(0);
    }
  };

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
          {/* <div className="d-flex">
            <img src={data.profilePicture} width={40} height={40}/>
            <div className="mx-3 fw-bold align-self-center">{data.author}</div>
          </div> */}
          <div className="d-flex justify-content-between" style={{ backgroundColor: "#FAFBFC" }}>
            <div className="row" style={{ width: "auto" }}>
              <div className="d-flex" style={{ width: "60px", padding: "0" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="gray"
                  width={25}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="ps-1" style={{ width: "34px" }}>
                  {cardCountText(postData["post_view_count"])}
                </div>
              </div>
              <div className="d-flex" style={{ width: "60px", padding: "0" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="gray"
                  width={25}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                  />
                </svg>
                <div className="ps-1" style={{ width: "34px" }}>
                  {comments?.length ? cardCountText(comments.length) : 0}
                </div>
              </div>
              <div className="d-flex" style={{ width: "60px", padding: "0" }}>
                <div onClick={handleLike}>
                  <Thumb like={isPostlike} />
                </div>
                <div className="ps-1" style={{ width: "34px" }}>
                  {cardCountText(postData["post_like_count"] + isPostlike)}
                </div>
              </div>
            </div>
            <div style={{ fontSize: "16px", color: "gray" }}>{elapsedTimeText(postData["created_at"])}</div>
          </div>
        </div>
      </div>

      {/* <div className="fw-normal d-flex justify-content-end">
        <div className="m-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={25}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{postData.viewCount}</span>
        </div>

        <div className="m-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={25}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
          </svg>
          <span>{postData.likeCount}</span>
        </div>
      </div> */}

      <div style={{ backgroundColor: "#FAFBFC", borderRadius: "17px", padding: "30px", margin: "50px 0 100px 0" }}>
        <Comments pid={pid} comments={comments} setComments={setComments} />
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
