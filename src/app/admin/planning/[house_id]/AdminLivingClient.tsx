"use client";

import { getHouse } from "@/apis/HouseAPI";
import { getReservation } from "@/apis/living";
import { ReservationConfirm } from "@/app/admin/living/1/_components/ReservationConfirm";
import { RouteButton } from "@/app/living/[pid]/_components/RouteButton";
import { toStringByFormatting } from "@/lib/stringUtil";
import { useEffect, useState } from "react";

export function AdminLivingClient({ house_id }) {
  const [reservation, setReservation] = useState([]);

  useEffect(() => {
    (async () => {
      const [data, error] = await getHouse(house_id);
      console.log(data);
      if (error) {
        console.error(error);
        return;
      }
      setReservation(data.data[0]);
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
            requestDate={e["created_at"]}
            where={"힐링리버"}
            nickname={e["nickname"]}
            checkinDate={e["check_in"] && toStringByFormatting(e["check_in"])}
            checkoutDate={e["check_out"] && toStringByFormatting(e["check_out"])}
            people={e["people"]}
            phoneNumber={e["contact"]}
            purpose={e["purpose"]}
            rid={1}
            status={"pending"}
          />
        ))}
      </div>
    </div>
  );
}
