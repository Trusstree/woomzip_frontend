'use client';

import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Comp2({ container }: { container: any }) {
  useGSAP(
    () => {
      gsap.to('#aboutText', {
        opacity: 1,
        scrollTrigger: {
          trigger: '#aboutText',
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
      style={{
        width: '100%',
        height: 'calc(100svh)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        id={`aboutText`}
        style={{
          width: 'auto',
          maxWidth: '90%',
          fontSize: 'clamp(20px, 5vw, 32px)',
          wordBreak: 'keep-all',
          fontWeight: '700',
          marginTop: '100px',
          lineHeight: 'clamp(45px, 4vw, 60px)',
          opacity: 0,
        }}
      >
        "내 집을 짓는다" 라는 것은,
        <br />
        다양한 의미를 가지겠지만 공통적으로 행복하기 위함일 것입니다.
        <br />
        그런데 왜 짓는 과정은 행복하지 못할까요?
        <br />
        움집은 꿈을 이뤄가는 과정이 제일 행복해야 한다는 생각에서 출발했습니다.
        <br />
        <br />
        움집은 10년은 늙는다는 건축과정을 행복하게 만드는 서비스입니다.
      </div>
    </div>
  );
}
