'use client';

import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

export default function HomeServiceComponent({ container }: { container: any }) {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      gsap.from('#serviceBG', {
        scale: 1.2,
        transformOrigin: 'center center',
        scrollTrigger: {
          trigger: '#serviceBG',
          start: 'top bottom',
          scrub: 3,
          pinSpacing: false,
        },
      });
    },
    { scope: container.current },
  );

  return (
    <div
      id={'service'}
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '32 / 17',
        minHeight: '600px',
        maxHeight: '1200px',
        overflow: 'hidden',
      }}
    >
      <Image
        id={'serviceBG'}
        src={'/3.png'}
        width={1600}
        height={1200}
        style={{ objectFit: 'cover', width: '120%', aspectRatio: '32 / 17', minHeight: '600px', maxHeight: '1200px' }}
        alt={'background2'}
      />
      <div
        style={{
          width: '100%',
          position: 'absolute',
          top: '35%',
          left: 0,
        }}
      >
        <div
          style={{
            width: '95%',
            margin: '0 auto',
            fontSize: '16px',
            fontWeight: '600',
            color: '#ffffff',
            wordBreak: 'keep-all',
            textAlign: 'center',
          }}
        >
          오직 움집에서만
        </div>
        <div
          style={{
            width: '95%',
            margin: '20px auto',
            fontSize: 'clamp(25px, 3vw, 35px)',
            fontWeight: '700',
            color: '#ffffff',
            wordBreak: 'keep-all',
            textAlign: 'center',
          }}
        >
          움집 안심 서비스
        </div>
        <div
          style={{
            width: '95%',
            margin: '0 auto',
            fontSize: 'clamp(14px, 2vw, 17px)',
            fontWeight: '500',
            color: '#ffffff',
            wordBreak: 'keep-all',
            textAlign: 'center',
          }}
        >
          움집에서는 안심 상담, 안심 계약, 안심 지불, 안심 AS까지
          <br />
          건축주가 믿고 시작할 수 있도록
          <br />
          모든 서비스를 제공합니다.
        </div>
        <div style={{ width: '100%', display: 'flex', marginTop: '50px' }}>
          <Link
            href={'/service'}
            className="btn"
            style={{
              border: 'none',
              borderRadius: '20px',
              backgroundColor: '#ffffff',
              color: 'black',
              fontSize: '14px',
              fontWeight: '500',
              padding: '10px 120px',
              margin: '0 auto',
            }}
          >
            더 알아보기
          </Link>
        </div>
      </div>
    </div>
  );
}
