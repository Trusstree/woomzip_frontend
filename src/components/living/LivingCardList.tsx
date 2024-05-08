"use client";

import { getLivings } from "@/apis/living";
import { LivingCard } from "@/components/living/LivingCard";
import { useEffect, useState } from "react";

const LivingCardExample = [
  <LivingCard
    company={"모두가하우징"}
    title={"힐링리버"}
    addr={"강원도 화천군"}
    img={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver1.jpeg"}
    url={"/living/parvilion"}
  />,
  <LivingCard
    company={"탑디자인"}
    title={"자연 속 작은 집"}
    addr={"경기도 이천시"}
    img={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/topDesign1.png"}
    url={undefined}
  />,
];

export function LivingCardList() {
  const [livingData, setLivingData] = useState([]);

  useEffect(() => {
    (async () => {
      const [data, error] = await getLivings([]);
      setLivingData(data);
    })();
  }, []);

  return (
    <div className="row" style={{ width: "100%", minWidth: "400px", padding: "10px", margin: "50px 0 400px 0" }}>
      {livingData.map((e) => (
        <LivingCard
          key={e["living_id"]}
          company={e["company"]}
          title={e["title"]}
          addr={e["addr"]}
          img={e["img"]}
          url={`/living/${e["living_id"]}`}
        />
      ))}
    </div>
  );
}
