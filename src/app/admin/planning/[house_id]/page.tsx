import React from "react";
import { AdminLivingClient } from "./AdminLivingClient";

export default function confirm({ params }) {
  const { house_id } = params;
  return (
    <main>
      <div style={{ margin: "40px 0" }}>예약 신청내역(관리자용)</div>
      <AdminLivingClient house_id={house_id} />
    </main>
  );
}
