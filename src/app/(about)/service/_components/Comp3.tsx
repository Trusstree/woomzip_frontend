'use client';

import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Comp3({ container }: { container: any }) {
  useGSAP(
    () => {
      gsap.from('#serviceCard1', {
        y: '20%',
        scrollTrigger: {
          trigger: '#serviceCard1',
          start: 'top bottom',
          end: 'bottom center',
          scrub: 0.5,
          pinSpacing: false,
        },
      });
      gsap.to('#serviceCard1', {
        opacity: 1,
        scrollTrigger: {
          trigger: '#serviceCard1',
          start: 'top bottom',
          end: 'bottom center',
          scrub: 0.5,
          pinSpacing: false,
        },
      });
      gsap.from('#serviceCard2', {
        y: '20%',
        scrollTrigger: {
          trigger: '#serviceCard2',
          start: 'top bottom',
          end: 'bottom center',
          scrub: 0.5,
          pinSpacing: false,
        },
      });
      gsap.to('#serviceCard2', {
        opacity: 1,
        scrollTrigger: {
          trigger: '#serviceCard2',
          start: 'top bottom',
          end: 'bottom center',
          scrub: 0.5,
          pinSpacing: false,
        },
      });
      gsap.from('#serviceCard3', {
        y: '20%',
        scrollTrigger: {
          trigger: '#serviceCard3',
          start: 'top bottom',
          end: 'bottom center',
          scrub: 0.5,
          pinSpacing: false,
        },
      });
      gsap.to('#serviceCard3', {
        opacity: 1,
        scrollTrigger: {
          trigger: '#serviceCard3',
          start: 'top bottom',
          end: 'bottom center',
          scrub: 0.5,
          pinSpacing: false,
        },
      });
    },
    { scope: container.current },
  );

  return (
    <div
      style={{
        width: '100%',
        padding: '120px 0',
        backgroundColor: '#F9F9FA',
      }}
    >
      <div
        style={{
          width: '100%',
          fontSize: 'clamp(20px, 5vw, 32px)',
          wordBreak: 'keep-all',
          fontWeight: '700',
          textAlign: 'center',
        }}
      >
        어려움이 아닌, 기대만 가득한 여정
      </div>
      <div
        style={{
          width: '90%',
          margin: '0 auto',
          maxWidth: '1200px',
        }}
      >
        <div className="row g-0" style={{ marginTop: '80px' }}>
          <div id={'serviceCard1'} className="col-md-4 col-12" style={{ opacity: 0 }}>
            <div
              style={{
                width: '90%',
                height: '550px',
                borderRadius: '15px',
                padding: '20px',
                wordBreak: 'keep-all',
                backgroundColor: '#ffffff',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // 추가된 그림자
                margin: '20px auto 0 auto',
              }}
            >
              <div style={{ fontSize: '15px', width: '100%', textAlign: 'center', fontWeight: '700' }}>1단계</div>
              <div
                style={{ fontSize: '20px', width: '100%', textAlign: 'center', fontWeight: '700', margin: '20px 0' }}
              >
                나를 위한 다양한 제품들
              </div>
              <div
                style={{
                  fontSize: '15px',
                  width: '100%',
                  textAlign: 'center',
                  fontWeight: '500',
                  color: '#555555',
                  marginBottom: '20px',
                  height: '130px',
                }}
              >
                다양한 제품들은 한 눈에 비교해보세요!
                <br />
                전국에서 가장 많은 제품들을 모아두었어요.
                <br />더 이상 발품 팔지 말고 움집에서 내 조건에 맞는 제품을 찾고 비교해보세요!
              </div>
              <div
                style={{
                  width: '100%',
                  aspectRatio: '5/4',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  margin: '0 auto',
                }}
              >
                <Image
                  src={'/10.webp'}
                  width={400}
                  height={260}
                  style={{
                    objectFit: 'contain',
                    width: '100%',
                    aspectRatio: '5/4',
                    borderRadius: '10px',
                  }}
                  alt={'background2'}
                />
              </div>
            </div>
          </div>
          <div id={'serviceCard2'} className="col-md-4 col-12" style={{ opacity: 0 }}>
            <div
              style={{
                width: '90%',
                height: '550px',
                borderRadius: '15px',
                padding: '20px',
                wordBreak: 'keep-all',
                backgroundColor: '#ffffff',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                margin: '20px auto 0 auto',
              }}
            >
              <div style={{ fontSize: '15px', width: '100%', textAlign: 'center', fontWeight: '700' }}>2단계</div>
              <div
                style={{ fontSize: '20px', width: '100%', textAlign: 'center', fontWeight: '700', margin: '20px 0' }}
              >
                문의와 계약도 어렵지 않게
              </div>
              <div
                style={{
                  fontSize: '15px',
                  width: '100%',
                  textAlign: 'center',
                  fontWeight: '500',
                  color: '#555555',
                  marginBottom: '20px',
                  height: '130px',
                }}
              >
                내 조건에 따라 쉽게 문의하고, 가장 빠르게 견적을 받아보세요.
                <br />더 이상 불안해하지 말고 건축주 우선의 움집 안심표준계약을 통해 모든 권리를 보장 받으세요!
              </div>
              <div
                style={{
                  width: '100%',
                  aspectRatio: '5/4',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  margin: '0 auto',
                }}
              >
                <Image
                  src={'/11.webp'}
                  width={400}
                  height={260}
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    aspectRatio: '5/4',
                    borderRadius: '10px',
                  }}
                  alt={'background2'}
                />
              </div>
            </div>
          </div>
          <div id={'serviceCard3'} className="col-md-4 col-12" style={{ opacity: 0 }}>
            <div
              style={{
                width: '90%',
                height: '550px',
                borderRadius: '15px',
                padding: '20px',
                wordBreak: 'keep-all',
                backgroundColor: '#ffffff',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                margin: '20px auto 0 auto',
              }}
            >
              <div style={{ fontSize: '15px', width: '100%', textAlign: 'center', fontWeight: '700' }}>3단계</div>
              <div
                style={{ fontSize: '20px', width: '100%', textAlign: 'center', fontWeight: '700', margin: '20px 0' }}
              >
                지불과 AS까지 안전하게
              </div>
              <div
                style={{
                  fontSize: '15px',
                  width: '100%',
                  textAlign: 'center',
                  fontWeight: '500',
                  color: '#555555',
                  marginBottom: '20px',
                  height: '130px',
                }}
              >
                안심 계약부터, 안심 지불을 통해 내 재산을 지키세요!
                <br />
                이제는 걱정할 필요 없습니다.
                <br />
                세분화된 지불 과정과 제 3자 계약을 통해 더 이상의 불안한 상황은 끝! 내 집짓기는 즐거워야죠!
              </div>
              <div
                style={{
                  width: '100%',
                  aspectRatio: '5/4',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  margin: '0 auto',
                }}
              >
                <Image
                  src={'/12.webp'}
                  width={300}
                  height={260}
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    aspectRatio: '5/4',
                    borderRadius: '10px',
                  }}
                  alt={'background2'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
