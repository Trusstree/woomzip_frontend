import React from "react";
import { LivingReviewWriteClient } from "./LivingReviewWriteClient";

export default function Write() {
  return (
    <main>
      <div style={{ fontSize: "25px", padding: "0", marginTop: "40px", color: "#101648" }}>후기쓰기 </div>
      <LivingReviewWriteClient />
    </main>
  );
}
