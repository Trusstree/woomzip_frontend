'use client';

import { useState, useEffect } from 'react';
import Temp3CardSlider from '@/app/housecopy/[pid]/_components/Temp3CardSlider';

export default function Template3({ imageData }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // 초기 화면 크기 체크
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: 'black',
        padding: '100px 0',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          width: '90%',
          margin: '0 auto',
          zIndex: '2',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
          wordBreak: 'keep-all',
        }}
      >
        <div
          style={{
            color: '#ffffff',
            fontSize: 'clamp(25px, 4vw, 45px)',
            fontWeight: '700',
            marginTop: '20px',
            textAlign: isMobile ? 'left' : 'center',
          }}
        >
          이 곳은 3번 템플릿의 제목이 들어가는 곳입니다. 한줄 추천합니다.
        </div>
        <div
          style={{
            color: '#ffffff',
            fontSize: 'clamp(14px, 3vw, 16px)',
            fontWeight: '350',
            margin: '10px 0 50px 0',
            textAlign: isMobile ? 'left' : 'center',
          }}
        >
          이 곳은 이 3번 템플릿의 설명란입니다. <br /> 제품을 한 번 멋들어지게 설명해보세요. 한 세줄 추천합니다. 빠진
          내용 없이, 만약 이곳에 거실 관련 설명 글이면 거실을 잘 설명해주시면 됩니다. 잘 아시겠죠?
        </div>
        <Temp3CardSlider imageData={imageData} />;
      </div>
    </div>
  );
}
