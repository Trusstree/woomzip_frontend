import React from "react";
import { AdminLivingClient } from "./AdminLivingClient";

export default function confirm({ house_id }) {
  return (
    <main>
      <div style={{ margin: "40px 0" }}>예약 신청내역(관리자용)</div>
      <AdminLivingClient house_id={house_id} />
    </main>
  );
}
