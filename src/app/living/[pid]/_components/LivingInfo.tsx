"use client";

import { getLivingReviews } from "@/apis/living";
import { ReviewMiniBox } from "@/app/living/[pid]/_components/ReviewMiniBox";
import { RouteButtonLight } from "@/components/living/RouteButtonLight";
import { useState, useEffect } from "react";
import { ReviewBox } from "../review/_components/ReviewBox";

export function LivingInfo() {
  const [count, setCount] = useState(5);
  const [review, setReview] = useState([]);

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
    <div>
      <div
        className="badge"
        style={{
          padding: "10px",
          margin: "30px 0",
          backgroundColor: "lightGray",
          color: "gray",
          fontSize: "16px",
        }}
      >
        지금까지 {count}명이 살아봤어요!
      </div>
      <div className="d-flex justify-content-between">
        <div style={{ color: "gray", fontSize: "14px" }}>후기({count})</div>
        <RouteButtonLight url={"/living/1/review"} text={"전체보기"} />
      </div>
      <div className="row flex-nowrap overflow-auto g-2">
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
