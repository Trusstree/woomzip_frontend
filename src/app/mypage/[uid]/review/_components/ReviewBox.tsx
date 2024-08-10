"use client";

import { badgeStyles } from "@/lib/badgeStyles";
import { toStringByFormatting } from "@/lib/stringUtil";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ReviewModal } from "@/components/house/ReviewModal";
import { getExplanationHTML } from "@/lib/parseUtil";

export function ReviewBox({
  id,
  index,
  date,
  rating,
  tag,
  comment,
  images,
  nickname,
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
          padding: "20px",
          marginBottom: "10px",
          width: "100%",
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "3px 3px 13px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div style={{ color: "gray", padding: "10px" }}>
          {nickname} |<span> {toStringByFormatting(new Date(date))}</span>
        </div>
        <div style={{ padding: "10px" }}>★ {rating.toFixed(1)}</div>
        <div className="container row" style={{ margin: "0", padding: "0" }}>
          <div
            className="col-md-8 col-6"
            style={{
              fontWeight: "500",
            }}
            dangerouslySetInnerHTML={{ __html: getExplanationHTML(comment) }}
          ></div>
          <div
            className="col-md-4 col-6"
            style={{ position: "relative" }}
            data-bs-toggle="modal"
            data-bs-target={`#living_modal_${index}`}
          >
            <Image
              className="card-img-top"
              style={{ borderRadius: "10px", objectFit: "cover" }}
              alt="main-img"
              src={images[0]}
              width={100}
              height={200}
              unoptimized={true}
              data-bs-toggle="modal"
              data-bs-target={`#review_detail_modal_${id}`}
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
        id={`review_detail_modal_${id}`}
        date={new Date(date)}
        nickname={nickname}
        images={images}
      />
    </>
  );
}
