import { LivingCard } from "@/components/living/LivingCard";
import Image from "next/image";
import React from 'react';

const LivingCardExample = [
  <LivingCard
    company={"모두가하우징"}
    title={"힐링리버"}
    addr={"강원도 화천군"}
    img={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver1.jpeg"}
    url={"/living/parvilion"} />,
  <LivingCard
    company={"탑디자인"}
    title={"자연 속 작은 집"}
    addr={"경기도 이천시"}
    img={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/topDesign1.png"}
    url={undefined} />
]

export default function Living() {

  return (
    <main>

      <div style={{backgroundColor:"#8C8C8C", height:"263px", color:"white", padding:"20px",  width:"100%"}}>
        <div style={{marginTop:"50px", fontSize:"30px"}}>전원주택 살아보기</div>
        <div style={{fontSize:"14px"}}>전원생활이 꿈이라면? 살아보고 결정하세요!</div>
      </div>
      {/*부모 컨테이너 무시하고, 양옆 최대로 확대하는 방법 찾아야함*/}

      <div className="row" style={{width:"100%", minWidth:"400px", padding:"10px", margin:"50px 0 400px 0"}}>
        {LivingCardExample}
      </div>
    </main>
  );
}