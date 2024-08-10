import { HouseReviewWriteClient } from "@/app/mypage/[uid]/review/write/_components/HouseReviewWriteClient";
import React from "react";

export default function Write({ params }) {
  return (
    <main>
      <div style={{ width: "90%", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ fontSize: "28px", fontWeight: "500" }}>
          판매자 후기 쓰기
        </div>
        <HouseReviewWriteClient uid={params.uid} />
      </div>
    </main>
  );
}
