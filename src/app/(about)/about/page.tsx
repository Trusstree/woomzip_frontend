import Badge from "@/app/about/_components/badge";
import HistoryCard from "@/app/about/_components/HistoryCard";
import PartnerCard from "@/app/about/_components/PartnerCard";
import WorkerCard from "@/app/about/_components/WorkerCard";

const WorkerList = [
  {
    src: "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/jun.jpg",
    name: "양준우",
    dept: "대표",
    position: [
      {
        name: "경영",
        backgroundColor: "#CCD6FF",
        color: "#314FC0",
      },
      {
        name: "Front-End(sub)",
        backgroundColor: "#E2FFCC",
        color: "#8AC031",
      },
    ],
    introduce: '"항상 진실된 사람이 되겠습니다."',
    email: "zxcomkt@gmail.com",
  },
  {
    src: "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/jun.jpg",
    name: "박세홍",
    dept: "팀장",
    position: [
      {
        name: "마케팅",
        backgroundColor: "#FFCCCC",
        color: "#C03142",
      },
      {
        name: "DataBase(sub)",
        backgroundColor: "#E2FFCC",
        color: "#8AC031",
      },
    ],
    introduce: '"항상 진실된 사람이 되겠습니다."',
    email: "zxcomkt@gmail.com",
  },
  {
    src: "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/jun.jpg",
    name: "박민규",
    dept: "개발자",
    position: [
      {
        name: "Front-End",
        backgroundColor: "#E2FFCC",
        color: "#8AC031",
      },
      {
        name: "Infra",
        backgroundColor: "#E2FFCC",
        color: "#8AC031",
      },
    ],
    introduce: '"항상 진실된 사람이 되겠습니다."',
    email: "zxcomkt@gmail.com",
  },
  {
    src: "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/jun.jpg",
    name: "이주승",
    dept: "개발자",
    position: [
      {
        name: "Back-End",
        backgroundColor: "#E2FFCC",
        color: "#8AC031",
      },
      {
        name: "DataBase",
        backgroundColor: "#E2FFCC",
        color: "#8AC031",
      },
    ],
    introduce: '"항상 진실된 사람이 되겠습니다."',
    email: "zxcomkt@gmail.com",
  },
];

const PartnerList = [
  {
    title: "숭실대학교",
    img: "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/jun.jpg",
  },
  {
    title: "서울시 캠퍼스타운",
    img: "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/jun.jpg",
  },
  {
    title: "한국건설기술연구원",
    img: "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/jun.jpg",
  },
  {
    title: "모두가하우징",
    img: "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/jun.jpg",
  },
  {
    title: "디자인아담",
    img: "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/jun.jpg",
  },
  {
    title: "탑디자인",
    img: "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/jun.jpg",
  },
  {
    title: "명성하우징",
    img: "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/jun.jpg",
  },
  {
    title: "정우하우징",
    img: "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/jun.jpg",
  },
];

export default function About() {
  return (
    <div>
      <div style={{ width: "100%", height: "800px", position: "relative" }}>
        <img
          src="https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/team2.jpg"
          width={"100%"}
          height={"800px"}
          style={{ objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            top: "60%",
            left: 0,
            width: "100%",
            color: "white",
            fontSize: "3vw",
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          누구나 자연과 함께할 수 있도록,
          <br />
          우리가 주택 건축시장 디지털 전환을 이끕니다
        </div>
      </div>

      <div
        style={{
          width: "100%",
          backgroundColor: "#FAFBFC",
          padding: "130px 0",
        }}
      >
        <div
          style={{
            width: "90%",
            maxWidth: "1300px",
            margin: "0 auto",
          }}
        >
          <Badge>Vision</Badge>
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: "25px",
            fontWeight: "600",
          }}
        >
          <div>
            우리를 통해 지방 인구 소멸 문제 해결에 한 발자국 나아갈 수 있도록,
            <div style={{ color: "gray", fontWeight: "500" }}>건축시장을 혁신하여 귀촌 결정의 허들을 낮추겠습니다.</div>
          </div>
          <div style={{ marginTop: "30px" }}>
            우리를 통해 대한민국에 아름다운 집들이 많아지도록,
            <div style={{ color: "gray", fontWeight: "500" }}>
              기술을 통해 짓는 과정마저 아름다운 행복을 담은 집들을 만들겠습니다.
            </div>
          </div>
        </div>
      </div>

      <div style={{ width: "100%", padding: "130px 0" }}>
        <div
          style={{
            width: "90%",
            maxWidth: "1300px",
            margin: "0 auto",
          }}
        >
          <Badge>Team</Badge>
          <div
            style={{
              fontSize: "25px",
              fontWeight: "500",
            }}
          >
            우리는 최고이자, 최선을 다합니다.
          </div>
          <div className="row g-1">
            {WorkerList.map((e, i) => (
              <div key={i} className="col-6 row g-3" style={{ minWidth: "350px" }}>
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
          width: "100%",
          padding: "130px 0",
          backgroundColor: "#FAFBFC",
        }}
      >
        <div
          style={{
            width: "90%",
            maxWidth: "1300px",
            margin: "0 auto",
          }}
        >
          <Badge>History</Badge>
          <div
            style={{
              fontSize: "25px",
              fontWeight: "500",
            }}
          >
            우리가 지나온 길입니다.
          </div>
          <div className="row">
            <HistoryCard year={2023}>
              <div>6월 / 서울시 주최 숭실대학교 주관, Pre-스타트업 창업경진대회 우수상</div>
              <div>7월 / 서울시 캠퍼스타운, 숭실대학교 챌린지스테이션 입주</div>
              <div>8월 / 개인사업자 트러스 설립</div>
              <div>9월 / 하나금융그룹 주최 언더독스 주관, 하나소셜유니버시티 수료</div>
              <div>11월 / 국토교통부 주최 한국건설기술연구원 주관, 스마트건설 창업아이디어 공모전 장려상</div>
              <div>12월 / 한국건설기술연구원 내 스마트건설지원센터 입주</div>
            </HistoryCard>

            <HistoryCard year={2024}>
              <div>1월 / 한국건설기술연구원 패밀리사 선정(애로기술해결기업)</div>
              <div>3월 / 모듈러 기반 단독주택 전문 프롭테크 플랫폼 '트러스' 베타서비스 출시</div>
              <div>5월 / 주식회사 트러스트리 법인 설립</div>
              <div>6월 / 플랫폼명 '움집(Woomzip)'으로 변경</div>
              <div>7월 / 모듈러 기반 단독주택 전문 프롭테크 플랫폼 '움집' 정식 출시</div>
            </HistoryCard>
          </div>
        </div>
      </div>

      <div style={{ width: "100%", padding: "130px 0" }}>
        <div
          style={{
            width: "90%",
            maxWidth: "1300px",
            margin: "0 auto",
            marginBottom: "30px",
          }}
        >
          <Badge>Partner</Badge>
          <div
            style={{
              fontSize: "25px",
              fontWeight: "500",
            }}
          >
            다양한 기관, 기업들과 함께 합니다.
          </div>
        </div>
        <div className="row" style={{ width: "2000px", overflow: "hidden" }}>
          {PartnerList.map((e, i) => (
            <PartnerCard key={i} src={e.img} title={e.title} />
          ))}
        </div>
      </div>

      <div
        style={{
          width: "100%",
          backgroundColor: "#FAFBFC",
          padding: "130px 0",
        }}
      >
        <div
          style={{
            width: "90%",
            maxWidth: "1300px",
            margin: "0 auto",
          }}
        >
          <Badge>Contact</Badge>
          <div className="row g-1">
            <div className="col-6" style={{ minWidth: "350px" }}>
              <div className="col-8">
                <div
                  style={{
                    fontSize: "25px",
                    fontWeight: "500",
                  }}
                >
                  언제, 어디서든 연락을 기다립니다.
                </div>
                <div
                  style={{
                    padding: "50px 0",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  전화번호 : 0507-1369-6158
                  <br />
                  이메일 : service@woomzip.com
                  <br />
                  주소 : 서울특별시 동작구 상도로 55길 8, 304호(상도동, 숭실대학교 챌린지스테이션)
                </div>
              </div>
            </div>
            <div className="col-6 row g-3" style={{ minWidth: "350px" }}>
              <img
                src="https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/map.png"
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
