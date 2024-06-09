import { LivingCard } from "@/app/living/_components/LivingCard";
import React from "react";

const livingData = [
  {
    company: "모두가하우징",
    title: "힐링리버",
    addr: "강원도 화천군",
    img: "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver1.jpeg",
    url: `/living/1`,
  },
  {
    company: "탑디자인",
    title: "자연 속 작은 집",
    addr: "경기도 이천시",
    img: "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/topDesign1.png",
  },
];

export default function Living() {
  return (
    <main>
      <div style={{ fontSize: "38px", margin: "120px 0 80px 0", fontWeight: "600" }}>
        전원생활 잘 할 수 있을까?
        <br />
        무료로 살아보며 알아보세요
      </div>
      <div className="row" style={{ width: "100%", minWidth: "400px", padding: "10px", margin: "50px 0 400px 0" }}>
        {livingData?.map((e, i) => (
          <LivingCard
            key={i}
            company={e["company"]}
            title={e["title"]}
            addr={e["addr"]}
            img={e["img"]}
            url={e["url"]}
          />
        ))}
      </div>
    </main>
  );
}
