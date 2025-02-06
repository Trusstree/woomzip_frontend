'use client';

import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function AboutHomeComponent({ container }: { container: any }) {
  useGSAP(
    () => {
      gsap.from('#about1BG', {
        scale: 1.15,
        transformOrigin: 'center center',
        scrollTrigger: {
          trigger: '#about1BG',
          start: 'top bottom',
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
        height: 'calc(-61px + 100svh)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Image
        src="/trusstree4.png"
        id="about1BG"
        loading={"eager"} 
        fill
        style={{
          objectFit: 'cover',
        }}
        alt={'company'}
        priority
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          aspectRatio: '8 / 1',
          minHeight: '200px',
          maxHeight: '500px',
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))',
        }}
      ></div>

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
        }}
      >
        ABOUT US
        <div
          style={{ fontSize: 'clamp(20px, 5vw, 32px)', wordBreak: 'keep-all', fontWeight: '700', marginTop: '30px' }}
        >
          움집은 누구나 쉽게 자연 속 삶을
          <br />
          선택할 수 있도록 돕습니다.
        </div>
      </div>
    </div>
  );
}
