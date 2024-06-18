import Image from "next/image";
import React from "react";
import { LivingReservationForm } from "@/app/living/[pid]/reservation/_components/LivingReservationForm";

export default function Reservation() {
  return (
    <main>
      <div style={{width:"90%", maxWidth:"1300px", margin:"0 auto"}}>
        <div style={{ fontSize:"28px", fontWeight:"500"}}>예약하기</div>
        <div className="container" style={{ margin: "0", padding: "0", width: "100%" }}>
          <Image
            className="card-img-top"
            style={{ borderRadius: "25px", objectFit: "cover" }}
            alt="main-img"
            src="https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver1.jpeg"
            width={100}
            height={500}
            unoptimized={true}
          />
        </div>
        <div style={{ fontSize: "19px", margin: "50px 0 0 2px", color: "gray" }}>모두가하우징</div>
        <div style={{ fontSize: "32px", marginBottom: "15px", color: "#101648" }}>힐링리버</div>
        
        <LivingReservationForm />
        </div>
    </main>
  );
}
