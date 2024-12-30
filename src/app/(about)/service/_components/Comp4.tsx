'use client';

import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Comp4({ container }: { container: any }) {
  return (
    <div
      style={{
        width: '100%',
        padding: '120px 0',
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
        움집은 무엇이 다른가요?
      </div>
      <div
        style={{
          width: '95%',
          margin: '0 auto',
          maxWidth: '1200px',
        }}
      >
        <div className="row g-0" style={{ marginTop: '80px' }}>
          <div className="col-12">
            <div
              style={{
                width: '95%',
                height: '500px',
                borderRadius: '15px',
                padding: '20px',
                wordBreak: 'keep-all',
                backgroundColor: '#ffffff',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // 추가된 그림자
                margin: '20px auto 0 auto',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ width: '95%', zIndex: '3', position: 'relative' }}>
                <div className="col-md-6 col-12">
                  <div
                    style={{
                      fontSize: '23px',
                      color: '#ffffff',
                      width: '100%',
                      fontWeight: '700',
                      margin: '30px 20px',
                    }}
                  >
                    다양한 안심 서비스
                  </div>
                  <div
                    style={{
                      fontSize: '17px',
                      color: '#ffffff',
                      width: '100%',
                      fontWeight: '450',
                      margin: '20px',
                    }}
                  >
                    안심 계약부터, 안심 지불을 통해 내 재산을 지키세요!
                    <br />
                    이제는 걱정할 필요 없습니다.
                    <br />
                    세분화된 지불 과정과 제 3자 계약을 통해 더 이상의 불안한 상황은 끝! 내 집짓기는 즐거워야죠!
                  </div>
                </div>
              </div>
              <div
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '40%',
                  height: '100%',
                  backgroundColor: 'black',
                  zIndex: '2',
                }}
              ></div>
              <div
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '40%',
                  width: '20%',
                  height: '100%',
                  background: 'linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
                  zIndex: '2',
                }}
              />
              <Image
                src={'/background2.webp'}
                width={600}
                height={600}
                style={{
                  position: 'absolute',
                  top: '0',
                  right: '0',
                  objectFit: 'cover',
                  width: '60%',
                  height: '100%',
                }}
                alt={'background2'}
              />
            </div>
          </div>

          <div className="col-12">
            <div
              style={{
                width: '95%',
                height: '500px',
                borderRadius: '15px',
                padding: '20px',
                wordBreak: 'keep-all',
                backgroundColor: '#ffffff',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // 추가된 그림자
                margin: '60px auto 0 auto',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ width: '95%', zIndex: '3', position: 'relative' }}>
                <div className="col-md-6 col-12">
                  <div
                    style={{
                      fontSize: '23px',
                      color: '#ffffff',
                      width: '100%',
                      fontWeight: '700',
                      margin: '30px 20px',
                    }}
                  >
                    다양한 안심 서비스
                  </div>
                  <div
                    style={{
                      fontSize: '17px',
                      color: '#ffffff',
                      width: '100%',
                      fontWeight: '450',
                      margin: '20px',
                    }}
                  >
                    안심 계약부터, 안심 지불을 통해 내 재산을 지키세요!
                    <br />
                    이제는 걱정할 필요 없습니다.
                    <br />
                    세분화된 지불 과정과 제 3자 계약을 통해 더 이상의 불안한 상황은 끝! 내 집짓기는 즐거워야죠!
                  </div>
                </div>
              </div>
              <div
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#555555',
                  zIndex: '2',
                  opacity: '0.5',
                }}
              ></div>
              <Image
                src={'/background2.webp'}
                width={1500}
                height={600}
                style={{
                  position: 'absolute',
                  top: '0',
                  right: '0',
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                }}
                alt={'background2'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
