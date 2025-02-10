'use client';

import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function AboutTeamCompoment({ container }: { container: any }) {
  useGSAP(
    () => {
      gsap.from('#aboutExplanation1BG', {
        y: '20%',
        scrollTrigger: {
          trigger: '#aboutExplanation1BG',
          start: 'top bottom',
          end: 'bottom center',
          scrub: 0.5,
          pinSpacing: false,
        },
      });
      gsap.to('#aboutExplanation1BG', {
        opacity: 1,
        scrollTrigger: {
          trigger: '#aboutExplanation1BG',
          start: 'top bottom',
          end: 'bottom center',
          scrub: 0.5,
          pinSpacing: false,
        },
      });
      gsap.from('#aboutExplanation2BG', {
        y: '20%',
        scrollTrigger: {
          trigger: '#aboutExplanation2BG',
          start: 'top bottom',
          end: 'bottom center',
          scrub: 0.5,
          pinSpacing: false,
        },
      });
      gsap.to('#aboutExplanation2BG', {
        opacity: 1,
        scrollTrigger: {
          trigger: '#aboutExplanation2BG',
          start: 'top bottom',
          end: 'bottom center',
          scrub: 0.5,
          pinSpacing: false,
        },
      });
      gsap.from('#aboutExplanation3BG', {
        y: '20%',
        scrollTrigger: {
          trigger: '#aboutExplanation3BG',
          start: 'top bottom',
          end: 'bottom center',
          scrub: 0.5,
          pinSpacing: false,
        },
      });
      gsap.to('#aboutExplanation3BG', {
        opacity: 1,
        scrollTrigger: {
          trigger: '#aboutExplanation3BG',
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
        <div className="row" id={'aboutExplanation1BG'} style={{ marginTop: '100px', opacity: 0 }}>
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
                  누구보다 공감하는 우리의 문제
                </div>
                <div
                  style={{
                    fontSize: '16px',
                    fontWeight: '500',
                    marginTop: '10px',
                    color: '#111111',
                  }}
                >
                  움집의 창립 멤버들은 모두 지방에서 자라왔습니다. 수도권 집중화로 인해 고향인 지방이 점차 소멸해가는
                  모습을 보며, 우리는 그 소중한 기억들이 깃든 지방을 되살려야겠다는 사명감을 갖게 되었습니다.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row" id={'aboutExplanation2BG'} style={{ marginTop: '100px', opacity: 0 }}>
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
                  쉽고 빠른 시작
                </div>
                <div
                  style={{
                    fontSize: '16px',
                    fontWeight: '500',
                    marginTop: '10px',
                    color: '#111111',
                  }}
                >
                  그 시작은 전원생활을 꿈꾸는 이들을 위한 ‘이동식 모듈러 주택’에서 찾았습니다. 자연 속에서의 삶을
                  경험하고자 할 때, 그 여정이 불편하고 번거로운 절차로 가득하지 않기를 바랐습니다. 집을 짓는 과정이
                  고통스럽기보다는 즐거운 여정이 되기를, 그 꿈을 움집이 현실로 만들어주기를 원했습니다.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row" id={'aboutExplanation3BG'} style={{ marginTop: '100px', opacity: 0 }}>
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
                움집 팀이 만들고 싶은 세상은?
                <div
                  style={{
                    fontSize: '20px',
                    fontWeight: '500',
                    marginTop: '30px',
                    color: '#111111',
                  }}
                >
                  새로운 자연 속 삶
                </div>
                <div
                  style={{
                    fontSize: '16px',
                    fontWeight: '500',
                    marginTop: '10px',
                    color: '#111111',
                  }}
                >
                  ‘움집’은 복잡하고 어려운 건축 과정을 간소화하여, 집을 짓는 모든 순간을 설렘과 기대가 가득한 경험으로
                  바꿔줍니다. 우리는 고객이 집을 짓는 과정을 포기하지 않도록 돕고, 지방에서 새로운 삶을 시작할 수 있는
                  기회를 제공합니다.
                  <br />더 많은 사람들이 전원 속의 삶을 선택하고, 지방에 새로운 활력이 불어오기를 바랍니다. 그렇게
                  된다면, 우리가 걱정하는 지방소멸의 문제도 서서히 해결될 것입니다. 이는 고객들에게 더 나은 삶을
                  제공하는 것뿐만 아니라, 우리나라의 미래를 위해 움집이 꿈꾸는 비전입니다.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
