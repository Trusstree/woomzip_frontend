"use client";

import { badgeStyles } from "@/lib/badgeStyles";
import { toStringByFormatting } from "@/lib/stringUtil";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function ReviewMiniBox({ id, nickname, date, helpful, tag, comment, images }) {
  const router = useRouter();
  // function handleClick() {
  //   // e.target.value
  //   router.push(url);
  // }
  console.log(tag);

  return (
    <div
      className="card"
      style={{
        marginRight: "10px",
        width: "430px",
        minWidth: "350px",
        height: "100%",
        border: "1px solid lightGray",
        borderRadius: "15px",
        overflow: "hidden",
      }}
    >
      <div
        className="container row"
        style={{ float: "right", margin: "0", padding: "0", width: "100%", height: "150px" }}
      >
        <div className="col-9" style={{ height: "150px" }}>
          <div className="pt-2" style={{ color: "gray" }}>
            {toStringByFormatting(new Date(date))}
          </div>
          <div className="pb-1" style={{ color: "gray" }}>
            {nickname}
          </div>

          <div className="container" style={{ margin: "0", padding: "0" }}>
            <div
              className="container p-0"
              style={{ width: "65%", marginLeft: "0", fontWeight: "500", overflow: "hidden" }}
            >
              {comment}
            </div>
          </div>
        </div>
        <div className="col-3 m-0 p-0 d-flex flex-column align-items-center">
          <Image
            className="card-img-top mt-2"
            style={{ width: 110, borderRadius: "10px", objectFit: "cover" }}
            alt="main-img"
            src={images[0]}
            width={110}
            height={110}
            unoptimized={true}
          />
        </div>
      </div>
      <div className="container">
        {tag.map((badge, index) => (
          <span
            className="badge"
            key={index}
            style={{
              padding: "5px",
              marginRight: "2px",
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
