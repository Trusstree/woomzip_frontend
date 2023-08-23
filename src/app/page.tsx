import ReviewCompany from "@/components/review/ReviewCompany";
import React from "react";
import SortingButtonStyles from "@/components/review/SortingButtonsStyles";
import Image from "next/image";
import LoginButton from "@/components/review/LoginButton";
import RouteButton from "@/components/RouteButton";
import SearchBox from "@/components/forms/SearchBox";
import { satisfaction } from "@/type/form";

export default function Home() {
  return (
    <main className={`container my-5 d-flex ustify-content-start flex-column align-items-start`}>
      <div>
        <div className="d-flex align-items-center">
          <Image
            className={`mr-auto m-3`}
            src="/logo1.png"
            alt="Truss Logo"
            width={109}
            height={64}
            style={{ filter: "brightness(0) invert(1)" }}
          />

          <h1 className="fw-bold text-white">
            시공사, 건축사사무소 리뷰 공간
          </h1>

          <div className="btn-group ms-auto me-5">
            <LoginButton />
          </div>
        </div>

        {/* 시공사, 건축사무소 검색하기 */}
        <SearchBox placeholder="시공사, 건축사무소 검색하기"/>

        {/* 후기쓰기, 후기요청하기 */}
        <div className="d-flex justify-content-between my-4">
          {/* 다음 건축주를 위해 당신의 건축 이야기를 남겨주세요! */}
          <RouteButton
            className="py-3"
            url="http://localhost:3000/review2">
            건설사 후기 쓰기
          </RouteButton>

          <RouteButton
          className="py-3"
            url="http://localhost:3000/review3">
            건설사 후기 요청하기
          </RouteButton>
        </div>

        {/* 최신순, 추천순, 리뷰 많은 순 정렬 버튼 */}
        <div>
          <SortingButtonStyles />
        </div>

        {/* 회사 간 리뷰 */}
        {<>{
          data.map((company,i)=>{
            return(
              <ReviewCompany company={company} key={i}/>
            );
          })
        }</>}
      </div>
    </main>
  );
}

const data=[
  {
    sigongsa:"(주)00종합건설 / 용인시",
    sigongsaRate:8.5,
    sotong:"매우 만족" as satisfaction,
    price:"만족" as satisfaction,
    sigongResult:"보통" as satisfaction,
    dateJunsu:"불만족" as satisfaction,
    as:"매우 불만족" as satisfaction,
    constructor:[
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
    sotong:"매우 만족" as satisfaction,
    price:"만족" as satisfaction,
    sigongResult:"보통" as satisfaction,
    dateJunsu:"불만족" as satisfaction,
    as:"매우 불만족" as satisfaction,
    constructor:[
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
    sotong:"매우 만족" as satisfaction,
    price:"만족" as satisfaction,
    sigongResult:"보통" as satisfaction,
    dateJunsu:"불만족" as satisfaction,
    as:"매우 불만족" as satisfaction,
    constructor:[
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
