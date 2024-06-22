"use client";

import React, { useEffect, useState } from "react";
import { ReviewBox } from "@/app/living/[pid]/review/_components/ReviewBox";
import { getLivingReviews } from "@/actions/apis/living";
import { useRouter } from "next/navigation";

export default function ReviewClient() {
  const [review, setReview] = useState([]);
  const [count, setCount] = useState(0);
  const [rating, setRating] = useState(0);

  const router = useRouter();
  // function handleClick() {
  //   // e.target.value
  //   router.push(url);
  // }
  const handleClick = () => {
    router.push("/living/1/review/write");
  };

  useEffect(() => {
    (async () => {
      const [data, error] = await getLivingReviews(1);
      if (error) {
        console.error(error);
        return;
      }
      console.log(data);
      setReview(data.data[0]["pavilion_review"]);
      setCount(data.data[0]["pavilion_review_cnt"]);
      setRating(data.data[0]["pavilion_review_rating"]);
    })();
  }, []);

  return (
    <>
      <div style={{ width: "90%", maxWidth: "1300px", margin: "0 auto" }}>
        <div style={{ fontSize: "28px", fontWeight: "500" }}>
          <span>살아보기 후기</span>
        </div>
        <div className="row">
          <div className="col-4" style={{ minWidth: "350px" }}>
            <div
              className="card sticky-top"
              style={{
                width: "100%",
                zIndex: 1,
                border: "none",
              }}
            >
              <div className="container" style={{ height: "60px" }}></div>
              <div
                style={{
                  padding: "20px",
                  width: "100%",
                  borderRadius: "15px",
                  boxShadow: "3px 3px 13px rgba(0, 0, 0, 0.2)",
                }}
              >
                <div style={{ fontSize: "20px", margin: "10px 0" }}>
                  힐링리버<span>({count})</span>
                </div>
                <div style={{ fontSize: "20px", margin: "10px 0" }}>★ {rating.toFixed(1)}</div>
                <div style={{ fontSize: "20px", margin: "10px 0" }}>가장 많이 받은 키워드</div>
                <div
                  className="btn"
                  onClick={handleClick}
                  style={{
                    backgroundColor: "#314FC0",
                    color: "white",
                    fontWeight: "500",
                    margin: "0",
                  }}
                >
                  후기 쓰기
                </div>
              </div>
            </div>
          </div>
          <div className="col-8" style={{ marginTop: "40px", minWidth: "350px" }}>
            {review.map((e, i) => (
              <ReviewBox
                key={i}
                id={e["fk_pavilion_id"]}
                index={i}
                nickname={e["nickname"]}
                date={e["updated_at"] ? e["updated_at"] : e["created_at"]}
                rating={e["rating"]}
                tag={JSON.parse(e["tag"])}
                comment={e["pavilion_review_text"]}
                images={JSON.parse(e["pavilion_review_images"])}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
