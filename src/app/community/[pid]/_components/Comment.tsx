"use client";

import { cardCountText, elapsedTimeText } from "@/lib/stringUtil";
import Image from "next/image";
import { postCommentHeart, postCommentHeartRemove } from "@/apis/HeartAPI";
import { getUserAccessToken } from "@/actions/auth/authAction";
import { useEffect, useState } from "react";
import HeartComponent from "@/components/posts/HeartComponent";

export default function Comment({ data, isCommentLike }) {
  const [isLike, setIsLike] = useState(0);
  const [likeCount, setLikeCount] = useState(data["comment_like_count"]);

  useEffect(() => {
    if (isCommentLike) {
      setIsLike(isCommentLike.includes(data["comment_id"]));
      setLikeCount((cnt) => cnt - isCommentLike.includes(data["comment_id"]));
    }
  }, [isCommentLike]);

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
              src={data["user_img_url"] || "/blur_image.png"}
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
          <HeartComponent
            pid={data["comment_id"]}
            likeCount={data["comment_like_count"]}
            isLiked={isLike}
            postHeart={postCommentHeart}
            postHeartRemove={postCommentHeartRemove}
          />
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
