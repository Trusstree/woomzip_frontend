'use client';

import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function HomeCategoryComponent({ container }: { container: any }) {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

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
        <div
          style={{
            position: 'absolute',
            top: '80px',
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center', // 좌우 중앙 정렬
              position: 'sticky',
              top: '100px',
              zIndex: '1',
              marginBottom: '100px',
            }}
          >
            <div
              style={{
                border: 'none',
                borderRadius: '25px',
                backgroundColor: '#444444',
                padding: '5px',
                opacity: '0.9',
              }}
            >
              <div
                className="btn"
                style={{
                  border: 'none',
                  borderRadius: '20px',
                  backgroundColor: '#666666',
                  color: '#ffffff',
                  fontSize: '14px',
                  fontWeight: '500',
                  padding: '8px 15px',
                }}
              >
                농촌 체류형쉼터
              </div>
              <div
                className="btn"
                style={{
                  border: 'none',
                  borderRadius: '20px',
                  color: '#999999',
                  fontSize: '14px',
                  fontWeight: '500',
                  padding: '8px 15px',
                }}
              >
                일반 주택
              </div>
              <div
                className="btn"
                style={{
                  border: 'none',
                  borderRadius: '20px',
                  color: '#999999',
                  fontSize: '14px',
                  fontWeight: '500',
                  padding: '8px 15px',
                }}
              >
                농막
              </div>
            </div>
          </div>
        </div>

        <div
          id={'category1'}
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
            id={'category1BG'}
            src={'/2.jpg'}
            width={1600}
            height={1300}
            style={{
              objectFit: 'cover',
              width: '115%',
              aspectRatio: '32 / 17',
              minHeight: '600px',
              maxHeight: '1200px',
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

        <div
          id={'category2'}
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
            id={'category2BG'}
            src={'/6.png'}
            width={1600}
            height={1300}
            style={{
              objectFit: 'cover',
              width: '115%',
              aspectRatio: '32 / 17',
              minHeight: '600px',
              maxHeight: '1200px',
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
                fontSize: '35px',
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
                fontWeight: '600',
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

        <div
          id={'category3'}
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
            id={'category3BG'}
            src={'/6.png'}
            width={1600}
            height={1300}
            style={{
              objectFit: 'cover',
              width: '115%',
              aspectRatio: '32 / 17',
              minHeight: '600px',
              maxHeight: '1200px',
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
                fontSize: '35px',
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
                fontWeight: '600',
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
      </div>
    </>
  );
}
