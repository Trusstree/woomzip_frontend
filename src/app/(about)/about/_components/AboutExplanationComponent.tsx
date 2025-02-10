'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function AboutExplanationComponent({ container }: { container: any }) {
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
        "내 집을 짓는다"는 꿈을 이루는 과정이자, 궁극적으로 행복을 추구하는 여정입니다. 그러나 그 과정에서 겪는 어려움은
        종종 그 행복을 가로막곤 합니다.
        <br />
        움집은 바로 그 점에 착안하여, 건축이 주는 번거로움과 스트레스 없이 꿈을 실현할 수 있도록 돕는 서비스입니다. 자연
        속 생활을 위한 이동식 모듈러 주택을 중개하며, 고객이 보다 손쉽고 빠르게 집을 지을 수 있도록 지원합니다. 건축
        과정에서의 복잡한 절차와 시간 소모를 최소화하고, 꿈꾸던 집을 짓는 행복을 온전히 누릴 수 있게 만드는 것이 움집의
        목표입니다.
        <br />
        <br />
        10년을 더 늙게 만드는 건축 과정, 이제 움집과 함께라면 그 여정이 한층 더 즐거워질 것입니다.
      </div>
    </div>
  );
}
