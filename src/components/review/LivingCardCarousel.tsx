'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function LivingCardCarousel({ images }) {
  return (
    <Swiper
      pagination={{ dynamicBullets: true }}
      modules={[Pagination]}
      className="mySwiper"
      style={{ width: '100%', height: '280px' }}
    >
      {images.map((e, i) => (
        <SwiperSlide key={i}>
          <Image
            alt={'living card image'}
            src={e}
            width={300}
            height={300}
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              borderRadius: '10px',
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
