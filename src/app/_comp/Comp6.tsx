'use client';

import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Comp6({ id }: { id: string }) {
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.to('#comp6BG', {
      ease: 'none',
      xPercent: -100,
      duration: 30,
      repeat: -1,
    });
  });

  return (
    <div
      id={id}
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '32 / 17',
        minHeight: '600px',
        overflow: 'hidden',
        backgroundColor: '#ffffff',
      }}
    >
      <div id="comp6BG" className="d-flex">
        <Image
          src={'/4.png'}
          width={1600}
          height={985}
          style={{ objectFit: 'cover', width: '100%', aspectRatio: '32/17', minHeight: '600px', border: 'none' }}
          alt={'background2'}
        />
        <Image
          src={'/4.png'}
          width={1600}
          height={985}
          style={{ objectFit: 'cover', width: '100%', aspectRatio: '32/17', minHeight: '600px', margin: '0' }}
          alt={'background2'}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '30%',
          height: '1000px',
          background: 'linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))',
        }}
      />

      <div
        style={{
          width: '100%',
          position: 'absolute',
          bottom: '40px',
          left: 0,
        }}
      >
        <div className="col-12">
          <div
            style={{
              width: '95%',
              margin: '0 auto',
              fontSize: '16px',
              fontWeight: '600',
              wordBreak: 'keep-all',
            }}
          >
            움집 팀
          </div>
          <div
            style={{
              width: '95%',
              margin: '20px auto',
              fontSize: 'clamp(25px, 3vw, 35px)',
              fontWeight: '700',
              wordBreak: 'keep-all',
            }}
          >
            움집은 누구나 쉽게
            <br />내 삶을 찾을 수 있도록 돕습니다.
          </div>
          <div
            style={{
              width: '95%',
              margin: '0 auto',
              fontSize: 'clamp(14px, 2vw, 17px)',
              fontWeight: '500',
              wordBreak: 'keep-all',
            }}
          >
            모든 팀원이 지방에서 자랐습니다.
            <br />
            우리가 자라온 마을이 소멸되지 않고 이어질 수 있도록 일합니다.
            <br />
            결국 누구나 꿈꾸는 내 집이란 로망을 이룰 수 있도록 돕습니다.
          </div>
          <div
            className="btn"
            style={{
              border: 'none',
              borderRadius: '20px',
              backgroundColor: 'black',
              color: '#ffffff',
              fontSize: '14px',
              fontWeight: '500',
              padding: '10px 120px',
              marginLeft: '2%',
              marginTop: '50px',
            }}
          >
            더 알아보기
          </div>
        </div>
      </div>
    </div>
  );
}
