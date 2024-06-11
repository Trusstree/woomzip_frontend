import { LivingCardList } from "@/components/living/LivingCardList";
import React from "react";

export default function Living() {
  return (
    <main>
      <div style={{ width: "500px", fontSize: "33px", fontWeight: "600", margin: "70px 0" }}>
      <span style={{color:"#314FC0"}}>무료로</span> 새로운 삶을 경험해보세요
      </div>
      <LivingCardList />
    </main>
  );
}
