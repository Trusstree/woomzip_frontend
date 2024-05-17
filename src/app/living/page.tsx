import { LivingCardList } from "@/components/living/LivingCardList";
import React from "react";

export default function Living() {
  return (
    <main>
      <div style={{ fontSize: "38px", margin: "120px 0", fontWeight: "600" }}>
        전원생활 잘 할 수 있을까?
        <br />
        무료로 살아보며 알아보세요
      </div>
      <LivingCardList />
    </main>
  );
}
