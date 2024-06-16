import React, { Suspense } from "react";
import PlanningClient from "./_components/PlanningClient";

export default function Planning() {
  return (
    <main>
      <div style={{ width: "500px", fontSize: "33px", fontWeight: "600", margin: "70px 0 150px 0" }}>
      당신의 <span style={{color:"#314FC0"}}>AI</span> 가이드
      <span style={{color:"#314FC0"}}> 타잔</span>이 함께합니다
      </div>

      <Suspense>
        <PlanningClient />
      </Suspense>
    </main>
  );
}
