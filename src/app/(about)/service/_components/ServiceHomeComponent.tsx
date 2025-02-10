'use client';

import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRouter } from 'next/navigation';

export default function ServiceHomeComponent({ container }: { container: any }) {
  const router = useRouter();
  const inquiryScrollIntoView = () => router.push('inquire');
  useGSAP(
    () => {
      gsap.to('#serviceIntroFrame', {
        scale: 1.6,
        transformOrigin: 'center center',
        scrollTrigger: {
          trigger: '#serviceIntroFrame',
          start: 'bottom bottom',
          scrub: 0.5,
          pinSpacing: false,
        },
      });
      gsap.to('#serviceIntroBG', {
        scale: 1.1,
        transformOrigin: 'center center',
        scrollTrigger: {
          trigger: '#serviceIntroBG',
          start: 'bottom bottom',
          scrub: 0.5,
          pinSpacing: false,
        },
      });
    },
    { scope: container.current },
  );

  return (
    <div
      style={{
        width: '100%',
        position: 'relative',
        overflow: 'clip',
        height: 'calc(100svh)',
        zIndex: 0,
        backgroundColor: 'white',
      }}
    >
      <Image
        id={'serviceIntroFrame'}
        src="/8.webp"
        loading={'eager'}
        width={1600}
        height={1300}
        style={{
          objectFit: 'cover',
          width: '100%',
          height: 'calc(100svh)',
          position: 'absolute',
          zIndex: -1,
        }}
        alt={'company'}
        priority
      />
      <Image
        id={'serviceIntroBG'}
        src="/8_1.webp"
        width={1600}
        height={1300}
        style={{
          objectFit: 'cover',
          width: '100%',
          height: 'calc(100svh)',
          position: 'absolute',
          zIndex: -2,
        }}
        alt={'company'}
        priority
      />
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: 0,
          width: '100%',
          height: 'calc(100svh)',
          fontSize: '16px',
          fontWeight: '600',
          wordBreak: 'keep-all',
          textAlign: 'center',
          color: '#ffffff',
          contain: 'paint',
          zIndex: 0,
        }}
      >
        <div style={{ position: 'sticky', top: '10%', marginBottom: '280px' }}>
          움집 서비스 소개
          <div
            style={{ fontSize: 'clamp(20px, 5vw, 32px)', wordBreak: 'keep-all', fontWeight: '700', marginTop: '30px' }}
          >
            계획부터 입주까지 움집이 당신과 함께합니다.
          </div>
        </div>
      </div>
    </div>
  );
}
