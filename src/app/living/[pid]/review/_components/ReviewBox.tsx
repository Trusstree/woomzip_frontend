"use client";

import { ReviewModal } from "@/components/house/ReviewModal";
import { badgeStyles } from "@/lib/badgeStyles";
import { toStringByFormatting } from "@/lib/stringUtil";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function ReviewBox({
  id,
  index,
  nickname,
  date,
  rating,
  tag,
  comment,
  images,
}) {
  const router = useRouter();
  // function handleClick() {
  //   // e.target.value
  //   router.push(`/living/${id}`);
  // }

  return (
    <>
      <div
        className="card"
        style={{
          margin: "20px",
          padding: "20px",
          width: "100%",
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "3px 3px 13px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="d-flex justify-content-between">
          <div style={{ color: "gray", padding: "10px" }}>
            {nickname} |<span> {toStringByFormatting(new Date(date))}</span>
          </div>
          <div style={{ color: "gray", padding: "10px" }}>
            {"판매자 이름 > 살아보기 후기"}
          </div>
        </div>
        <div style={{ padding: "10px" }}>★ {rating?.toFixed(1) ?? "0.0"}</div>
        <div className="container row" style={{ margin: "0", padding: "0" }}>
          <div
            className="col-8"
            style={{
              fontWeight: "500",
            }}
          >
            {comment}
          </div>
          <div
            className="col-4"
            style={{ position: "relative" }}
            data-bs-toggle="modal"
            data-bs-target={`#living_modal_${index}`}
          >
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
              height={250}
              unoptimized={true}
            />
            <div
              className="btn d-flex justify-content-center align-items-center"
              style={{
                position: "absolute",
                right: "16px",
                bottom: "5px",
                width: "40px",
                height: "40px",
                backgroundColor: "white",
                opacity: "0.7",
                color: "gray",
                fontSize: "18px",
                fontWeight: "500",
                padding: "0",
              }}
            >
              +{images.length}
            </div>
          </div>
        </div>
        <div
          className="containr"
          style={{ width: "100%", float: "left", marginTop: "20px" }}
        >
          {tag.map((badge, index) => (
            <span
              className="badge"
              key={index}
              style={{
                width: "auto",
                padding: "11px",
                margin: "3px",
                backgroundColor: badgeStyles(badge),
                color: "white",
                fontWeight: "400",
              }}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
      <ReviewModal
        id={index}
        date={toStringByFormatting(new Date(date))}
        comment={comment}
        tag={tag}
        nickname={nickname}
        images={images}
      />
    </>
  );
}
