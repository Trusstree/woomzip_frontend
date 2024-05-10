"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const badgeExample = [
  <span
    className="badge"
    style={{ width: "auto", padding: "10px", marginRight: "5px", backgroundColor: "lightgray", color: "gray" }}
  >
    가족끼리 좋아요
  </span>,
  <span
    className="badge"
    style={{ width: "auto", padding: "10px", marginRight: "5px", backgroundColor: "lightgray", color: "gray" }}
  >
    또 살아보고 싶어요
  </span>,
  <span
    className="badge"
    style={{ width: "auto", padding: "10px", marginRight: "5px", backgroundColor: "lightgray", color: "gray" }}
  >
    따뜻해요
  </span>,
  <span
    className="badge"
    style={{ width: "auto", padding: "10px", marginRight: "5px", backgroundColor: "lightgray", color: "gray" }}
  >
    자연이 좋아요
  </span>,
  <span
    className="badge"
    style={{ width: "auto", padding: "10px", marginRight: "5px", backgroundColor: "lightgray", color: "gray" }}
  >
    집갈래요 피곤해요
  </span>,
];

export function ReviewBox({ name, comment, img, url }) {
  const router = useRouter();

  function handleClick() {
    // e.target.value
    router.push(url);
  }

  return (
    <div
      className="card"
      style={{
        marginBottom: "20px",
        width: "100%",
        minWidth: "400px",
        height: "100%",
        border: "1px solid lightGray",
        borderRadius: "15px",
        overflow: "hidden",
      }}
    >
      <div style={{ color: "gray", padding: "10px" }}>{name}</div>
      <div className="container row" style={{ margin: "0", padding: "0" }}>
        <div className="container" style={{ width: "60%", marginLeft: "0", fontWeight: "500" }}>
          {comment}
        </div>
        <div className="container" style={{ marginRight: "2%", padding: "0", width: "30%" }}>
          <Image
            className="card-img-top"
            style={{ borderRadius: "10px", objectFit: "cover" }}
            alt="main-img"
            src={img}
            width={100}
            height={200}
            unoptimized={true}
          />
        </div>
      </div>
      <div className="container" style={{ width: "100%", float: "left" }}>
        {badgeExample.map((badge, index) => (
          <span
            key={index}
            className="badge"
            style={{
              width: "auto",
              padding: "0 5px",
              margin: "5px",
              backgroundColor: "lightgray",
              color: "gray",
              fontSize: "15px",
            }}
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}
