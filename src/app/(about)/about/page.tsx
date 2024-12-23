import { PartnerList, WorkerList } from '@/app/(about)/about/_data/Data';
import HistoryCard from '@/app/(about)/about/_components/HistoryCard';
import PartnerCard from '@/app/(about)/about/_components/PartnerCard';
import WorkerCard from '@/app/(about)/about/_components/WorkerCard';
import Inquiry from '@/components/Inquiry';
import Image from 'next/image';

export default function About() {
  return (
    <div>
      <div style={{ width: '100%', backgroundColor: 'black', height: '61px' }}></div>
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
            fontSize: '14px',
            fontWeight: '600',
            wordBreak: 'keep-all',
            textAlign: 'center',
          }}
        >
          ABOUT US
          <div style={{ fontSize: '32px', wordBreak: 'keep-all', fontWeight: '700', marginTop: '30px' }}>
            <span style={{ fontSize: '34px' }}>움집</span>은 누구나 쉽게 자연 속 삶을
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
            fontSize: '32px',
            wordBreak: 'keep-all',
            fontWeight: '700',
            marginTop: '100px',
          }}
        >
          누군가에는 아지트가 필요하고,
          <br />
          누군가에게는 숨 쉴 공간이자,
          <br />
          또 누군가에게는 치유의 공간일 것이고,
          <br />
          어떤 이에게는 마지막 공간일 수도 있습니다.
          <br />
          <br />
          움집에서는 모든 사람들이 자신의 삶을 찾을 수 있길 바랍니다.
          <br />
          그리고 그 여정이 행복하길 바랍니다.
        </div>
      </div>

      <div
        style={{
          width: '100%',
          aspectRatio: '32 / 17',
          minHeight: '600px',
          maxHeight: '1200px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Image
          src="/5.jpg"
          width={1600}
          height={1200}
          style={{
            objectFit: 'cover',
            width: '100%',
            aspectRatio: '32 / 17',
            minHeight: '600px',
            maxHeight: '1200px',
          }}
          alt={'yard'}
        />
        <div
          style={{
            position: 'absolute',
            top: '30%',
            left: 0,
            width: '100%',
            fontSize: '14px',
            fontWeight: '600',
            wordBreak: 'keep-all',
            textAlign: 'center',
            color: '#ffffff',
          }}
        >
          Our Vision
          <div style={{ fontSize: '32px', wordBreak: 'keep-all', fontWeight: '700', marginTop: '30px' }}>
            움집은 누구나 쉽게 자연 속 삶을
            <br />
            선택할 수 있도록 돕습니다.
          </div>
        </div>
      </div>

      {/* <div style={{ width: '100%', padding: '130px 0' }}>
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
              fontSize: '4vw',
              fontWeight: '600',
            }}
          >
            TEAM
          </div>
          <div
            style={{
              fontSize: '25px',
              fontWeight: '500',
              marginBottom: '30px',
            }}
          >
            믿을 수 있는 파트너
          </div>
          <div className="row g-1">
            {WorkerList.map((e, i) => (
              <div key={i} className="col-md-6 col-12 row">
                <WorkerCard
                  name={e.name}
                  dept={e.dept}
                  position={e.position}
                  src={e.src}
                  introduce={e.introduce}
                  email={e.email}
                />
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <div
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
              fontSize: '14px',
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
      </div>

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
              fontSize: '14px',
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

      {/* <div style={{ width: '100%', padding: '130px 0' }}>
        <div
          style={{
            width: '90%',
            maxWidth: '1300px',
            margin: '0 auto',
            marginBottom: '30px',
          }}
        >
          <div
            style={{
              width: '100%',
              fontSize: '4vw',
              fontWeight: '600',
            }}
          >
            PARTNER
          </div>
          <div
            style={{
              fontSize: '25px',
              fontWeight: '500',
            }}
          >
            다양한 기관, 기업들과 함께 합니다.
          </div>
        </div>

        <div
          className={`row flex-nowrap overflow-auto`}
          style={{
            width: '103%',
            marginLeft: '-3%',
            padding: '0',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {PartnerList.map((e, i) => (
            <PartnerCard key={i} src={e.img} title={e.title} />
          ))}
        </div>
      </div>

      <div
        style={{
          width: '100%',
          backgroundColor: '#FAFBFC',
          padding: '130px 0',
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
              fontSize: '4vw',
              fontWeight: '600',
            }}
          >
            CONTACK
          </div>
          <div className="row g-1">
            <div className="col-md-6 col-12">
              <div className="col-md-8 col-12">
                <div
                  style={{
                    fontSize: '25px',
                    fontWeight: '500',
                  }}
                >
                  언제, 어디서든 연락을 기다립니다.
                </div>
                <div
                  style={{
                    padding: '50px 0',
                    fontSize: '16px',
                    fontWeight: '400',
                    wordBreak: 'keep-all',
                  }}
                >
                  전화번호 : 0507-1369-6158
                  <br />
                  이메일 : truss369@naver.com
                  <br />
                  주소 : 서울특별시 동작구 상도로 55길 8, 304호(상도동, 숭실대학교 챌린지스테이션)
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 row">
              <Image
                width={500}
                height={400}
                alt={'map'}
                src="https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/map.png"
                style={{
                  width: '100%',
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
              />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
