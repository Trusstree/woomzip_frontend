"use client";

import { LivingCard } from "@/components/living/LivingCard";
import { useEffect, useState } from "react";

const LivingCardExample = [
  {
    company: "모두가하우징",
    title: "힐링리버",
    addr: "강원도 화천군",
    img: "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver1.jpeg",
    url: `/living/1`,
    context: "지금까지 5명이 살아봤어요!",
  },
  {
    company: "탑디자인",
    title: "자연 속 작은 집",
    addr: "경기도 이천시",
    img: "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/topDesign1.png",
    context: "",
  },
];

type LivingListProps = {
  numShowItems: number;
  numShowPages?: number;
};

export function LivingCardList(props: LivingListProps) {
  const [livingData, setLivingData] = useState(LivingCardExample);
  const { numShowItems, numShowPages } = props;

  useEffect(() => {
    (async () => {
      // const [data, error] = await getLivings();
      // if (error) console.error(error);
      // setLivingData(data);
    })();
  }, []);

  return (
    <>
      {livingData?.map((e, i) => (
        <div className="col-md-4 col-lg-3" key={i}>
          <LivingCard
            company={e["company"]}
            title={e["title"]}
            addr={e["addr"]}
            img={e["img"]}
            url={e["url"]}
            context={e["context"]}
          />
        </div>
      ))}
    </>
  );
}
