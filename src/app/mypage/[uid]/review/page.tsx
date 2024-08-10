import ReviewClient from "@/app/mypage/[uid]/review/_components/ReviewClient";
import React from "react";

export default function Review({ params }) {
  return (
    <main>
      <ReviewClient uid={params.uid} />
    </main>
  );
}
