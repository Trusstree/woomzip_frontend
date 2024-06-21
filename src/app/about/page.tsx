"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { BrowserView, MobileView } from "react-device-detect";

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
  const [partnerData, setPartnerData] = useState(PartnerList);

  return (
    <>
      <BrowserView>
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
            <div
              style={{
                backgroundColor: "#314FC0",
                borderRadius: "40px",
                width: "120px",
                height: "40px",
                textAlign: "center",
                color: "white",
                fontSize: "23px",
                fontWeight: "600",
                padding: "5px 0",
                marginBottom: "30px",
              }}
            >
              Vision
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              fontSize: "25px",
              fontWeight: "600",
            }}
          >
            <div>
              우리를 통해 지방 인구소멸 문제 해결에 한 발자국 나아갈 수 있도록,
              <div style={{ color: "gray", fontWeight: "500" }}>
                건축시장을 혁신하여 귀촌 결정의 허들을 낮추겠습니다.
              </div>
            </div>
            <div style={{ marginTop: "30px" }}>
              우리를 통해 대한민국에 아름다운 집들이 많아지도록,
              <div style={{ color: "gray", fontWeight: "500" }}>
                기술을 통해 짓는 과정마저 아름다운 행복을 담은 집들을
                만들겠습니다.
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
            <div
              style={{
                backgroundColor: "#314FC0",
                borderRadius: "40px",
                width: "120px",
                height: "40px",
                textAlign: "center",
                color: "white",
                fontSize: "23px",
                fontWeight: "600",
                padding: "5px 0",
                marginBottom: "30px",
              }}
            >
              Team
            </div>
            <div
              style={{
                fontSize: "25px",
                fontWeight: "500",
              }}
            >
              우리는 최고이자, 최선을 다합니다.
            </div>
            <div className="row g-1">
              <div className="col-6 row g-3" style={{ minWidth: "350px" }}>
                <div className="col-4" style={{ marginBottom: "30px" }}>
                  <img
                    src="https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/jun.jpg"
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      boxShadow: "3px 3px 10px rgba(0,0,0,0.2)",
                    }}
                  ></img>
                </div>
                <div className="col-8">
                  <div style={{ fontSize: "20px" }}>양준우 | 대표</div>
                  <div>
                    <span
                      style={{
                        backgroundColor: "#CCD6FF",
                        color: "#314FC0",
                        borderRadius: "20px",
                        padding: "2px 7px",
                        marginRight: "5px",
                      }}
                    >
                      경영
                    </span>
                    <span
                      style={{
                        backgroundColor: "#E2FFCC",
                        color: "#8AC031",
                        borderRadius: "20px",
                        padding: "2px 7px",
                        marginRight: "5px",
                      }}
                    >
                      Front-End(sub)
                    </span>
                  </div>
                  <div>"항상 진실된 사람이 되겠습니다."</div>
                  <div>zxcomkt@gmail.com</div>
                </div>
              </div>
              <div className="col-6 row g-3" style={{ minWidth: "350px" }}>
                <div className="col-4" style={{ marginBottom: "30px" }}>
                  <img
                    src="https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/jun.jpg"
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      boxShadow: "3px 3px 10px rgba(0,0,0,0.2)",
                    }}
                  ></img>
                </div>
                <div className="col-8">
                  <div style={{ fontSize: "20px" }}>박세홍 | 팀장</div>
                  <div>
                    <span
                      style={{
                        backgroundColor: "#FFCCCC",
                        color: "#C03142",
                        borderRadius: "20px",
                        padding: "2px 7px",
                        marginRight: "5px",
                      }}
                    >
                      마케팅
                    </span>
                    <span
                      style={{
                        backgroundColor: "#E2FFCC",
                        color: "#8AC031",
                        borderRadius: "20px",
                        padding: "2px 7px",
                        marginRight: "5px",
                      }}
                    >
                      DataBase(sub)
                    </span>
                  </div>
                  <div>"항상 진실된 사람이 되겠습니다."</div>
                  <div>zxcomkt@gmail.com</div>
                </div>
              </div>
            </div>
            <div className="row g-1">
              <div className="col-6 row g-3" style={{ minWidth: "350px" }}>
                <div className="col-4" style={{ marginBottom: "30px" }}>
                  <img
                    src="https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/jun.jpg"
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      boxShadow: "3px 3px 10px rgba(0,0,0,0.2)",
                    }}
                  ></img>
                </div>
                <div className="col-8">
                  <div style={{ fontSize: "20px" }}>박민규 | 개발자</div>
                  <div>
                    <span
                      style={{
                        backgroundColor: "#E2FFCC",
                        color: "#8AC031",
                        borderRadius: "20px",
                        padding: "2px 7px",
                        marginRight: "5px",
                      }}
                    >
                      Front-End
                    </span>
                    <span
                      style={{
                        backgroundColor: "#E2FFCC",
                        color: "#8AC031",
                        borderRadius: "20px",
                        padding: "2px 7px",
                        marginRight: "5px",
                      }}
                    >
                      Infra
                    </span>
                  </div>
                  <div>"항상 진실된 사람이 되겠습니다."</div>
                  <div>zxcomkt@gmail.com</div>
                </div>
              </div>
              <div className="col-6 row g-3" style={{ minWidth: "350px" }}>
                <div className="col-4" style={{ marginBottom: "30px" }}>
                  <img
                    src="https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/jun.jpg"
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      boxShadow: "3px 3px 10px rgba(0,0,0,0.2)",
                    }}
                  ></img>
                </div>
                <div className="col-8">
                  <div style={{ fontSize: "20px" }}>이주승 | 개발자</div>
                  <div>
                    <span
                      style={{
                        backgroundColor: "#E2FFCC",
                        color: "#8AC031",
                        borderRadius: "20px",
                        padding: "2px 7px",
                        marginRight: "5px",
                      }}
                    >
                      Back-End
                    </span>
                    <span
                      style={{
                        backgroundColor: "#E2FFCC",
                        color: "#8AC031",
                        borderRadius: "20px",
                        padding: "2px 7px",
                        marginRight: "5px",
                      }}
                    >
                      DataBase
                    </span>
                  </div>
                  <div>"항상 진실된 사람이 되겠습니다."</div>
                  <div>zxcomkt@gmail.com</div>
                </div>
              </div>
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
            <div
              style={{
                backgroundColor: "#314FC0",
                borderRadius: "40px",
                width: "120px",
                height: "40px",
                textAlign: "center",
                color: "white",
                fontSize: "23px",
                fontWeight: "600",
                padding: "5px 0",
                marginBottom: "30px",
              }}
            >
              History
            </div>
            <div
              style={{
                fontSize: "25px",
                fontWeight: "500",
              }}
            >
              우리가 지나온 길입니다.
            </div>
            <div className="row">
              <div
                className="col-6 row g-2"
                style={{ minWidth: "350px", marginBottom: "30px" }}
              >
                <div
                  className="col-3"
                  style={{ fontSize: "20px", fontWeight: "500" }}
                >
                  2023
                </div>

                <div className="col-9" style={{ minWidth: "350px" }}>
                  <div>
                    6월 / 서울시 주최 숭실대학교 주관, Pre-스타트업 창업경진대회
                    우수상
                  </div>
                  <div>
                    7월 / 서울시 캠퍼스타운, 숭실대학교 챌린지스테이션 입주
                  </div>
                  <div>8월 / 개인사업자 트러스 설립</div>
                  <div>
                    9월 / 하나금융그룹 주최 언더독스 주관, 하나소셜유니버시티
                    수료
                  </div>
                  <div>
                    11월 / 국토교통부 주최 한국건설기술연구원 주관, 스마트건설
                    창업아이디어 공모전 장려상
                  </div>
                  <div>
                    12월 / 한국건설기술연구원 내 스마트건설지원센터 입주
                  </div>
                </div>
              </div>
              <div
                className="col-6 row g-2"
                style={{ minWidth: "350px", marginBottom: "30px" }}
              >
                <div
                  className="col-3"
                  style={{ fontSize: "20px", fontWeight: "500" }}
                >
                  2024
                </div>

                <div className="col-9" style={{ minWidth: "350px" }}>
                  <div>
                    1월 / 한국건설기술연구원 패밀리사 선정(애로기술해결기업)
                  </div>
                  <div>
                    3월 / 모듈러 기반 단독주택 전문 프롭테크 플랫폼 '트러스'
                    베타서비스 출시
                  </div>
                  <div>5월 / 주식회사 트러스트리 법인 설립</div>
                  <div>6월 / 플랫폼명 '움집(Woomzip)'으로 변경</div>
                  <div>
                    7월 / 모듈러 기반 단독주택 전문 프롭테크 플랫폼 '움집' 정식
                    출시
                  </div>
                </div>
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
              marginBottom: "30px",
            }}
          >
            <div
              style={{
                backgroundColor: "#314FC0",
                borderRadius: "40px",
                width: "120px",
                height: "40px",
                textAlign: "center",
                color: "white",
                fontSize: "23px",
                fontWeight: "600",
                padding: "5px 0",
                marginBottom: "30px",
              }}
            >
              Partner
            </div>
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
            {partnerData.map((e, i) => (
              <div
                key={i}
                style={{
                  width: "250px",
                  textAlign: "center",
                }}
              >
                <img
                  src={e.img}
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    boxShadow: "3px 3px 10px rgba(0,0,0,0.2)",
                  }}
                ></img>
                <div style={{ fontSize: "18px", fontWeight: "500" }}>
                  {e.title}
                </div>
              </div>
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
            <div
              style={{
                backgroundColor: "#314FC0",
                borderRadius: "40px",
                width: "120px",
                height: "40px",
                textAlign: "center",
                color: "white",
                fontSize: "23px",
                fontWeight: "600",
                padding: "5px 0",
                marginBottom: "30px",
              }}
            >
              Contact
            </div>
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
                    주소 : 서울특별시 동작구 상도로 55길 8, 304호(상도동,
                    숭실대학교 챌린지스테이션)
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
      </BrowserView>
    </>
  );
}
