import React from "react";
import PlanningApplicationClient from "./PlanningApplicationClient";

export default function Application() {
  return (
    <main>
      <div style={{ fontSize: "38px", margin: "120px 0", fontWeight: "600" }}>
        마지막 단계입니다
        <br />
        준비되셨나요?
      </div>
      <PlanningApplicationClient />
    </main>
  );
}
