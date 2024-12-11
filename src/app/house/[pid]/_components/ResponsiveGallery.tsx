'use client';

import styles from '@/app/house/[pid]/_styles/HouseClient.module.css';
import React from 'react';
// Swiper의 리액트 컴포넌트 가져오기
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

// 사진 5개 보여주는 갤러리 컴포넌트
const GalleryFive = ({ imageData }) => {
  return (
    <div className={`row g-2`} style={{ width: '100%', position: 'relative', margin: '10px 0', display: '' }}>
      <div className="col-6">
        <div style={{ borderRadius: '10px 0 0 10px', overflow: 'hidden' }}>
          <img className={styles.mainImg} src={imageData[0]} alt="main" />
        </div>
      </div>
      <div className="col-3">
        <div style={{ height: '50%', overflow: 'hidden' }}>
          <img className={styles.subImg} src={imageData[1]} alt="sub1" />
        </div>
        <div style={{ height: '50%', marginTop: '4px', overflow: 'hidden' }}>
          <img className={styles.subImg} src={imageData[2]} alt="sub2" />
        </div>
      </div>
      <div className="col-3">
        <div
          style={{
            height: '50%',
            overflow: 'hidden',
            borderRadius: '0 10px 0 0',
          }}
        >
          <img className={styles.subImg} src={imageData[3]} alt="sub3" />
        </div>
        <div
          style={{
            height: '50%',
            marginTop: '4px',
            overflow: 'hidden',
            borderRadius: '0 0 10px 0',
          }}
        >
          <img className={styles.subImg} src={imageData[4]} alt="sub4" />
        </div>
      </div>
      <div
        className="btn"
        data-bs-toggle="modal"
        data-bs-target={`#house_detail_modal`}
        style={{
          position: 'absolute',
          right: '25px',
          bottom: '15px',
          backgroundColor: 'white',
          opacity: '0.7',
          width: 'auto',
        }}
      >
        <div className="d-flex justify-content-between">
          <div style={{ width: '30px' }}>
            <img src="https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/all.png" style={{ width: '25px' }} />
          </div>
          <div style={{ width: 'auto', marginTop: '2px' }}>사진 전체보기</div>
        </div>
      </div>
    </div>
  );
};

// 사진 1개씩 보여주는 갤러리 컴포넌트
const GalleryOne = ({ imageData }) => {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={{ clickable: true }}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
    >
      {imageData.map((image, index) => (
        <SwiperSlide key={index}>
          <div style={{ width: '100%', aspectRatio: '5/4' }}>
            <img
              src={image}
              alt={`Slide ${index}`}
              style={{ objectFit: 'cover', width: '100%', aspectRatio: '5/4', borderRadius: '10px' }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default function ResponsiveGallery({ pid, imageData }) {
  return (
    <div>
      <div className={styles.gallary5} style={{ margin: 'none' }}>
        <GalleryFive imageData={imageData} />
      </div>
      <div className={styles.gallary1}>
        <GalleryOne imageData={imageData} />
      </div>
    </div>
  );
}
