'use client';

import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Comp4() {
  return (
    <div
      style={{
        width: '100%',
        padding: '0 0 100px 0',
      }}
    >
      <div
        style={{
          width: '90%',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div className="row" style={{ marginTop: '100px' }}>
          <div className="col-md-6 col-12 order-md-2 order-1">
            <div style={{ width: '95%', aspectRatio: '1/1', overflow: 'hidden', borderRadius: '13px' }}>
              <Image
                src={'/13.webp'}
                width={600}
                height={600}
                style={{ objectFit: 'cover', width: '100%', aspectRatio: '1/1', borderRadius: '13px' }}
                alt={'background2'}
              />
            </div>
          </div>
          <div className="col-md-6 col-12 order-md-1 order-2">
            <div style={{ width: '100%', padding: '15px' }}>
              <div
                style={{
                  width: '100%',
                  fontSize: '16px',
                  fontWeight: '600',
                  wordBreak: 'keep-all',
                  color: '#555555',
                  marginTop: '20px',
                }}
              >
                움집은 어떤 팀인가요?
                <div
                  style={{
                    fontSize: '20px',
                    fontWeight: '500',
                    marginTop: '30px',
                    color: '#111111',
                  }}
                >
                  고객을 가장 잘 이해합니다.
                </div>
                <div
                  style={{
                    fontSize: '16px',
                    fontWeight: '500',
                    marginTop: '10px',
                    color: '#111111',
                  }}
                >
                  움집 팀은 서울시립대학교, 서울과학기술대학교, 숭실대학교 출신들로 이루어져 있습니다. 또한 모든
                  팀원들이 지방에서 자랐습니다.
                  <br />
                  우리는 우리가 자란 곳에서 전원생활을 하고 싶은 사람들입니다. 그렇기에 우리에게 필요한 서비스를
                  만들어갑니다.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: '100px' }}>
          <div className="col-md-6 col-12 order-md-1 order-1">
            <div style={{ width: '95%', aspectRatio: '1/1', overflow: 'hidden', borderRadius: '13px' }}>
              <Image
                src={'/14.webp'}
                width={600}
                height={600}
                style={{ objectFit: 'cover', width: '100%', aspectRatio: '1/1', borderRadius: '13px' }}
                alt={'background2'}
              />
            </div>
          </div>
          <div className="col-md-6 col-12 order-md-2 order-2">
            <div style={{ width: '100%', padding: '15px' }}>
              <div
                style={{
                  width: '100%',
                  fontSize: '16px',
                  fontWeight: '600',
                  wordBreak: 'keep-all',
                  color: '#555555',
                  marginTop: '20px',
                }}
              >
                왜 모듈러 주택 시장인가요?
                <div
                  style={{
                    fontSize: '20px',
                    fontWeight: '500',
                    marginTop: '30px',
                    color: '#111111',
                  }}
                >
                  건축이 아닌 제조입니다.
                </div>
                <div
                  style={{
                    fontSize: '16px',
                    fontWeight: '500',
                    marginTop: '10px',
                    color: '#111111',
                  }}
                >
                  나만의 주택을 짓는 일은 쉬운 일이 아닙니다. 비싼 비용, 계속 늘어나는 지출, 예상치 못한 공사 지연과
                  시공사에 대한 신뢰 문제까지 나 홀로 견뎌야만 합니다.
                  <br />
                  모듈러 주택은 이미 만들어진 디자인과 산정된 비용을 토대로 동일 품질을 동일한 가격으로 구매할 수
                  있습니다. 또한 공장에서 1~2개월이라는 제조 기간을 거쳐 내 토지로 배송이 가능합니다.
                  <br />
                  자연에서의 삶을 망설이게 하는 문제들을 해결하여 쉽고 빠르게 꿈을 이뤄보세요.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: '100px' }}>
          <div className="col-md-6 col-12 order-md-2 order-1">
            <div style={{ width: '95%', aspectRatio: '1/1', overflow: 'hidden', borderRadius: '13px' }}>
              <Image
                src={'/15.webp'}
                width={600}
                height={600}
                style={{ objectFit: 'cover', width: '100%', aspectRatio: '1/1', borderRadius: '13px' }}
                alt={'background2'}
              />
            </div>
          </div>
          <div className="col-md-6 col-12 order-md-1 order-2">
            <div style={{ width: '100%', padding: '15px' }}>
              <div
                style={{
                  width: '100%',
                  fontSize: '16px',
                  fontWeight: '600',
                  wordBreak: 'keep-all',
                  color: '#555555',
                  marginTop: '20px',
                }}
              >
                움집 팀이 만들고 싶은 세상
                <div
                  style={{
                    fontSize: '20px',
                    fontWeight: '500',
                    marginTop: '30px',
                    color: '#111111',
                  }}
                >
                  지속가능한 대한민국을 꿈꿉니다.
                </div>
                <div
                  style={{
                    fontSize: '16px',
                    fontWeight: '500',
                    marginTop: '10px',
                    color: '#111111',
                  }}
                >
                  우리나라는 심각한 고령화와 지방소멸 문제를 겪고 있습니다. 우리는 우리가 자란 마을이 지속되길 바랍니다.
                  <br />
                  우리가 제공하는 서비스를 통해 수도권에서의 삶을 포기하지 않더라도, 비수도권 지역에서의 삶을 쉽게
                  선택할 수 있었으면 합니다. 움집을 통해 지방소멸 문제 해결에 한 발자국 나아가길 바랍니다.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
