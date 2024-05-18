"use client";

import Image from "next/image";
import React from "react";

export default function HomeBox({ title, price, pyueng, room, toilet, seller, img }) {
  return (
    <button
      style={{
        width: "280px",
        height: "320px",
        borderRadius: "10px",
        borderStyle: "solid",
        margin: "5px",
        backgroundColor: "#F5F7FF",
        borderWidth: "2px",
        borderColor: "#314FC0",
      }}
    >
      <Image
        className="card-img-top"
        style={{ width: "100%", borderRadius: "10px" }}
        src={img}
        width={80}
        height={150}
        unoptimized={true}
        alt={"설명 로고"}
      />
      <div style={{ width: "100%", fontSize: "16px", fontWeight: "600", textAlign: "left", margin: "10px 0" }}>
        {title}
      </div>
      <div className="d-flex justify-content-between" style={{ width: "100%" }}>
        <div style={{ fontSize: "14px" }}>가격</div>
        <div style={{ fontSize: "14px" }}>{price}</div>
      </div>
      <div className="d-flex justify-content-between" style={{ width: "100%" }}>
        <div style={{ fontSize: "14px" }}>평수</div>
        <div style={{ fontSize: "14px" }}>{pyueng}</div>
      </div>
      <div className="d-flex justify-content-between" style={{ width: "100%" }}>
        <div style={{ fontSize: "14px" }}>방</div>
        <div style={{ fontSize: "14px" }}>{room}</div>
      </div>
      <div className="d-flex justify-content-between" style={{ width: "100%" }}>
        <div style={{ fontSize: "14px" }}>화장실</div>
        <div style={{ fontSize: "14px" }}>{toilet}</div>
      </div>
      <div className="d-flex justify-content-between" style={{ width: "100%" }}>
        <div style={{ fontSize: "14px" }}>판매자</div>
        <div style={{ fontSize: "14px" }}>{seller}</div>
      </div>
    </button>
  );
}
