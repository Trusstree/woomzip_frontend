"use client"

import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HomeTextComponent({container}:{container:any}){
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      gsap.to('#homeTextComponent2', {
        scrollTrigger: {
          trigger: '#homeTextComponent2',
          start: 'top 61',
          pin: true,
          scrub: 0.5,
          pinSpacing: false,
        },
      });
      gsap.to("#homeText1", {
        opacity:1,
        scrollTrigger: {
          trigger: "#homeText1",
          start: "50% 80%",
          end: "50% 60%",
          scrub:0.5,
        },
      });
      gsap.to("#homeText2", {
        opacity:1,
        scrollTrigger: {
          trigger: "#homeText2",
          start: "50% 80%",
          end: "50% 60%",
          scrub:0.5,
        },
      });
      gsap.to("#homeText3", {
        opacity:1,
        scrollTrigger: {
          trigger: "#homeText3",
          start: "50% 80%",
          end: "50% 60%",
          scrub:0.5,
        },
      });
      gsap.to("#homeText4", {
        opacity:1,
        scrollTrigger: {
          trigger: "#homeText4",
          start: "50% 80%",
          end: "50% 60%",
          scrub:0.5,
        },
      });
    },
    { scope: container.current }
  );

  return (
    <>
      <div
        id={'homeTextComponent1'}
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
          src={'/1.jpg'}
          width={1600}
          height={1300}
          style={{ objectFit: 'cover', width: '100%', aspectRatio: '32 / 17', minHeight: '600px', maxHeight: '1200px' }}
          alt={'background2'}
        />
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
            bottom: '50px',
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
        aspectRatio: '32 / 17',
        minHeight: '600px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          fontSize: 'clamp(35px, 6vw, 55px)',
          fontWeight: '600',
          wordBreak: 'keep-all',
          width: '95%',
          margin: '50px auto',
          color: '#ffffff',
        }}
      >
        <span
          id={"homeText1"}
          style={{
            opacity:0,
          }}
        >
          어떤 집을 지어야 할지,
        </span>
        <br />
        
        <span
          id={"homeText2"}
          style={{
            opacity:0,
          }}
        >
          제작사를 믿을 수 있을지,
        </span>
        <br />
        <span
          id={"homeText3"}
          style={{
            opacity:0,
          }}
        >
          내 예산안에 가능할지 고민하시나요?
        </span>
        <br />
        <br />
        <span
          id={"homeText4"}
          style={{
            opacity:0,
          }}
        >
          그 모든 걱정, 움집에선 필요 없어요.
        </span>
      </div>
    </div>
    </>
  );
}