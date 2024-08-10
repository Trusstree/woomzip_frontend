"use client";

import React, { useEffect, useState } from "react";
import { ReviewBox } from "@/app/mypage/[uid]/review/_components/ReviewBox";
import { getHouseReviews } from "@/actions/apis/houseAPI";
import { useRouter } from "next/navigation";
import { getUser } from "@/actions/apis/userAPI";

export default function ReviewClient({ uid }) {
  const [user, setUser] = useState({} as any);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState([]);
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
      setUser(userData.data[0]?.companyInfo.profile || userData.data[0]?.profile);

      let parsedReviewData = userData.data[0].reviews.houseReview.map((e) => ({
        id: e["house_review_id"],
        nickname: e["nickname"],
        date: e["updated_at"] ? e["updated_at"] : e["created_at"],
        rating: e["rating"],
        tag: typeof e["tag"] == "string" ? JSON.parse(e["tag"]) : e["tag"],
        comment: e["review_text"],
        images: e["images"],
      }));

      console.log(parsedReviewData);
      setReview(parsedReviewData);
      setRating(userData.data[0].reviews.averageRating);
    })();
  }, []);

  return (
    <>
      <div style={{ width: "90%", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ fontSize: "28px", fontWeight: "500" }}>
          <span>판매자 후기</span>
        </div>
        <div className="row">
          <div className="col-md-4 col-12">
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
                    <img
                      className={"m-0 align-self-center"}
                      src={user["user_img_url"] || "blur_image.png"}
                      alt={`profile`}
                      width={50}
                      height={50}
                      style={{
                        objectFit: "cover",
                        borderRadius: "90px",
                        width: "50px",
                        height: "50px",
                      }}
                    />
                  </span>
                  <span style={{ paddingLeft: "10px" }}>
                    {user?.nickname}({review.length})
                  </span>
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
          <div className="col-md-8 col-12" style={{ marginTop: "60px" }}>
            {review.map((e, i) => (
              <ReviewBox
                key={i}
                id={e["id"]}
                index={i}
                nickname={e["nickname"]}
                date={e["date"]}
                rating={e["rating"]}
                tag={e["tag"]}
                comment={e["comment"]}
                images={e["images"]}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
