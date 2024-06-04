"use client";

import { getReservation } from "@/apis/living";
import { ReservationConfirm } from "@/components/living/ReservationConfirm";
import { RouteButton } from "@/components/living/RouteButton";
import { toStringByFormatting } from "@/lib/stringUtil";
import { useEffect, useState } from "react";

export function AdminLivingClient() {
  const [reservation, setReservation] = useState([]);

  useEffect(() => {
    (async () => {
      const [data, error] = await getReservation("pending");
      console.log(data.data);
      if (error) {
        console.error(error);
        return;
      }
      setReservation(data.data);
    })();
  }, []);

  return (
    <div>
      <div className="row">
        <div style={{ width: "200px" }}>
          <RouteButton url={"/living/reservation/confirm"} text={"신청내역"} />
        </div>
        <div style={{ width: "200px" }}>
          <RouteButton url={"/living/reservation/confirm/accept"} text={"수락내역"} />
        </div>
        <div style={{ width: "200px" }}>
          <RouteButton url={"/living/reservation/confirm/reject"} text={"거절내역"} />
        </div>
      </div>
      <div>
        {reservation.map((e, i) => (
          <ReservationConfirm
            key={i}
            requestDate={toStringByFormatting(new Date(e["created_at"]))}
            where={"힐링리버"}
            nickname={e["nickname"]}
            checkinDate={e["check_in"] && toStringByFormatting(new Date(e["check_in"]))}
            checkoutDate={e["check_out"] && toStringByFormatting(new Date(e["check_out"]))}
            people={e["people"]}
            phoneNumber={e["contact"]}
            purpose={e["purpose"]}
          />
        ))}
      </div>
    </div>
  );
}
