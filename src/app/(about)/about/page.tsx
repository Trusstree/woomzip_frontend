import Badge from '@/app/(about)/about/_components/Badge';
import { PartnerList, WorkerList } from '@/app/(about)/about/_data/Data';
import HistoryCard from '@/app/(about)/about/_components/HistoryCard';
import PartnerCard from '@/app/(about)/about/_components/PartnerCard';
import WorkerCard from '@/app/(about)/about/_components/WorkerCard';

export default function About() {
  return (
    <div>
      <div style={{ width: '100%', height: '700px', position: 'relative' }}>
        <img src="/111.wepb" width={'100%'} height={'700px'} style={{ objectFit: 'cover' }} />
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '10%',
            width: '90%',
            color: 'white',
            fontSize: '4vw',
            fontWeight: '500',
            wordBreak: 'keep-all',
          }}
        >
          누구나 자연과 함께할 수 있도록,
          <br />
          단독주택 건축시장 디지털 전환을 이끕니다
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
            VISION
          </div>
        </div>
        <div
          style={{
            textAlign: 'center',
            fontSize: '23px',
            fontWeight: '600',
            marginTop: '20px',
            wordBreak: 'keep-all',
            width: '90%',
            marginLeft: '5%',
          }}
        >
          <div>
            지방소멸 문제 해결에 한 발자국 나아갈 수 있도록,
            <div style={{ color: 'gray', fontWeight: '500' }}>건축시장을 혁신하여 귀촌 결정의 허들을 낮추겠습니다.</div>
          </div>
          <div style={{ marginTop: '30px' }}>
            대한민국에 아름다운 집들이 많아지도록,
            <div style={{ color: 'gray', fontWeight: '500' }}>
              기술을 통해 짓는 과정마저 아름다운 집들을 만들겠습니다.
            </div>
          </div>
        </div>
      </div>

      <div style={{ width: '100%', padding: '130px 0' }}>
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
      </div>

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
              fontSize: '4vw',
              fontWeight: '600',
            }}
          >
            History
          </div>
          <div
            style={{
              fontSize: '25px',
              fontWeight: '500',
            }}
          >
            우리가 지나온 길입니다.
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

      <div style={{ width: '100%', padding: '130px 0' }}>
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
              <img
                src="https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/map.png"
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
