"use client";

import { alertImage } from "@/lib/alertUtil";
import { badgeStyles } from "@/lib/badgeStyles";
import { toStringByFormatting } from "@/lib/stringUtil";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ReviewModal } from "./ReviewModal";

export function ReviewBox({ id, nickname, date, helpful, tag, comment, images }) {
  const router = useRouter();
  // function handleClick() {
  //   // e.target.value
  //   router.push(`/living/${id}`);
  // }

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
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      <ReviewModal date={toStringByFormatting(new Date(date))} comment={comment} tag={tag} images={images} />
      <div style={{ color: "gray", padding: "10px" }}>{nickname}</div>
      <div style={{ color: "gray", padding: "10px" }}>{toStringByFormatting(new Date(date))}</div>
      <div className="container row" style={{ margin: "0", padding: "0" }}>
        <div
          className="container"
          style={{
            width: "60%",
            height: "200px",
            overflow: "hidden",
            marginLeft: "0",
            fontWeight: "500",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            whiteSpace: "pre-wrap",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 8,
          }}
        >
          {comment}
        </div>
        <div className="container" style={{ marginRight: "2%", padding: "0", width: "30%" }}>
          {/* {images.map((src, i) => (
            <Image
              key={i}
              className="card-img-top"
              style={{ borderRadius: "10px", objectFit: "cover" }}
              alt="main-img"
              src={src}
              width={100}
              height={200}
              unoptimized={true}
            />
          ))} */}
          <Image
            className="card-img-top"
            style={{ borderRadius: "10px", objectFit: "cover" }}
            alt="main-img"
            src={images[0]}
            width={100}
            height={200}
            unoptimized={true}
          />
        </div>
      </div>
      <div className="container mb-2" style={{ width: "100%", float: "left" }}>
        {tag.map((badge, index) => (
          <span
            className="badge"
            key={index}
            style={{
              width: "auto",
              padding: "10px",
              marginRight: "5px",
              backgroundColor: badgeStyles(badge),
              color: "white",
            }}
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}
