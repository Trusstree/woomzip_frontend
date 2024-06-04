"use client";

import { getPost } from "@/apis/postAPI";
import { useEffect, useState } from "react";
import Image from "next/image";
import DOMPurify from "dompurify";
import PostMenu from "@/components/posts/PostMenu";
import PostList from "@/components/posts/PostList";
import Comments from "@/components/posts/Comments";
import { cardCountText, elapsedTimeText } from "@/lib/stringUtil";
import { getPostHeart, getPostHeartRemove, getPostHeartUser } from "@/apis/HeartAPI";

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
  const [heart, setHeart] = useState(false);

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

      // const [heartData, heartError] = await getPostHeartUser(pid);
      // if(heartError) {console.error(heartError); return;}
      // console.log(heartData);
      // setHeart(heartData.data[0]);
    })();
  }, [comments]);

  const handleLike = async () => {
    if (!heart) {
      const [data, error] = await getPostHeart(pid);
      if (error) {
        console.error(error);
        return;
      }
      setHeart(true);
    } else {
      const [data, error] = await getPostHeartRemove(pid);
      if (error) {
        console.error(error);
        return;
      }
      setHeart(false);
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
                  {postData.viewCount ? postData.viewCount : 0}
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
                      d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                    />
                  </svg>
                </div>
                <div className="ps-1" style={{ width: "34px" }}>
                  {postData.likeCount}
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
