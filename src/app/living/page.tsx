import { LivingCardList } from "@/components/living/LivingCardList";
import React from "react";

export default function Living() {
  return (
    <main>
      <div
        style={{
          backgroundColor: "#8C8C8C",
          height: "263px",
          color: "white",
          padding: "20px",
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
        }}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div style={{ fontSize: "30px" }}>전원주택 살아보기</div>
        <div style={{ fontSize: "14px" }}>전원생활이 꿈이라면? 살아보고 결정하세요!</div>
      </div>
      {/*부모 컨테이너 무시하고, 양옆 최대로 확대하는 방법 찾아야함*/}
      <LivingCardList />
    </main>
  );
}
