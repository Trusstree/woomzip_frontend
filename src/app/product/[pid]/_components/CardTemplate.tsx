'use client';

import Image from '@/components/ImageFallback';
import { useState, useEffect, useRef } from 'react';

export default function CardTemplate({ templatesData }: { templatesData: Array<ProductCardTemplateData> }) {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // 초기 화면 크기 체크
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    if (currentIndex < templatesData.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleDrag = (e: React.TouchEvent | React.MouseEvent) => {
    let startX = 0;

    if ('touches' in e) {
      startX = e.touches[0].clientX;
    } else {
      startX = e.clientX;
    }

    const onMove = (event: React.TouchEvent | MouseEvent) => {
      let moveX = 0;

      if ('touches' in event) {
        moveX = event.touches[0].clientX - startX;
      } else {
        moveX = (event as MouseEvent).clientX - startX;
      }

      if (moveX > 50 && currentIndex > 0) {
        handlePrev();
        cleanup();
      } else if (moveX < -50 && currentIndex < templatesData.length - 1) {
        handleNext();
        cleanup();
      }
    };

    const cleanup = () => {
      window.removeEventListener('mousemove', onMove as any);
      window.removeEventListener('mouseup', cleanup);
      window.removeEventListener('touchmove', onMove as any);
      window.removeEventListener('touchend', cleanup);
    };

    window.addEventListener('mousemove', onMove as any);
    window.addEventListener('mouseup', cleanup);
    window.addEventListener('touchmove', onMove as any);
    window.addEventListener('touchend', cleanup);
  };

  return (
    <div style={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
      {/* 이전 버튼 */}
      {currentIndex > 0 && (
        <button
          onClick={handlePrev}
          style={{
            position: 'absolute',
            top: '50%',
            left: '10px',
            transform: 'translateY(-50%)',
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
      )}
      {/* 카드 컨테이너 */}
      <div
        ref={cardContainerRef}
        style={{
          display: 'flex',
          gap: '30px',
          transform: `translateX(-${currentIndex * (isMobile ? 300 : 530)}px)`,
          transition: 'transform 0.3s ease-in-out',
          cursor: 'grab',
        }}
        onMouseDown={handleDrag as any}
        onTouchStart={handleDrag as any}
      >
        {templatesData.map((card, index) => (
          <div key={index}>
            <div
              style={{
                flex: '0 0 auto',
                width: isMobile ? '300px' : '500px',
                height: isMobile ? '360px' : '600px',
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {/* 이미지 */}
              <Image
                width={500}
                height={600}
                src={card.productTemplateImageUrl}
                alt={`img${index}`}
                style={{ borderRadius: '20px', objectFit: 'cover', height: isMobile ? '360px' : '600px' }}
              />
              {/* 그라데이션 */}
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
              {/* 제목 */}
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
                {card.title}
              </div>
            </div>

            {/* 텍스트 설명 */}
            <div
              style={{
                color: '#ffffff',
                marginTop: '20px',
                width: '100%',
                fontSize: isMobile ? '14px' : '16px',
                fontWeight: '350',
              }}
            >
              {card.description}
            </div>
          </div>
        ))}
      </div>
      {/* 다음 버튼 */}
      {currentIndex < templatesData.length - 1 && (
        <button
          onClick={handleNext}
          style={{
            position: 'absolute',
            top: '50%',
            right: '10px',
            transform: 'translateY(-50%)',
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
      )}
    </div>
  );
}
