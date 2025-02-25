'use client';

import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function AboutHistoryComponent({ container }: { container: any }) {
  useGSAP(
    () => {
      gsap.from('#aboutHistoryBG', {
        scale: 1.15,
        transformOrigin: 'center center',
        scrollTrigger: {
          trigger: '#aboutHistoryBG',
          start: 'top bottom',
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
        minHeight: 'calc(-61px + 100svh)',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '30px 0',
      }}
    >
      <Image
        id={'aboutHistoryBG'}
        src="/5.webp"
        width={1600}
        height={900}
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: '0',
        }}
        alt={'yard'}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '90%',
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))',
          zIndex: '1',
          border: 'none',
        }}
      ></div>
      <div
        style={{
          width: '90%',
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: '2',
        }}
      >
        <div
          style={{
            width: '100%',
            fontSize: '16px',
            fontWeight: '600',
            wordBreak: 'keep-all',
            color: '#ffffff',
          }}
        >
          History
          <div
            style={{
              fontSize: 'clamp(20px, 5vw, 32px)',
              wordBreak: 'keep-all',
              fontWeight: '700',
              marginTop: '20px',
            }}
          >
            움집은 모듈러 주택 전문 스타트업입니다.
          </div>
        </div>
        <div className="row" style={{ color: '#ffffff', marginTop: '30px' }}>
          <div className="col-md-6 col-12" style={{ fontSize: '15px', wordBreak: 'keep-all' }}>
            <div style={{ fontSize: '20px', margin: '30px 0' }}>2023</div>
            <div>
              <div style={{ padding: '5px' }}>5月 서울시 주최 숭실대학교 주관, Pre-스타트업 창업경진대회 우수상</div>
              <div style={{ padding: '5px' }}>6月 서울시 캠퍼스타운, 숭실대학교 챌린지스테이션 입주</div>
              <div style={{ padding: '5px' }}>9月 하나금융그룹 주최 언더독스 주관, 하나소셜유니버시티 수료</div>
              <div style={{ padding: '5px' }}>
                11月 국토교통부 주최 한국건설기술연구원 주관, 스마트건설 창업아이디어 공모전 장려상
              </div>
              <div style={{ padding: '5px' }}>12月 한국건설기술연구원 내 스마트건설지원센터 입주</div>
            </div>
          </div>
          <div className="col-md-6 col-12" style={{ fontSize: '15px', wordBreak: 'keep-all' }}>
            <div style={{ fontSize: '20px', margin: '30px 0' }}>2024</div>
            <div>
              <div style={{ padding: '5px' }}>1月 한국건설기술연구원 패밀리사 선정(애로기술해결기업)</div>
              <div style={{ padding: '5px' }}>
                3月 모듈러 기반 단독주택 전문 프롭테크 플랫폼 &apos;트러스&apos; 베타서비스 출시
              </div>
              <div style={{ padding: '5px' }}>5月 주식회사 트러스트리 법인 설립</div>
              <div style={{ padding: '5px' }}>7月 학생 창업유망팀 300 성장트랙 선정</div>
              <div style={{ padding: '5px' }}>9月 &apos;움집(woomzip)&apos; 정식서비스 출시</div>
              <div style={{ padding: '5px' }}>11月 스마트건설 EXPO 참가</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
