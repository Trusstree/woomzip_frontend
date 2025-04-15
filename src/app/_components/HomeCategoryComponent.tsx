'use client';

import Image from '@/components/ImageFallback';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import HomeCategoryNav from './HomeCategoryNav';
import Link from 'next/link';

export default function HomeCategoryComponent({ container }: { container: any }) {
  const category1 = useRef(null);
  const category2 = useRef(null);
  const category3 = useRef(null);

  useGSAP(
    () => {
      gsap.from('#category1BG', {
        scale: 1.15,
        transformOrigin: 'center center',
        scrollTrigger: {
          trigger: '#category1BG',
          start: 'top bottom',
          scrub: 0.5,
          pinSpacing: false,
        },
      });

      gsap.from('#category2BG', {
        scale: 1.15,
        transformOrigin: 'center center',
        scrollTrigger: {
          trigger: '#category2BG',
          start: 'top bottom',
          scrub: 0.5,
          pinSpacing: false,
        },
      });

      gsap.from('#category3BG', {
        scale: 1.15,
        transformOrigin: 'center center',
        scrollTrigger: {
          trigger: '#category3BG',
          start: 'top bottom',
          scrub: 0.5,
          pinSpacing: false,
        },
      });
    },
    { scope: container.current },
  );

  return (
    <>
      <div style={{ position: 'relative' }}>
        <HomeCategoryNav container={container} category1={category1} category2={category2} category3={category3} />

        <div
          id={'category1'}
          ref={category1}
          style={{
            position: 'relative',
            width: '100%',
            height: '100svh',
            overflow: 'hidden',
          }}
        >
          <Image
            id={'category1BG'}
            src={'/333.webp'}
            fill
            style={{
              objectFit: 'cover',
            }}
            alt={'background2'}
          />
          <div
            style={{
              width: '100%',
              position: 'absolute',
              top: '150px',
              left: 0,
            }}
          >
            <div
              style={{
                width: '95%',
                margin: '0 auto',
                fontSize: 'clamp(27px, 3vw, 35px)',
                fontWeight: '700',
                color: '#ffffff',
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
                fontWeight: '500',
                color: '#ffffff',
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
            <Link
              href={'/house'}
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
            </Link>
            <Link
              href={'/house?tag=체류형쉼터'}
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
            </Link>
          </div>
        </div>

        <div
          id={'category2'}
          ref={category2}
          style={{
            position: 'relative',
            width: '100%',
            height: '100svh',
            overflow: 'hidden',
          }}
        >
          <Image
            id={'category2BG'}
            src={'/222.webp'}
            fill
            style={{
              objectFit: 'cover',
            }}
            alt={'background2'}
          />
          <div
            style={{
              width: '100%',
              position: 'absolute',
              top: '150px',
              left: 0,
            }}
          >
            <div
              style={{
                width: '95%',
                margin: '0 auto',
                fontSize: 'clamp(27px, 3vw, 35px)',
                fontWeight: '700',
                color: '#ffffff',
                wordBreak: 'keep-all',
                textAlign: 'center',
              }}
            >
              일반 주택
            </div>
            <div
              style={{
                width: '95%',
                margin: '30px auto',
                fontSize: '16px',
                fontWeight: '500',
                color: '#ffffff',
                wordBreak: 'keep-all',
                textAlign: 'center',
              }}
            >
              11평부터 28평까지 | 5,800만 원 ~
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
            <Link
              href={'/house'}
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
            </Link>
            <Link
              href={'/house?tag=일반주택'}
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
            </Link>
          </div>
        </div>

        <div
          id={'category3'}
          ref={category3}
          style={{
            position: 'relative',
            width: '100%',
            height: '100svh',
            overflow: 'hidden',
          }}
        >
          <Image
            id={'category3BG'}
            src={'/111.jpeg'}
            fill
            style={{
              objectFit: 'cover',
            }}
            alt={'background2'}
          />
          <div
            style={{
              width: '100%',
              position: 'absolute',
              top: '150px',
              left: 0,
            }}
          >
            <div
              style={{
                width: '95%',
                margin: '0 auto',
                fontSize: 'clamp(27px, 3vw, 35px)',
                fontWeight: '700',
                color: '#ffffff',
                wordBreak: 'keep-all',
                textAlign: 'center',
              }}
            >
              농막
            </div>
            <div
              style={{
                width: '95%',
                margin: '30px auto',
                fontSize: '16px',
                fontWeight: '500',
                color: '#ffffff',
                wordBreak: 'keep-all',
                textAlign: 'center',
              }}
            >
              4평부터 11평까지 | 2,800만 원 ~
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
            <Link
              href={'/house/3'}
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
            </Link>
            <Link
              href={'/house?tag=농막'}
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
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
