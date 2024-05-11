import React from "react";
import { AdminLivingClient } from "./AdminLivingClient";

export default function confirm() {
  return (
    <main>
      <div style={{ margin: "40px 0" }}>예약 신청내역(관리자용)</div>
      <AdminLivingClient />
    </main>
  );
}
