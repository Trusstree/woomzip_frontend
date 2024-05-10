"use client";

import React, { useEffect, useState } from "react";
import { ReviewBox } from "@/components/living/ReviewBox";
import { RouteButtonLight } from "@/components/living/RouteButtonLight";
import { getLivingReviews } from "@/apis/living";

const ReviewBoxExample = [
  {
    pavilion_review_id: 13,
    fk_pavilion_id: 1,
    nickname: "JuseunL",
    pavilion_review_text: "여덟번째 리뷰",
    tag: ["자연 친화적", "난방이 잘돼요"],
    rating: 8,
    created_at: "2024-05-08T16:17:43.000Z",
    updated_at: null,
    pavilion_review_images: `${process.env.NEXT_PUBLIC_AWS_S3_URL}/test_house/healingRiver1.jpeg`,
  },
];

export default function ReviewClient() {
  const [review, setReview] = useState(ReviewBoxExample);
  const [count, setCount] = useState(17);

  useEffect(() => {
    (async () => {
      const [data, error] = await getLivingReviews(1);
      if (error) {
        console.error(error);
        return;
      }
      console.log(data);
      setReview(data.data["pavilion_review"]);
      setCount(data.data["pavilion_review_cnt"]);
    })();
  }, []);

  return (
    <>
      <div style={{ margin: "40px 0 30px 0" }}>
        <span style={{ fontSize: "25px", margin: "0", color: "#101648" }}>후기 </span>
        <span style={{ fontSize: "25px", marginLeft: "15px", color: "gray" }}>({count})</span>
        <RouteButtonLight url={"/living/1/review/write"} text={"후기쓰기"} />
      </div>
      <div>
        {review.map((e, i) => (
          <ReviewBox
            key={e["pavilion_review_id"]}
            id={e["fk_pavilion_id"]}
            nickname={e["nickname"]}
            date={e["updated_at"] ? e["updated_at"] : e["created_at"]}
            rating={e["rating"]}
            tag={e["tag"]}
            comment={e["pavilion_review_text"]}
            images={e["pavilion_review_images"]}
          />
        ))}
      </div>
    </>
  );
}
