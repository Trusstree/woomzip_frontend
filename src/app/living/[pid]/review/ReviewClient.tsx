"use client";

import React, { useEffect, useState } from "react";
import { ReviewBox } from "@/components/living/ReviewBox";
import { RouteButtonLight } from "@/components/living/RouteButtonLight";
import { getLivingReviews } from "@/apis/living";

export default function ReviewClient() {
  const [review, setReview] = useState([]);
  const [count, setCount] = useState(17);

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
            helpful={e["helpful"]}
            tag={JSON.parse(e["tag"])}
            comment={e["pavilion_review_text"]}
            images={JSON.parse(e["pavilion_review_images"])}
          />
        ))}
      </div>
    </>
  );
}
