'use client';

import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function HomeTextComponent({ container }: { container: any }) {
  useGSAP(
    () => {
      gsap.to('#homeTextComponent2', {
        scrollTrigger: {
          trigger: '#homeTextComponent2',
          start: 'top top',
          pin: true,
          scrub: 0.5,
          pinSpacing: false,
        },
      });
      gsap.to('#homeText1', {
        opacity: 1,
        scrollTrigger: {
          trigger: '#homeText1',
          start: '50% 80%',
          end: '50% 60%',
          scrub: 0.5,
        },
      });
      gsap.to('#homeText2', {
        opacity: 1,
        scrollTrigger: {
          trigger: '#homeText2',
          start: '50% 80%',
          end: '50% 60%',
          scrub: 0.5,
        },
      });
      gsap.to('#homeText3', {
        opacity: 1,
        scrollTrigger: {
          trigger: '#homeText3',
          start: '50% 80%',
          end: '50% 60%',
          scrub: 0.5,
        },
      });
      gsap.to('#homeText4', {
        opacity: 1,
        scrollTrigger: {
          trigger: '#homeText4',
          start: '50% 80%',
          end: '50% 60%',
          scrub: 0.5,
        },
      });
    },
    { scope: container.current },
  );

  return (
    <>
      <div
        id={'homeTextComponent1'}
        style={{
          position: 'relative',
          width: '100%',
          height: 'calc(100svh - 61px)',
          overflow: 'hidden',
        }}
      >
        <Image src={'/1.webp'} fill style={{ objectFit: 'cover', aspectRatio: '16 / 9' }} alt={'background2'} />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            aspectRatio: '6 / 1',
            minHeight: '150px',
            maxHeight: '200px',
            background: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
          }}
        />

        <div
          style={{
            width: '100%',
            position: 'absolute',
            top: '50px',
            left: 0,
          }}
        >
          <div
            style={{
              width: '95%',
              margin: '0 auto',
              fontSize: 'clamp(40px, 10vw, 100px)',
              fontWeight: '700',
              color: '#ffffff',
              wordBreak: 'keep-all',
            }}
          >
            움집에서 짓지 말고, 구매하세요
          </div>
        </div>

        <div
          style={{
            width: '100%',
            position: 'absolute',
            bottom: '60px',
            left: 0,
          }}
        >
          <div
            style={{
              width: '95%',
              margin: '0 auto',
              fontSize: 'clamp(35px, 6vw, 55px)',
              fontWeight: '600',
              color: '#ffffff',
              wordBreak: 'keep-all',
            }}
          >
            건축이 아닌 제조,
            <br /> 복잡한 일이 아닌 간단한 일로.
          </div>
        </div>
      </div>

      <div
        id={'homeTextComponent2'}
        style={{
          backgroundColor: 'black',
          width: '100%',
          height: 'calc(100svh - 61px)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            fontSize: 'clamp(35px, 6vw, 55px)',
            fontWeight: '600',
            wordBreak: 'keep-all',
            width: '95%',
            height: 'calc(100svh - 61px)',
            color: '#ffffff',
            margin: '100px auto',
          }}
        >
          <span
            id={'homeText1'}
            style={{
              opacity: 0,
            }}
          >
            어떤 집을 지어야 할지,
          </span>
          <br />

          <span
            id={'homeText2'}
            style={{
              opacity: 0,
            }}
          >
            제작사를 믿을 수 있을지,
          </span>
          <br />
          <span
            id={'homeText3'}
            style={{
              opacity: 0,
            }}
          >
            내 예산안에 가능할지 고민하시나요?
          </span>
          <br />
          <br />
          <span
            id={'homeText4'}
            style={{
              opacity: 0,
            }}
          >
            그 모든 걱정, 움집에선 필요 없어요.
          </span>
        </div>
      </div>
    </>
  );
}
