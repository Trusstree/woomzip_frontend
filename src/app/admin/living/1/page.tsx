import { AdminLivingClient } from "@/app/admin/living/1/_components/AdminLivingClient";
import React from "react";

export default function confirm() {
  return (
    <main>
      <div style={{ margin: "40px 0" }}>예약 신청내역(관리자용)</div>
      <AdminLivingClient />
    </main>
  );
}
