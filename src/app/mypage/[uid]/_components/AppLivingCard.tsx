"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export function AppLivingCard({ company, title, addr, img, url, context }) {
  const router = useRouter();

  function handleClick() {
    if (url) router.push(url);
  }

  return (
    <>
      <div
        className="card"
        style={{
          width: "280px",
          borderRadius: "10px",
          border: "none",
          margin: "10px",
          padding: "0",
        }}
      >
        <Swiper
          pagination={{ dynamicBullets: true }}
          modules={[Pagination]}
          className="mySwiper"
          style={{ width: "100%", height: "280px" }}
          onClick={handleClick}
        >
          <SwiperSlide>
            <img
              src={img}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: "10px",
              }}
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver2.jpeg"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: "10px",
              }}
            ></img>
          </SwiperSlide>
        </Swiper>

        <div
          className="card-body"
          style={{
            color: "gray",
            padding: "5px",
            overflow: "hidden",
            backgroundColor: "#FAFBFC",
          }}
        >
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
              <div
                style={{ fontSize: "15px", fontWeight: "600", width: "auto" }}
              >
                ₩
              </div>
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
                src={
                  "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/gps.png"
                }
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
          {/* <div style={{width:"150%", marginTop:"5px"}}>
            {badgeExample}
          </div> */}
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
      </div>
    </>
  );
}
