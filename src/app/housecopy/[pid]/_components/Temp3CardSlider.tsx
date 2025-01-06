'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const Temp3CardSlider = ({ imageData }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // 초기 화면 크기 체크
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', position: 'relative', width: '100%' }}>
      <button
        onClick={handlePrev}
        style={{
          position: 'absolute',
          left: '20px',
          zIndex: 10,
          background: '#666666',
          color: '#fff',
          border: '1px solid #ffffff',
          padding: '8px',
          borderRadius: '50%',
          cursor: 'pointer',
          width: '40px',
          opacity: '0.8',
        }}
      >
        {'<'}
      </button>
      <div
        style={{
          display: 'flex',
          flexWrap: 'nowrap',
          transform: `translateX(-${currentIndex * 530}px)`,
          transition: 'transform 0.3s ease-in-out',
          gap: '30px',
        }}
      >
        {imageData.map((src, index) => (
          <div key={index}>
            <div
              style={{
                width: isMobile ? '300px' : '500px',
                height: isMobile ? '360px' : '600px',
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <Image
                width={500}
                height={600}
                src={src}
                alt={`img${index}`}
                style={{ borderRadius: '20px', objectFit: 'cover', height: isMobile ? '360px' : '600px' }}
              />
              <div
                style={{
                  position: 'absolute',
                  zIndex: '0',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '170px',
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  left: isMobile ? '15px' : '30px',
                  bottom: isMobile ? '15px' : '30px',
                  color: '#ffffff',
                  fontSize: isMobile ? '16px' : '20px',
                  fontWeight: '750',
                }}
              >
                3번 템플릿 요소 1번 제목이옵니다.
              </div>
            </div>
            <div
              style={{
                color: '#ffffff',
                marginTop: '20px',
                width: '100%',
                fontSize: isMobile ? '14px' : '16px',
                fontWeight: '350',
              }}
            >
              3번 템플릿 요소 1번의 설명글 설명글 설명글 설명글설명글 설명글 설명글 설명글설명글 설명글 설명글
              설명글설명글 설명글 설명글 설명글설명글 설명글 설명글 설명글 설명글 설명글 설명글 설명글
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleNext}
        style={{
          position: 'absolute',
          right: '20px',
          zIndex: 10,
          background: '#666666',
          color: '#fff',
          border: '1px solid #ffffff',
          padding: '8px',
          borderRadius: '50%',
          cursor: 'pointer',
          width: '40px',
          opacity: '0.8',
        }}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Temp3CardSlider;
