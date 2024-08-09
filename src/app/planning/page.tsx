import PlanningClient from "@/app/planning/_components/PlanningClient";
import React, { Suspense } from "react";

export default function Planning() {
  return (
    <main>
      <div style={{ width: "90%", maxWidth: "1300px", margin: "0 auto" }}>
        <div
          style={{
            width: "auto",
            fontSize: "33px",
            fontWeight: "600",
            margin: "70px 0 150px 0",
            wordBreak: "keep-all",
          }}
        >
          당신의 <span style={{ color: "#314FC0" }}>AI</span> 가이드
          <span style={{ color: "#314FC0" }}> 타잔</span>이 함께합니다
        </div>

        <Suspense>
          <PlanningClient />
        </Suspense>
      </div>
    </main>
  );
}
