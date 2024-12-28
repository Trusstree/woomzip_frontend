import { PartnerList, WorkerList } from '@/app/(about)/about/_data/Data';
import HistoryCard from '@/app/(about)/about/_components/HistoryCard';
import PartnerCard from '@/app/(about)/about/_components/PartnerCard';
import WorkerCard from '@/app/(about)/about/_components/WorkerCard';
import Inquiry from '@/components/Inquiry';
import Image from 'next/image';

export default function About() {
  return (
    <div>
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
          src="/4.png"
          width={1600}
          height={1200}
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
            top: 0,
            left: 0,
            width: '100%',
            aspectRatio: '8 / 1',
            minHeight: '200px',
            maxHeight: '500px',
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))',
          }}
        ></div>
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            aspectRatio: '16 / 1',
            minHeight: '50px',
            maxHeight: '200px',
            background: 'linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))',
          }}
        ></div>
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
          }}
        >
          ABOUT US
          <div
            style={{ fontSize: 'clamp(20px, 5vw, 32px)', wordBreak: 'keep-all', fontWeight: '700', marginTop: '30px' }}
          >
            움집은 누구나 쉽게 자연 속 삶을
            <br />
            선택할 수 있도록 돕습니다.
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
            maxWidth: '90%',
            fontSize: 'clamp(20px, 5vw, 32px)',
            wordBreak: 'keep-all',
            fontWeight: '700',
            marginTop: '100px',
            lineHeight: 'clamp(45px, 4vw, 60px)',
          }}
        >
          "내 집을 짓는다" 라는 것은,
          <br />
          다양한 의미를 가지겠지만 공통적으로 행복하기 위함일 것입니다.
          <br />
          그런데 왜 짓는 과정은 행복하지 못할까요?
          <br />
          움집은 꿈을 이뤄가는 과정이 제일 행복해야 한다는 생각에서 출발했습니다.
          <br />
          <br />
          움집은 10년은 늙는다는 건축과정을 행복하게 만드는 서비스입니다.
        </div>
      </div>

      <div
        style={{
          width: '100%',
          padding: '100px 0',
          overflow: 'hidden',
          position: 'relative',
          backgroundColor: 'black',
          minHeight: '800px',
        }}
      >
        <Image
          src="/5.jpg"
          width={1600}
          height={1200}
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
                marginTop: '30px',
              }}
            >
              움집은 23년부터 시작된 모듈러 주택 전문 스타트업입니다.
            </div>
          </div>
          <div className="row" style={{ color: '#ffffff', marginTop: '50px' }}>
            <div className="col-md-6 col-12" style={{ fontSize: '15px', wordBreak: 'keep-all' }}>
              <div style={{ fontSize: '20px', margin: '50px 0 20px 0' }}>2023</div>
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
              <div style={{ fontSize: '20px', margin: '50px 0 20px 0' }}>2024</div>
              <div>
                <div style={{ padding: '5px' }}>1月 한국건설기술연구원 패밀리사 선정(애로기술해결기업)</div>
                <div style={{ padding: '5px' }}>
                  3月 모듈러 기반 단독주택 전문 프롭테크 플랫폼 '트러스' 베타서비스 출시
                </div>
                <div style={{ padding: '5px' }}>5月 주식회사 트러스트리 법인 설립</div>
                <div style={{ padding: '5px' }}>7月 학생 창업유망팀 300 성장트랙 선정</div>
                <div style={{ padding: '5px' }}>9月 '움집(woomzip)' 정식서비스 출시</div>
                <div style={{ padding: '5px' }}>11月 스마트건설 EXPO 참가</div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                  src={'/13.jpg'}
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
                  src={'/14.jpeg'}
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
                  src={'/15.jpg'}
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
                    우리나라는 심각한 고령화와 지방소멸 문제를 겪고 있습니다. 우리는 우리가 자란 마을이 지속되길
                    바랍니다.
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

      <div style={{ position: 'relative' }}>
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
    </div>
  );
}
