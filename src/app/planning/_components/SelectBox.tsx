"use client";

import Image from "next/image";

export default function SelectBox({ title, text, img, value, data, setData }) {
  return (
    <button
      style={{
        width: "100%",
        height: "200px",
        borderRadius: "10px",
        borderStyle: "solid",
        margin: "5px",
        backgroundColor: data == value ? "#F5F7FF" : "white",
        borderWidth: "2px",
        borderColor: data == value ? "#314FC0" : "gray",
      }}
      onClick={() => {
        setData(value);
      }}
    >
      <Image
        className="card-img-top"
        style={{ width: "100%" }}
        src={img}
        width={80}
        height={110}
        unoptimized={true}
        alt={"설명 로고"}
      />
      <div style={{ fontSize: "16px", fontWeight: "600" }}>{title}</div>
      <div style={{ fontSize: "14px", color: "gray" }}>{text}</div>
    </button>
  );
}
