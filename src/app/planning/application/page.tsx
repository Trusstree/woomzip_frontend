import PlanningApplicationClient from "@/app/planning/application/_components/PlanningApplicationClient";
import React, { Suspense } from "react";

export default function Application() {
  return (
    <main>
      <div style={{ width: "90%", maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            width: "auto",
            fontSize: "33px",
            fontWeight: "600",
            margin: "70px 0 150px 0",
            wordBreak: "keep-all",
          }}
        >
          마지막 단계입니다. 준비되셨나요?
        </div>
        <Suspense>
          <PlanningApplicationClient />
        </Suspense>
      </div>
    </main>
  );
}
