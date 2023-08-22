import ReviewCompany from "@/components/review/ReviewCompany";
import React from "react";
import SortingButtonStyles from "@/components/review/SortingButtonsStyles";
import Image from "next/image";
import LoginButton from "@/components/review/LoginButton";
import SearchBar from "@/components/review/SearchBar";

export default function Home() {
  return (
    <main
      className={`container d-flex ustify-content-start flex-column align-items-start`}
    >
      <div>
        <span className="d-flex align-items-center">
          <Image
            className={`mr-auto m-3`}
            src="/logo1.png"
            alt="Truss Logo"
            width={109}
            height={64}
            style={{ filter: "brightness(0) invert(1)" }}
          />

          <h1 style={{ marginTop: "20px", fontWeight: "bold", color: "white" }}>
            시공사, 건축사사무소 리뷰 공간
          </h1>

          <span
            className="btn-group ms-auto me-5"
            style={{ marginTop: "20px", color: "white" }}
          >
            <LoginButton />
          </span>
        </span>

        {/* 시공사, 건축사무소 검색하기 */}
        <span
          style={{
            borderRadius: "10px",
            background: "#0496bd",
            width: "100%",
            padding: "10px", // Adjust padding as needed
            display: "flex",
          }}
        >
          <svg
            width="36"
            height="36"
            fill="white"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="10" />
            <line x1="30" y1="30" x2="18.65" y2="18.65" />
          </svg>

          <SearchBar
            placeholder="시공사, 건축사무소 검색하기"
            className="invest-search" // Optional custom CSS classes
          />
        </span>

        {/* 후기쓰기, 후기요청하기 */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <button
            style={{
              background: "#0496bd",
              borderRadius: "10px",
              border: "None",
              width: "30%",
            }}
          >
            <a
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLScNXPgZ2jTJmEOcZ1Y8Q4_VZKwNro9i6GEbc9bd-W-9Fjwq8A/viewform?usp=sf_link"
              style={{
                color: "white",
                justifyContent: "center", // Center-align the content horizontally
                alignItems: "center", // Center-align the content vertically
                textDecoration: "none", // Remove underline
              }}
            >
              <div
                className="public"
                style={{ fontSize: "25px", marginTop: "5px" }}
              >
                <p>건설사 후기 쓰기</p>
                <p style={{ fontSize: "13px" }}>
                  다음 건축주를 위해 당신의 건축 이야기를 남겨주세요!
                </p>
              </div>
            </a>
          </button>
          <button
            style={{
              background: "#0496bd",
              borderRadius: "10px",
              border: "None",
              width: "30%",
            }}
          >
            <a
              target="_blank"
              href="https://naver.com"
              style={{
                fontSize: "25px",
                color: "white",
                textDecoration: "none", // Remove underline
              }}
            >
              <p className="public" style={{ fontSize: "25px" }}>
                <div>건설사 후기 요청하기</div>
                <span style={{ fontSize: "13px" }}>
                  원하시는 업체의 리뷰가 없다면 요청해주세요!
                </span>
              </p>
            </a>
          </button>
        </div>

        {/* 최신순, 추천순, 리뷰 많은 순 정렬 버튼 */}
        <div>
          <SortingButtonStyles />
        </div>

        {/* 회사 간 리뷰 */}
        {<>{
          data.map((company)=>{
            return(
              <ReviewCompany company={company} />
            );
          })
        }</>}
      </div>
    </main>
  );
}







type rate= "매우 만족" | "만족" | "보통" | "불만족" | "매우 불만족";
const data=[
  {
    sigongsa:"(주)00종합건설 / 용인시",
    sigongsaRate:8.5,
    sotong:"매우 만족" as rate,
    price:"만족" as rate,
    sigongResult:"보통" as rate,
    dateJunsu:"불만족" as rate,
    as:"매우 불만족" as rate,
    building:[
      {
        location:"용인시",
        type:"일반주택",
        rate:8,
        description:
        <span>
          000000000000000000000000000000000000000000000000000
          000000000000000000000000000000000000000000000000000
          00000000000000000000000000000000000000000000000000
          00000000000000000000000000000000000000 000000000000
        </span>
      },
      {
        location:"광명시",
        type:"일반주택",
        rate:9,
        description:
          <span>
            1111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111
          </span>
      }
    ]
  },
  {
    sigongsa:"(주)00종합건설 / 용인시",
    sigongsaRate:8.5,
    sotong:"매우 만족" as rate,
    price:"만족" as rate,
    sigongResult:"보통" as rate,
    dateJunsu:"불만족" as rate,
    as:"매우 불만족" as rate,
    building:[
      {
        location:"용인시",
        type:"일반주택",
        rate:8,
        description:
        <span>
          000000000000000000000000000000000000000000000000000
          000000000000000000000000000000000000000000000000000
          00000000000000000000000000000000000000000000000000
          00000000000000000000000000000000000000 000000000000
        </span>
      },
      {
        location:"광명시",
        type:"일반주택",
        rate:9,
        description:
          <span>
            1111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111
          </span>
      }
    ]
  },
  {
    sigongsa:"(주)00종합건설 / 용인시",
    sigongsaRate:8.5,
    sotong:"매우 만족" as rate,
    price:"만족" as rate,
    sigongResult:"보통" as rate,
    dateJunsu:"불만족" as rate,
    as:"매우 불만족" as rate,
    building:[
      {
        location:"용인시",
        type:"일반주택",
        rate:8,
        description:
        <span>
          000000000000000000000000000000000000000000000000000
          000000000000000000000000000000000000000000000000000
          00000000000000000000000000000000000000000000000000
          00000000000000000000000000000000000000 000000000000
        </span>
      },
      {
        location:"광명시",
        type:"일반주택",
        rate:9,
        description:
          <span>
            1111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111
          </span>
      }
    ]
  }
];
