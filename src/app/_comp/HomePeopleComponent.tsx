'use client';

import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';

export default function HomePeopleComponent() {
  useGSAP(() => {
    gsap.to('#peopleBG', {
      ease: 'none',
      xPercent: -100,
      duration: 30,
      repeat: -1,
    });
  });

  return (
    <div
      id={'people'}
      style={{
        position: 'relative',
        width: '100%',
        height: '100svh',
        overflow: 'hidden',
        backgroundColor: '#ffffff',
      }}
    >
      {/* <div id="peopleBG" className="d-flex">
        <Image
          src={'/4.webp'}
          width={1600}
          height={850}
          style={{
            objectFit: 'contain',
            width: '1600px',
            border: 'none',
          }}
          alt={'background2'}
        />
        <Image
          src={'/4.webp'}
          width={1600}
          height={850}
          style={{
            objectFit: 'contain',
            width: '1600px',
            border: 'none',
          }}
          alt={'background2'}
        />
      </div> */}
      <Image
        src={'/4.webp'}
        width={1600}
        height={850}
        style={{
          objectFit: 'contain',
          width: '1600px',
        }}
        alt={'background2'}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '300px',
          height: '100%',
          background: '#ffffff',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '300px',
          width: '150px',
          height: '100%',
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
          <Link
            href={'/about'}
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
          </Link>
        </div>
      </div>
    </div>
  );
}
