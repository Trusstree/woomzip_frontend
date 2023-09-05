import ReviewCompany from "@/components/review/ReviewCompany";
<<<<<<< HEAD
import SortingButtonStyles from "@/components/review/SortingButtonsStyles";
import Image from "next/image";
import LoginButton from "@/components/review/LoginButton";
=======
import React from "react";
>>>>>>> cbba0caef48dd2285ba3dd4ffef55e25807096fc
import RouteButton from "@/components/RouteButton";
import SearchBox from "@/components/forms/SearchBox";
import { satisfaction } from "@/type/form";
import React, { useState, useEffect } from "react";
import { getConstructors } from "@/api/constructorAPI";
import { getAllBuilders } from "@/api/builderAPI";
import { getPersons } from "@/api/personAPI";

export default function Home() {
  return (
<<<<<<< HEAD
    <main
      className={`container-half my-5 d-flex ustify-content-start flex-column align-items-start`}
    >
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

          <h1 className="fw-bold text-white">시공사, 건축사사무소 리뷰 공간</h1>

          <div className="btn-group ms-auto me-5">
            <LoginButton />
          </div>
        </div>
=======
    <main className={`container my-5 d-flex justify-content-center`}>
      <div>
>>>>>>> cbba0caef48dd2285ba3dd4ffef55e25807096fc

        {/* 시공사, 건축사무소 검색하기 */}
        <SearchBox placeholder="시공사, 건축사무소 검색하기" />

        {/* 후기쓰기, 후기요청하기 */}
        <div className="d-flex justify-content-between my-4">
          {/* 다음 건축주를 위해 당신의 건축 이야기를 남겨주세요! */}
          <RouteButton className="py-3" url="/review2">
            건설사 후기 쓰기
          </RouteButton>

<<<<<<< HEAD
          <RouteButton className="py-3" url="/review3">
=======
          <RouteButton className="py-3" url="/requestion">
>>>>>>> cbba0caef48dd2285ba3dd4ffef55e25807096fc
            건설사 후기 요청하기
          </RouteButton>
        </div>

        {/* 최신순, 추천순, 리뷰 많은 순 정렬 버튼 */}
        {/* <div>
          <SortingButtonStyles />
        </div> */}

        {/* 회사 간 리뷰 */}
        {
          <>
            {data.map((company, i) => {
              return <ReviewCompany company={company} key={i} />;
            })}
            {data2.map((builder, i) => (
              <ReviewCompany company={builder} key={i} />
            ))}
            {data3.map((constructor, i) => (
              <ReviewCompany company={constructor} key={i} />
            ))}
            {data4.map((person, i) => (
              <ReviewCompany company={person} key={i} />
            ))}
          </>
        }
      </div>
    </main>
  );
}

const [data4, setData4] = useState([]);
const [data2, setData2] = useState([]);
const [data3, setData3] = useState([]);

useEffect(() => {
  // Fetch data using the provided functions
  getConstructors()
    .then((result) => {
      setData2(result.data);
    })
    .catch((error) => {
      console.error("데이터를 가져오는 중 오류 발생:", error);
    });

  getAllBuilders()
    .then((result) => {
      setData3(result.data);
    })
    .catch((error) => {
      console.error("데이터를 가져오는 중 오류 발생:", error);
    });

  getPersons()
    .then((result) => {
      setData4(result.data);
    })
    .catch((error) => {
      console.error("데이터를 가져오는 중 오류 발생:", error);
    });
}, []);

const data = [
  {
<<<<<<< HEAD
    sigongsa: "(주)00종합건설 / 용인시",
    sigongsaRate: 8.5,
    sotong: "매우 만족" as satisfaction,
    price: "만족" as satisfaction,
    sigongResult: "보통" as satisfaction,
    dateJunsu: "불만족" as satisfaction,
    as: "매우 불만족" as satisfaction,
    constructor: [
      {
        location: "용인시",
        type: "일반주택",
        rate: 8,
        description: (
          <span>
            000000000000000000000000000000000000000000000000000
            000000000000000000000000000000000000000000000000000
            00000000000000000000000000000000000000000000000000
            00000000000000000000000000000000000000 000000000000
          </span>
        ),
      },
      {
        location: "광명시",
        type: "일반주택",
        rate: 9,
        description: (
          <span>
            1111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111
          </span>
        ),
      },
    ],
  },
  {
    sigongsa: "(주)00종합건설 / 용인시",
    sigongsaRate: 8.5,
    sotong: "매우 만족" as satisfaction,
    price: "만족" as satisfaction,
    sigongResult: "보통" as satisfaction,
    dateJunsu: "불만족" as satisfaction,
    as: "매우 불만족" as satisfaction,
    constructor: [
      {
        location: "용인시",
        type: "일반주택",
        rate: 8,
        description: (
          <span>
            000000000000000000000000000000000000000000000000000
            000000000000000000000000000000000000000000000000000
            00000000000000000000000000000000000000000000000000
            00000000000000000000000000000000000000 000000000000
          </span>
        ),
      },
      {
        location: "광명시",
        type: "일반주택",
        rate: 9,
        description: (
          <span>
            1111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111
          </span>
        ),
      },
    ],
  },
  {
    sigongsa: "(주)00종합건설 / 용인시",
    sigongsaRate: 8.5,
    sotong: "매우 만족" as satisfaction,
    price: "만족" as satisfaction,
    sigongResult: "보통" as satisfaction,
    dateJunsu: "불만족" as satisfaction,
    as: "매우 불만족" as satisfaction,
    constructor: [
      {
        location: "용인시",
        type: "일반주택",
        rate: 8,
        description: (
          <span>
            000000000000000000000000000000000000000000000000000
            000000000000000000000000000000000000000000000000000
            00000000000000000000000000000000000000000000000000
            00000000000000000000000000000000000000 000000000000
          </span>
        ),
      },
      {
        location: "광명시",
        type: "일반주택",
        rate: 9,
        description: (
          <span>
            1111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111
          </span>
        ),
      },
    ],
  },
=======
    officeType: "시공사",
    officeName:"제이디홈플랜 / 서귀포시",
    officeRate:9,
    communication:"만족" as satisfaction,
    price:"매우 만족" as satisfaction,
    result:"만족" as satisfaction,
    keepingDeadline:"매우 만족" as satisfaction,
    afterService:"매우 만족" as satisfaction,
    constructor:[
      {
        location:"서귀포시",
        type:"일반주택",
        rate:9,
        description:
        <span>
          우크라이나 러시아 전쟁때문에 물가가 오름에도 불구하고 비용적인 측면에서 인상이나, 원가절감없이 시공하였음.<br/>
          완공 2년 후에 틈새에 물이 새어들어가 작은 면적의 나무가 썩는일이 발생하였으나, 주변의 다른 주택 시공 중에 직원분이 오셔서 무료로 A/S 해주심.<br/><br/>
          반면, 시공중에 건축사의 감리가 있더라도 구조 변경이나 원가 절감 등이 없는지 건축주(아버지)께서 주에 3일이상은 체크를 하러 갔었음.<br/>
          시공중에 시공사 사장의 비용적인 측면에서 남는 것이 없다고 신세한탄 하기도함.<br/>
          느낀점으로 건축주의 정밀한 확인이 없다면 시공사 측에서 얼마든지 원가절감이나 비용인상을 할 수도 있겠다고 생각함.
        </span>
      },
    ]
  },
  {
    officeType: "건축사사무소",
    officeName:"유타건축사사무소 / 서울시",
    officeRate:9,
    communication:"매우 만족" as satisfaction,
    price:"보통" as satisfaction,
    result:"매우 만족" as satisfaction,
    keepingDeadline:"매우 만족" as satisfaction,
    afterService:"매우 만족" as satisfaction,
    constructor:[
      {
        location:"서귀포시",
        type:"일반주택",
        rate:9,
        description:
        <span>
          가격적인 측면에서는 타 건축사보다 비쌌지만, 건축주의 라이프스타일을 반영하는 하나의 예술작품처럼 건축물을 대하였음.<br/>
          유명건축가이기도 하고 결과물적으로도 만족함.
        </span>
      },
    ]
  }
>>>>>>> cbba0caef48dd2285ba3dd4ffef55e25807096fc
];
