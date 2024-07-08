import LivingCardCarousel from "@/app/living/_components/LivingCardCarousel";
import Image from "next/image";
import Link from "next/link";

export function LivingCard({ company, title, addr, img, url, context }) {
  return (
    <Link className="card" style={{ border: "none", width: "100%", marginBottom: "15px" }} href={url}>
      <LivingCardCarousel images={[img]} />

      <div className="card-body" style={{ color: "gray", padding: "5px", overflow: "hidden" }}>
        <div style={{ fontSize: "16px", marginTop: "3px" }}>{company}</div>
        <div
          className="card-title text-nowrap"
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            marginTop: "3px",
            fontSize: "16px",
            fontWeight: "600",
            color: "black",
          }}
        >
          {title}
        </div>
        <div className="row" style={{ width: "100%", marginTop: "10px" }}>
          <div className="row" style={{ width: "45%" }}>
            <div style={{ fontSize: "15px", fontWeight: "600", width: "auto" }}>₩</div>
            <div
              style={{
                textAlign: "center",
                width: "auto",
                fontSize: "15px",
                color: "black",
              }}
            >
              무료
            </div>
          </div>
          <div className="row" style={{ width: "55%" }}>
            <Image
              src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/gps.png"}
              width={40}
              height={19}
              style={{ width: "40px" }}
              alt={"gpsIcon"}
            />
            <div
              style={{
                textAlign: "center",
                width: "auto",
                fontSize: "15px",
                color: "black",
                padding: "0",
              }}
            >
              {addr}
            </div>
          </div>
        </div>
        <div
          style={{
            fontWeight: "500",
            fontSize: "15px",
            color: "#314FC0",
            marginTop: "5px",
          }}
        >
          {context}
        </div>
      </div>
    </Link>
  );
}
