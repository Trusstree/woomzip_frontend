"use client";

import { getLivingReviews } from "@/apis/living";
import { RouteButtonLight } from "@/components/living/RouteButtonLight";
import { useState, useEffect } from "react";
import { ReviewBox } from "../../app/mypage/[uid]/review/_components/ReviewBox";
import { ReviewMiniBox } from "./ReviewMiniBox";
import { useRouter } from "next/navigation";

export function ReviewInfo() {
  const [count, setCount] = useState(5);
  const [review, setReview] = useState([]);

  const router = useRouter();
  const handleClick = () => {
    router.push("/mypage/1/review");
  };

  useEffect(() => {
    (async () => {
      const [data, error] = await getLivingReviews(1);
      if (error) {
        console.error(error);
        return;
      }
      console.log(data.data[0]["pavilion_review"]);
      setReview(data.data[0]["pavilion_review"]);
      setCount(data.data[0]["pavilion_review_cnt"]);
    })();
  }, []);

  return (
    <div style={{ marginTop: "20px", width: "100%" }}>
      <div
        className="d-flex justify-content-between"
        style={{ margin: "30px 0 10px 0" }}
      >
        <h5>후기({count}) ★ 0.0</h5>
        <div style={{ color: "gray", fontSize: "15px" }} onClick={handleClick}>
          전체보기
        </div>
      </div>
      <div
        className="row flex-nowrap overflow-auto g-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {review.map((e, i) => (
          <ReviewMiniBox
            key={e["pavilion_review_id"]}
            id={e["fk_pavilion_id"]}
            nickname={e["nickname"]}
            date={e["updated_at"] ? e["updated_at"] : e["created_at"]}
            helpful={e["helpful"]}
            tag={JSON.parse(e["tag"])}
            comment={e["pavilion_review_text"]}
            images={JSON.parse(e["pavilion_review_images"])}
          />
        ))}
      </div>
    </div>
  );
}
