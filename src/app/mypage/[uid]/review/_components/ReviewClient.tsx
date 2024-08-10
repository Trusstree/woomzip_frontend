"use client";

import React, { useEffect, useState } from "react";
import { ReviewBox } from "@/app/mypage/[uid]/review/_components/ReviewBox";
import { getHouseReviews } from "@/actions/apis/houseAPI";
import { useRouter } from "next/navigation";
import { getUser } from "@/actions/apis/userAPI";

export default function ReviewClient({ uid }) {
  const [user, setUser] = useState({} as any);
  const [review, setReview] = useState([]);
  const [count, setCount] = useState(0);
  console.log(uid);

  const router = useRouter();

  const handleClick = () => {
    router.push(`/mypage/${uid}/review/write`);
  };

  useEffect(() => {
    (async () => {
      const [userData, userError] = await getUser(uid);
      if (userError) {
        console.error(userError);
        return;
      }
      setUser(
        userData.data[0]?.companyInfo.profile || userData.data[0]?.profile
      );

      const [reviewData, reviewError] = await getHouseReviews(uid);
      if (reviewError) {
        console.error(reviewError);
        return;
      }

      // 콘솔에 응답 출력
      console.log(reviewData);

      if (reviewData && reviewData.data && reviewData.data[0]) {
        setReview(reviewData.data[0]["house_review"]);
        setCount(reviewData.data[0]["house_review_cnt"]);
      } else {
        console.error("Unexpected API response format:", reviewData);
      }
    })();
  }, []);

  return (
    <>
      <div style={{ width: "90%", maxWidth: "1300px", margin: "0 auto" }}>
        <div style={{ fontSize: "28px", fontWeight: "500" }}>
          <span>판매자 후기</span>
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
                  <span>
                    {user?.nickname}({count})
                  </span>
                </div>
                <div style={{ fontSize: "20px", margin: "10px 0" }}>★ 0.0</div>
                <div style={{ fontSize: "20px", margin: "10px 0" }}>
                  가장 많이 받은 키워드
                </div>
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
          <div
            className="col-8"
            style={{ marginTop: "40px", minWidth: "350px" }}
          >
            {review.map((e, i) => (
              <ReviewBox
                key={i}
                id={e["fk_house_id"]}
                index={i}
                nickname={e["nickname"]}
                date={e["updated_at"] ? e["updated_at"] : e["created_at"]}
                rating={e["house_review_rating"]}
                tag={e["tag"]}
                comment={e["pavilion_review_text"]}
                images={e["pavilion_review_images"]}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
