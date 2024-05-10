"use client";

import React, { useEffect, useState } from "react";
import { ReviewBox } from "@/components/living/ReviewBox";
import { RouteButtonLight } from "@/components/living/RouteButtonLight";

const ReviewBoxExample = [
  {
    name: "동천동출렁다리",
    comment:
      "화천에 있는 힐링리버에서 하루 묵었더니, 병이 싹 다 나았습니다. 장난 아니네요 ㄷㄷ 또 올게요. 무료로 이런 체험을 하다니 완전 대박 정말 너무 좋습니다~ 다음에는 꼭 제 집을 지어서, 지인들 이렇게 초대해서 놀고 싶네요^^",
    img: "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver6.jpeg",
    url: "/living/parvilion",
  },
  {
    name: "어이나양준운데",
    comment:
      "힐링리버, 그곳은 정말로 힐링스팟. 전원주택 삶 살아보고 싶은 자에게 강추... 담에는 가족들 설득하기 위해 다 같이 한번 올 예정...",
    img: "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver7.jpeg",
    url: "/living/parvilion",
  },
  {
    name: "화천도지사",
    comment:
      "힐링리버, 도지사 찬스로 초대 받아서 가봤읍니다. 우리 화천 안에 이런 곳이 있는 줄은 정말 몰랐소. 시민들에게 공간을 열어서 체험 시켜준다는거 매우 찬성이니 화천 도지사로써 리뷰 남깁니다. 화천군 이제 바뀌어야 합니다. 마누라 빼고 싹 다 바꿔야합니다. 당장 내일부터 힐링리버 전군민 다 다녀오시고, 새해 복 많이 받으시길 강제합니다. 글이 길어져도 다 읽고 좋아요 남기세요. 명령입니다. 이상. 하나 참 이걸로도 부족하다니 어이가 없군요. 제 시급이 얼만줄 아세요? 아시고 하는 말씀이세요? 지금 당장 화천군 소속 국회의원의 친딸의 가장 친애하는 강아지인 군견 뽀삐를 출동시키세요.",
    img: "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver8.jpeg",
    url: "/living/parvilion",
  },
];

export default function ReviewClient() {
  const [review, setReview] = useState(ReviewBoxExample);
  const [count, setCount] = useState(17);

  useEffect(() => {
    (async () => {
      // const [data, error] =await getReviews();
      // setReview(data);
      // setCount(data["review_count"]);
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
          <ReviewBox key={i} name={e["name"]} comment={e["comment"]} img={e["img"]} url={e["url"]} />
        ))}
      </div>
    </>
  );
}
