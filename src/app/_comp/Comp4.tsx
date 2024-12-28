'use client';

import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';

export default function Comp4({ id }: { id: string }) {
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.to('#comp7BG', {
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
        backgroundColor: 'black',
      }}
    >
      <div id="comp7BG" className="d-flex">
        <Image
          src={'/9.png'}
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
          src={'/9.png'}
          width={1600}
          height={850}
          style={{
            objectFit: 'contain',
            width: '1600px',
            border: 'none',
          }}
          alt={'background2'}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '200px',
          background: 'black',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '200px',
          left: 0,
          width: '100%',
          height: '50px',
          background: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
        }}
      />

      <div
        className="row"
        style={{
          position: 'absolute',
          bottom: '30px',
          left: 0,
          width: '100%',
        }}
      >
        <div className="col-md-6 col-12">
          <div>
            <div
              style={{
                width: '90%',
                margin: '0 auto',
                fontSize: '16px',
                fontWeight: '600',
                wordBreak: 'keep-all',
                color: '#ffffff',
              }}
            >
              파트너
            </div>
            <div
              style={{
                width: '90%',
                margin: '0 auto',
                paddingTop: '20px',
                fontSize: 'clamp(25px, 3vw, 35px)',
                fontWeight: '700',
                wordBreak: 'keep-all',
                color: '#ffffff',
              }}
            >
              최고의 전문가들과 함께합니다.
            </div>
          </div>
        </div>
        <div className="row col-md-6 col-12">
          <div style={{ width: '95%', marginLeft: '2.5%' }}>
            <div
              style={{
                width: '95%',
                margin: '20px auto',
                fontSize: 'clamp(14px, 2vw, 17px)',
                fontWeight: '500',
                wordBreak: 'keep-all',
                color: '#ffffff',
                marginTop: '20px',
              }}
            >
              모든 팀원이 지방에서 자랐습니다. 우리가 자라온 마을이 소멸되지 않고 이어질 수 있도록 일합니다.
              <br />
              결국 누구나 꿈꾸는 내 집이란 로망을 이룰 수 있도록 돕습니다.
            </div>
            <Link
              href={"/about"}
              className="btn"
              style={{
                border: 'none',
                borderRadius: '20px',
                backgroundColor: '#ffffff',
                color: 'black',
                fontSize: '14px',
                fontWeight: '500',
                padding: '10px 100px',
                marginLeft: '2%',
                marginTop: '10px',
              }}
            >
              더 알아보기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
