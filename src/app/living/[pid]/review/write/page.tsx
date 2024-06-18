import React from "react";
import { LivingReviewWriteClient } from "./_components/LivingReviewWriteClient";

export default function Write() {
  return (
    <main>
      <div style={{ width: "90%", maxWidth: "1300px", margin: "0 auto" }}>
        <div style={{ fontSize: "25px", padding: "0", marginTop: "40px" }}>
          후기쓰기{" "}
        </div>
        <LivingReviewWriteClient />
      </div>
    </main>
  );
}
