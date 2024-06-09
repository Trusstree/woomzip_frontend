"use client";
import Image from "next/image";

export default function ResetButton({ img, setData, setIsSubmit }) {
  return (
    <button
      style={{
        width: "50px",
        height: "40px",
        borderRadius: "10px",
        borderStyle: "solid",
        margin: "3px",
        backgroundColor: "white",
        borderWidth: "2px",
        borderColor: "gray",
      }}
      onClick={() => {
        setData({});
        setIsSubmit(true);
      }}
    >
      <Image src={img} alt={"icon"} width={25} height={25} style={{ padding: "3px", marginLeft: "2px" }} />
    </button>
  );
}
