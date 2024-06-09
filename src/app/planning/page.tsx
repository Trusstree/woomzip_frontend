import React, { Suspense } from "react";
import PlanningClient from "./_components/PlanningClient";

export default function Planning() {
  return (
    <main>
      <div style={{ fontSize: "38px", margin: "120px 0 80px 0", fontWeight: "600" }}>
        당신의 예상 건축비용,
        <br />
        트러스가 알려드릴게요
      </div>

      <Suspense>
        <PlanningClient />
      </Suspense>
    </main>
  );
}
