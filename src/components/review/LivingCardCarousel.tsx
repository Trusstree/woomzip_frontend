"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

export default function LivingCardCarousel({ images }) {
  console.log(images);
  return (
    <Swiper
      pagination={{ dynamicBullets: true }}
      modules={[Pagination]}
      className="mySwiper"
      style={{ width: "100%", height: "280px" }}
    >
      {images.map((e, i) => (
        <SwiperSlide key={i}>
          <img
            src={e}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              borderRadius: "10px",
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
