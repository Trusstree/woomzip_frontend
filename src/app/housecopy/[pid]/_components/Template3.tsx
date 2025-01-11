'use client';

import { useState, useEffect } from 'react';
import Temp3CardSlider from '@/app/housecopy/[pid]/_components/Temp3CardSlider';

export default function Template3({ templateData }: { templateData: Template3Data }) {
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
          {templateData.title}
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
          {templateData.description}
        </div>
        <Temp3CardSlider template={templateData.template} />;
      </div>
    </div>
  );
}
