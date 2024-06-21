"use client";

import { getLivingReviews } from "@/actions/apis/living";
import { ReviewMiniBox } from "@/app/living/[pid]/_components/ReviewMiniBox";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export function LivingInfo() {
  const [count, setCount] = useState(0);
  const [review, setReview] = useState([]);
  const [rating, setRating] = useState(0);

  const router = useRouter();
  const handleClick = () => {
    router.push("/living/1/review");
  };

  useEffect(() => {
    (async () => {
      const [data, error] = await getLivingReviews(1);
      if (error) {
        console.error(error);
        return;
      }
      setReview(data.data[0]["pavilion_review"]);
      setCount(data.data[0]["pavilion_review_cnt"]);
      setRating(data.data[0]["pavilion_review_rating"]);
    })();
  }, []);

  return (
    <div style={{ marginTop: "20px", width: "100%" }}>
      <div
        style={{
          margin: "10px 0",
          fontSize: "17px",
        }}
      >
        지금까지 {count}팀이 살아봤어요!
      </div>
      <hr />
      <div className="d-flex justify-content-between" style={{ margin: "30px 0 10px 0" }}>
        <h5>
          후기({count}) ★ {rating.toFixed(1)}
        </h5>
        <div style={{ color: "gray", fontSize: "15px" }} onClick={handleClick}>
          전체보기
        </div>
      </div>
      <div className="row flex-nowrap overflow-auto g-2" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
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
