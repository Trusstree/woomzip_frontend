"use client";

import { ReviewMiniBox } from "@/components/living/ReviewMiniBox";
import { RouteButtonLight } from "@/components/living/RouteButtonLight";
import { useState, useEffect } from "react";

const ReviewMiniBoxExample = [
  <ReviewMiniBox
    name={"동천동출렁다리"}
    comment={
      "화천에 있는 힐링리버에서 하루 묵었더니, 병이 싹 다 나았습니다. 장난 아니네요 ㄷㄷ 또 올게요. 무료로 이런 체험을 하다니 완전 대박 정말 너무 좋습니다~ 다음에는 꼭 제 집을 지어서, 지인들 이렇게 초대해서 놀고 싶네요^^"
    }
    img={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver6.jpeg"}
    url={"/living/parvilion"}
  />,
  <ReviewMiniBox
    name={"어이나양준운데"}
    comment={
      "힐링리버, 그곳은 정말로 힐링스팟. 전원주택 삶 살아보고 싶은 자에게 강추... 담에는 가족들 설득하기 위해 다 같이 한번 올 예정..."
    }
    img={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver7.jpeg"}
    url={"/living/parvilion"}
  />,
  <ReviewMiniBox
    name={"화천도지사"}
    comment={
      "힐링리버, 도지사 찬스로 초대 받아서 가봤읍니다. 우리 화천 안에 이런 곳이 있는 줄은 정말 몰랐소. 시민들에게 공간을 열어서 체험 시켜준다는거 매우 찬성이니 화천 도지사로써 리뷰 남깁니다."
    }
    img={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver8.jpeg"}
    url={"/living/parvilion"}
  />,
];

export function LivingInfo() {
  const [count, setCount] = useState(5);
  const [review, setReview] = useState(ReviewMiniBoxExample);

  useEffect(() => {
    (async () => {
      // const [data, error] = await getReviews();
      // setReview(data);
      // setCount(data);
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
        <div style={{ color: "gray", fontSize: "14px" }}>후기(17)</div>
        <RouteButtonLight url={"/living/review"} text={"전체보기"} />
      </div>
      <div
        className="container"
        style={{ width: "100%", minWidth: "400px", fontSize: "14px", color: "gray", overflow: "scroll" }}
      >
        <div className="container row" style={{ padding: "0", width: "3000px", height: "200px", float: "left" }}>
          {review}
        </div>
      </div>
    </div>
  );
}
