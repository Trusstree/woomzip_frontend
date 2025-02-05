'use client';

import Image from '@/components/ImageFallback';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HomePeopleComponent() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      id={'people'}
      style={{
        position: 'relative',
        width: '100%',
        height: 'calc(-61px + 100svh)',
        overflow: 'hidden',
        backgroundColor: '#ffffff',
      }}
    >
      <Image
        src={'/trusstree4.png'}
        width={1600}
        height={900}
        style={{
          objectFit: 'cover',
          width: isMobile ? '100%' : '85%',
          marginLeft: isMobile ? 0 : '15%',
        }}
        alt={'background2'}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: isMobile ? 0 : '250px',
          height: '100%',
          background: '#ffffff',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: isMobile ? 0 : '250px',
          width: isMobile ? '100%' : '150px',
          height: isMobile ? '430px' : '100%',
          background: isMobile
            ? 'linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))'
            : 'linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))',
        }}
      />

      <div
        style={{
          width: '100%',
          position: 'absolute',
          bottom: '40px',
          left: 0,
        }}
      >
        <div className="col-12">
          <div
            style={{
              width: '95%',
              margin: '0 auto',
              fontSize: '16px',
              fontWeight: '600',
              wordBreak: 'keep-all',
            }}
          >
            움집 팀
          </div>
          <div
            style={{
              width: '95%',
              margin: '20px auto',
              fontSize: 'clamp(25px, 3vw, 35px)',
              fontWeight: '700',
              wordBreak: 'keep-all',
            }}
          >
            움집은 누구나 쉽게
            <br />내 삶을 찾을 수 있도록 돕습니다.
          </div>
          <div
            style={{
              width: '95%',
              margin: '0 auto',
              fontSize: 'clamp(14px, 2vw, 17px)',
              fontWeight: '500',
              wordBreak: 'keep-all',
            }}
          >
            모든 팀원이 지방에서 자랐습니다.
            <br />
            우리가 자라온 마을이 소멸되지 않고 이어질 수 있도록 일합니다.
            <br />
            결국 누구나 꿈꾸는 내 집이란 로망을 이룰 수 있도록 돕습니다.
          </div>
          <Link
            href={'/about'}
            className="btn"
            style={{
              border: 'none',
              borderRadius: '20px',
              backgroundColor: 'black',
              color: '#ffffff',
              fontSize: '14px',
              fontWeight: '500',
              padding: '10px 120px',
              marginLeft: '2%',
              marginTop: '50px',
            }}
          >
            더 알아보기
          </Link>
        </div>
      </div>
    </div>
  );
}
