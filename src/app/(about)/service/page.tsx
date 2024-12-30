'use client';

import Image from 'next/image';
import Inquiry from '@/components/Inquiry';
import { useRef } from 'react';

export default function Service() {
  const inquiryRef = useRef(null);
  const inquiryScrollIntoView = () => inquiryRef.current.scrollIntoView();

  return (
    <>
      <div
        style={{
          width: '100%',
          aspectRatio: '32 / 17',
          minHeight: '600px',
          maxHeight: '1200px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Image
          src="/8.webp"
          width={1600}
          height={900}
          style={{
            objectFit: 'cover',
            width: '100%',
            aspectRatio: '32 / 17',
            minHeight: '600px',
            maxHeight: '1200px',
          }}
          alt={'company'}
        />
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: 0,
            width: '100%',
            fontSize: '16px',
            fontWeight: '600',
            wordBreak: 'keep-all',
            textAlign: 'center',
            color: '#ffffff',
          }}
        >
          움집 서비스 소개
          <div
            style={{ fontSize: 'clamp(20px, 5vw, 32px)', wordBreak: 'keep-all', fontWeight: '700', marginTop: '30px' }}
          >
            계획부터 입주까지 움집이 당신과 함께합니다.
          </div>
        </div>
        <div style={{ width: '100%', display: 'flex', position: 'absolute', bottom: '10%', left: '0' }}>
          <div
            className="btn"
            style={{
              border: 'none',
              borderRadius: '20px',
              backgroundColor: '#4067F8',
              color: '#ffffff',
              fontSize: '14px',
              fontWeight: '500',
              padding: '10px 70px',
              margin: '0 auto',
            }}
            onClick={inquiryScrollIntoView}
          >
            문의하기
          </div>
        </div>
      </div>

      <div
        style={{
          width: '100%',
          aspectRatio: '32 / 17',
          minHeight: '600px',
          maxHeight: '1200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: 'auto',
            fontSize: 'clamp(20px, 5vw, 32px)',
            wordBreak: 'keep-all',
            fontWeight: '700',
            marginTop: '100px',
            maxWidth: '90%',
            textAlign: 'center',
          }}
        >
          움집에서는 누구나 쉽고 빠르게 자연 속 삶을 시작할 수 있습니다.
        </div>
      </div>

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
            <div className="col-md-4 col-12">
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
            <div className="col-md-4 col-12">
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
            <div className="col-md-4 col-12">
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
                <div style={{ width: '50%', zIndex: '3', position: 'relative' }}>
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
                <div style={{ width: '50%', zIndex: '3', position: 'relative' }}>
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

      <div style={{ position: 'relative' }} ref={inquiryRef}>
        <Image
          src={'/background2.webp'}
          width={1600}
          height={985}
          style={{ objectFit: 'cover', width: '100%', height: '800px', borderRadius: '15px 15px 0 0' }}
          alt={'background2'}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '600px',
            borderRadius: '15px',
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))',
          }}
        ></div>

        <div
          style={{
            padding: '40px 0',
            width: '100%',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: '10%',
            left: '0',
          }}
        >
          <div
            style={{
              width: '100%',
              fontSize: '16px',
              fontWeight: '600',
              wordBreak: 'keep-all',
              textAlign: 'center',
            }}
          >
            Contact Us
            <div style={{ fontSize: '32px', wordBreak: 'keep-all', fontWeight: '700', margin: '30px 0' }}>
              무엇이든 물어보세요.
            </div>
          </div>

          <Inquiry />
        </div>
      </div>
    </>
  );
}
