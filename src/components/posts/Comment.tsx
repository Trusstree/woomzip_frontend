"use client";

import { elapsedTimeText } from "@/lib/stringUtil";
import Image from "next/image";
import { postCommentHeart, postCommentHeartRemove } from "@/apis/HeartAPI";
import { getUserAccessToken } from "@/actions/auth/getUserAccessToken";
import { useState } from "react";

export default function Comment({ data, isCommentLike }) {
  const [isLike, setIsLike] = useState(isCommentLike?.includes(data["comment_id"]));

  const handleLike = async () => {
    // 로그인 확인하기
    const at = await getUserAccessToken();
    if (!at) return;

    if (!isLike) {
      const [heartData, heartError] = await postCommentHeart(data["comment_id"]);
      if (heartError) {
        console.error(heartError);
        return;
      }
      setIsLike(1);
    } else {
      const [heartData, heartError] = await postCommentHeartRemove(data["comment_id"]);
      if (heartError) {
        console.error(heartError);
        return;
      }
      setIsLike(0);
    }
  };

  return (
    <div className="py-3 px-4" style={{ background: "#FAFBFC" }}>
      <div className="d-flex justify-content-between" style={{ marginBottom: "15px" }}>
        <div className="row" style={{ width: "400px" }}>
          <div style={{ width: "50px", height: "40px" }}>
            <Image
              src={data["user_img_url"]}
              alt={"user_img_url"}
              width={40}
              height={40}
              style={{
                objectFit: "cover",
                borderRadius: "50px",
                overflow: "hidden",
                width: "35px",
                height: "35px",
              }}
            />
          </div>
          <div style={{ width: "200px", marginTop: "5px", fontWeight: "600" }}>{data["nickname"]}</div>
        </div>
        <div className="d-flex" style={{ width: "60px", padding: "0" }}>
          <div onClick={handleLike}>
            {isLike ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
                width={25}
              >
                <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
                width={25}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                />
              </svg>
            )}
          </div>
          <div className="ms-1">{data["comment_like_count"]}</div>
        </div>
      </div>
      <div style={{ width: "95%", marginLeft: "5%" }}>
        <div className="mb-3">{data["content"]}</div>
        <div>
          <div>{elapsedTimeText(data["updated_at"] || data["created_at"])}</div>
        </div>
      </div>
      <hr style={{ border: "1px solid gray" }} />
    </div>
  );
}
