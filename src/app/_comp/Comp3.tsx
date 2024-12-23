'use client'

import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Comp3({id, container}:{id:string, container:any}){
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      gsap.from("#comp3BG", {
      scale: 1.15,
      transformOrigin: "center center",
      scrollTrigger: {
        trigger: "#comp3BG",
        start: "top bottom",
        scrub: 0.5,
        pinSpacing: false,
      },
    })
  }
  ,{ scope: container.current }
  );

  return (
    <div
      id={id}
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
        id={'comp3BG'}
        src={'/2.jpg'}
        width={1600}
        height={1300}
        style={{ objectFit: 'cover', width: '115%', aspectRatio: '32 / 17', minHeight: '600px', maxHeight: '1200px' }}
        alt={'background2'}
      />
      <div
        style={{
          width: '100%',
          position: 'absolute',
          top: '100px',
          left: 0,
        }}
      >
        <div
          style={{
            width: '95%',
            margin: '0 auto',
            fontSize: '35px',
            fontWeight: '700',
            color: 'black',
            wordBreak: 'keep-all',
            textAlign: 'center',
          }}
        >
          체류형쉼터
        </div>
        <div
          style={{
            width: '95%',
            margin: '30px auto',
            fontSize: '16px',
            fontWeight: '600',
            color: 'black',
            wordBreak: 'keep-all',
            textAlign: 'center',
          }}
        >
          10평부터 17평까지 | 4,300만 원~
        </div>
      </div>

      <div
        style={{
          width: '100%',
          position: 'absolute',
          bottom: '50px',
          left: 0,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          className="btn"
          style={{
            border: 'none',
            borderRadius: '20px',
            backgroundColor: '#333333',
            color: '#ffffff',
            fontSize: '14px',
            fontWeight: '500',
            margin: '5px',
            padding: '10px 15px',
          }}
        >
          상세정보 보기
        </div>
        <div
          className="btn"
          style={{
            border: 'none',
            borderRadius: '20px',
            backgroundColor: '#ffffff',
            color: 'black',
            fontSize: '14px',
            fontWeight: '500',
            margin: '5px',
            padding: '10px 15px',
          }}
        >
          더 많은 제품보기
        </div>
      </div>
    </div>
  );
}