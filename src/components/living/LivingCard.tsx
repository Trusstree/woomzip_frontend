"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { BrowserView, MobileView } from "react-device-detect";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// const badgeExample = [
//   <span
//     key={1}
//     className="badge"
//     style={{ padding: "8px 10px", marginRight: "5px", border: "2px solid lightgray", borderRadius:"10px", color: "gray", fontWeight:"400", fontSize:"14px" }}
//   >
//     전원생활 체험하기 좋아요
//   </span>,
//   <span
//     key={2}
//     className="badge"
//     style={{ padding: "8px 10px", marginRight: "5px", border: "2px solid lightgray", borderRadius:"10px", color: "gray", fontWeight:"400", fontSize:"14px" }}
//   >
//     또 살아보고 싶어요
//   </span>,
//   <span
//     key={3}
//     className="badge"
//     style={{ padding: "8px 10px", marginRight: "5px", border: "2px solid lightgray", borderRadius:"10px", color: "gray", fontWeight:"400", fontSize:"14px" }}
//   >
//     따뜻해요
//   </span>,
// ];

export function LivingCard({ company, title, addr, img, url, context }) {
  const router = useRouter();

  function handleClick() {
    if (url) router.push(url);
  }

  return (
    <>
      <div className="card" style={{ border: "none", width: "100%", marginBottom: "15px" }}>
        <Swiper
          pagination={{ dynamicBullets: true }}
          modules={[Pagination]}
          className="mySwiper"
          style={{ width: "100%", height: "275px" }}
          onClick={handleClick}
        >
          <SwiperSlide>
            <img src={img} style={{ objectFit: "cover", width: "100%", height: "100%", borderRadius: "10px" }}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver2.jpeg"
              style={{ objectFit: "cover", width: "100%", height: "100%", borderRadius: "10px" }}
            ></img>
          </SwiperSlide>
        </Swiper>

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
              <div style={{ textAlign: "center", width: "auto", fontSize: "15px", color: "black" }}>무료</div>
            </div>
            <div className="row" style={{ width: "55%" }}>
              <Image
                src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/gps.png"}
                width={40}
                height={19}
                style={{ width: "40px" }}
                alt={"gpsIcon"}
              />
              <div style={{ textAlign: "center", width: "auto", fontSize: "15px", color: "black", padding: "0" }}>
                {addr}
              </div>
            </div>
          </div>
          {/* <div style={{width:"150%", marginTop:"5px"}}>
            {badgeExample}
          </div> */}
          <div style={{ fontWeight: "500", fontSize: "15px", color: "#314FC0", marginTop: "5px" }}>{context}</div>
        </div>
      </div>

      <MobileView>
        <div className="card" style={{ border: "none", width: "105%" }}>
          <Image
            className="card-img-top"
            style={{ borderRadius: "10px", objectFit: "cover" }}
            alt="main-img"
            src={img}
            width={100}
            height={170}
            unoptimized={true}
            onClick={handleClick}
          />

          <div style={{ color: "gray" }}>
            <div style={{ width: "100%" }}>
              <div style={{ fontSize: "14px", marginLeft: "2px" }}>{company}</div>
              <div style={{ fontSize: "18px", color: "black" }}>{title}</div>
            </div>

            <div className="row" style={{ width: "100%" }}>
              <div className="row" style={{ width: "50%", marginTop: "10px" }}>
                <Image
                  src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/gps.png"}
                  width={100}
                  height={20}
                  style={{ width: "40px" }}
                  alt={"gpsIcon"}
                />
                <div style={{ fontSize: "14px", width: "110px" }}>{addr}</div>
              </div>
              <div className="row" style={{ width: "50%", marginTop: "10px" }}>
                <div style={{ fontSize: "14px", fontWeight: "700", width: "30px" }}>₩</div>
                <div style={{ fontSize: "14px", width: "auto" }}>무료</div>
              </div>
            </div>
            <div
              style={{ fontWeight: "500", fontSize: "14px", color: "#314FC0", marginTop: "5px", textAlign: "right" }}
            >
              지금까지 5명이 살아봤어요!
            </div>
            <hr />
          </div>
        </div>
      </MobileView>
    </>
  );
}
