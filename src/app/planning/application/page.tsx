import PlanningApplicationClient from "@/app/planning/application/_components/PlanningApplicationClient";
import React, { Suspense } from "react";

export default function Application() {
  return (
    <main>
      <div style={{ width: "90%", maxWidth: "1300px", margin: "0 auto" }}>
        <div style={{ fontSize: "38px", margin: "120px 0", fontWeight: "600" }}>
          마지막 단계입니다
          <br />
          준비되셨나요?
        </div>
        <Suspense>
          <PlanningApplicationClient />
        </Suspense>
      </div>
    </main>
  );
}
