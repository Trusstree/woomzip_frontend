'use client';

import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Comp1({ inquiryRef }: { inquiryRef?: any }) {
  const inquiryScrollIntoView = () => inquiryRef.current.scrollIntoView();
  return (
    <div
      style={{
        width: '100%',
        aspectRatio: '32 / 17',
        minHeight: '600px',
        maxHeight: '1200px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Image
        src="/8.webp"
        width={1600}
        height={1300}
        style={{
          objectFit: 'cover',
          width: '100%',
          aspectRatio: '32 / 17',
          minHeight: '600px',
          maxHeight: '1200px',
        }}
        alt={'company'}
      />
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: 0,
          width: '100%',
          fontSize: '16px',
          fontWeight: '600',
          wordBreak: 'keep-all',
          textAlign: 'center',
          color: '#ffffff',
        }}
      >
        움집 서비스 소개
        <div
          style={{ fontSize: 'clamp(20px, 5vw, 32px)', wordBreak: 'keep-all', fontWeight: '700', marginTop: '30px' }}
        >
          계획부터 입주까지 움집이 당신과 함께합니다.
        </div>
      </div>
      <div style={{ width: '100%', display: 'flex', position: 'absolute', bottom: '10%', left: '0' }}>
        <div
          className="btn"
          style={{
            border: 'none',
            borderRadius: '20px',
            backgroundColor: '#4067F8',
            color: '#ffffff',
            fontSize: '14px',
            fontWeight: '500',
            padding: '10px 70px',
            margin: '0 auto',
          }}
          onClick={inquiryScrollIntoView}
        >
          문의하기
        </div>
      </div>
    </div>
  );
}
