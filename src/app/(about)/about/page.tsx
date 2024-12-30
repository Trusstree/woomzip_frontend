import Image from 'next/image';
import Comp1 from '@/app/(about)/about/_components/Comp1';
import Comp2 from '@/app/(about)/about/_components/Comp2';
import Comp3 from '@/app/(about)/about/_components/Comp3';
import Comp4 from '@/app/(about)/about/_components/Comp4';
import InquiryComponent from '@/app/(about)/about/_components/InquiryComponent';

export default function About() {
  return (
    <>
      <Comp1 />
      <Comp2 />
      <Comp3 />
      <Comp4 />
      <InquiryComponent />
      {/* <div
        style={{
          width: '100%',
          padding: '130px 0',
          backgroundColor: '#FAFBFC',
        }}
      >
        <div
          style={{
            width: '90%',
            maxWidth: '1300px',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              width: '100%',
              fontSize: '16px',
              fontWeight: '600',
              wordBreak: 'keep-all',
            }}
          >
            History
            <div style={{ fontSize: '32px', wordBreak: 'keep-all', fontWeight: '700', marginTop: '30px' }}>
              움집은 지속가능한 삶을 만들기 위해
              <br />
              최선을 다합니다.
            </div>
          </div>
          <div>
            <HistoryCard year={2023}>
              <div>6월 / 서울시 주최 숭실대학교 주관, Pre-스타트업 창업경진대회 우수상</div>
              <div>7월 / 서울시 캠퍼스타운, 숭실대학교 챌린지스테이션 입주</div>
              <div>9월 / 하나금융그룹 주최 언더독스 주관, 하나소셜유니버시티 수료</div>
              <div>11월 / 국토교통부 주최 한국건설기술연구원 주관, 스마트건설 창업아이디어 공모전 장려상</div>
              <div>12월 / 한국건설기술연구원 내 스마트건설지원센터 입주</div>
            </HistoryCard>

            <HistoryCard year={2024}>
              <div>1월 / 한국건설기술연구원 패밀리사 선정(애로기술해결기업)</div>
              <div>3월 / 모듈러 기반 단독주택 전문 프롭테크 플랫폼 '트러스' 베타서비스 출시</div>
              <div>5월 / 주식회사 트러스트리 법인 설립</div>
              <div>6월 / 서비스명 '움집(woomzip)'으로 변경</div>
              <div>7월 / 학생 창업유망팀 300 성장트랙 선정</div>
              <div>8월 / '움집(woomzip)' 정식서비스 출시</div>
            </HistoryCard>
          </div>
        </div>
      </div> */}
    </>
  );
}
