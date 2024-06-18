import React from "react";
import { HouseReviewWriteClient } from "./_components/HouseReviewWriteClient";

export default function Write() {
  return (
    <main>
      <div style={{ width: "90%", maxWidth: "1300px", margin: "0 auto" }}>
        <div style={{ fontSize: "28px", fontWeight: "500" }}>
          판매자 이름 제품구매 후기 쓰기{""}
        </div>
        <HouseReviewWriteClient />
      </div>
    </main>
  );
}
