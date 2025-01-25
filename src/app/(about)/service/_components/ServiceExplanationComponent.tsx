'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function ServiceExplanationComponent({ container }: { container: any }) {
  useGSAP(
    () => {
      gsap.to('#serviceText', {
        opacity: 1,
        scrollTrigger: {
          trigger: '#serviceText',
          start: '50% 80%',
          end: '50% 60%',
          scrub: 0.5,
        },
      });
    },
    { scope: container.current },
  );

  return (
    <div
      id={'serviceText'}
      style={{
        width: '100%',
        height: 'calc(100svh)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0,
      }}
    >
      <div
        style={{
          width: 'auto',
          fontSize: 'clamp(20px, 5vw, 32px)',
          wordBreak: 'keep-all',
          fontWeight: '700',
          marginTop: '100px',
          maxWidth: '90%',
          textAlign: 'center',
        }}
      >
        움집에서는 누구나 쉽고 빠르게 자연 속 삶을 시작할 수 있습니다.
      </div>
    </div>
  );
}
