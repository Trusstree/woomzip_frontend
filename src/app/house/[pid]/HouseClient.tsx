"use client"

import { getHouse } from "@/api/HouseAPI";
import DetailPost from "@/components/house/DetailPost";
import { HouseList } from "@/components/house/HouseList";
import MainPagePost from "@/components/house/HouseCard";
import PostMenu from "@/components/posts/PostMenu";
import { useEffect, useState } from "react";
import Image from "next/image";

type HouseComponentProps = {
  pid:number
}

type RatingPost = {
  rate: number
  src: string
  title: string
}

type HouseData = {
  title: string
  image: string
  subImage1: string
  subImage2: string
  detailImage: string
  buildingImage: string
  blueprint: string
  costImage: string
  officeImage: string
  price: number
  floorSpace: number
  roomNumber: number
  toiletNumber: number
  hasLoft: boolean
  tag: string[],
  ratingPost: any[]
}

export function HouseClient (props: HouseComponentProps) {
  const { pid } = props;
  const [houseData, setHouseData] = useState(undefined as HouseData);
  
  useEffect( () => {
    const getHouseq = async () => {
      const { data, error } = await getHouse(pid);
      
      if(error) console.log(error);
      else setHouseData(data[0]);
    }
    getHouseq();
  },[]);

  const getAvg = (data: HouseData) => {
    if(!data || !data.ratingPost) return 0;

    const sum=data.ratingPost?.reduce((acc, e) => acc + e.rate, 0);
    return (sum/data.ratingPost.length);
  }

  return houseData?(
    <>
      {/* 제목 */}
      <div className={`row mt-4`}>
        {/* image */}
        <div className="col-6">
          <Image
            className="w-100 rounded-5 p-1"
            style={{objectFit:"cover"}}
            src={houseData.image}
            alt="main BoardComponent"
            width={400}
            height={450} />
          <div className={"d-flex justify-content-around"}>
            <div className="me-auto d-flex">
              <div className="mx-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={25}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>10597</span>
              </div>
              
              <div className="mx-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={25}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                </svg>
                <span>327</span>
              </div>

              <div className="mx-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={25}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
                <span>31</span>
              </div>
            </div>
            <div>
              <div className="btn text-white p-1 mx-1" style={{backgroundColor:"#101648"}}>모듈러</div>
              <div className="btn text-white p-1 mx-1" style={{backgroundColor:"#101648"}}>모델하우스</div>
            </div>
          </div>
        </div>

        {/* information */}
        <div className={`col-6`}>
          <h3 className="d-flex flex-column fw-bold my-3">
            {houseData.title}
          </h3>

          <div className="d-flex align-items-end my-4">
            {(1>0) && //houseData.discount
            <>
              <span className={"fs-3 mx-1"} style={{color:"#BD4040"}}>10%</span>
              <span className={"text-decoration-line-through mx-1"} style={{color:"gray", textDecoration:""}}>9900만원</span>
            </>
            }
            <span className={"fs-4 mx-1"} style={{color:"#101648"}}>8970만원</span>
            <span style={{color:"#101648"}}>(부가세 포함)</span>
          </div>

          <div className="d-flex flex-column">
            <div className="d-flex align-items-center">
              <div className={"fs-5 fw-bold"} style={{color:"#101648", width:100}}>평수</div>
              <span style={{color:"#101648"}}>17.8평</span>
            </div>
            <div className="d-flex align-items-center">
              <span className={"fs-5 fw-bold"} style={{color:"#101648", width:100}}>방</span>
              <span style={{color:"#101648"}}>1개</span>
            </div>
            <div className="d-flex align-items-center">
              <span className={"fs-5 fw-bold"} style={{color:"#101648", width:100}}>화장실</span>
              <span style={{color:"#101648"}}>1개</span>
            </div>
            <div className="d-flex align-items-center">
              <span className={"fs-5 fw-bold"} style={{color:"#101648", width:100}}>AS기간</span>
              <span style={{color:"#101648"}}>24개월</span>
            </div>
            <div className="d-flex align-items-center">
              <span className={"fs-5 fw-bold"} style={{color:"#101648", width:100}}>판매자</span>
              <span style={{color:"#101648"}}>모두가하우징</span>
              <div className="btn btn-sm text-white ms-3" style={{backgroundColor:"#101648"}}>업체정보</div>
            </div>
          </div>

          <div className={"1"}>
            <select className="form-select my-4" aria-label="Default select example">
              <option selected>선택옵션</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <div className={"row g-3"}>
              <div className="col-6">
                <div
                  className="w-100 btn text-white py-3"
                  style={{backgroundColor:"#101648"}}>
                  <span className="fs-5 fw-bold">모델하우스 예약하기</span>
                </div>
              </div>
              <div className="col-6">
                <div
                  className="w-100 btn text-white py-3"
                  style={{backgroundColor:"#101648"}}>
                  <span className="fs-5 fw-bold">견적 문의하기</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      {/* 가격에 포함된 서비스 */}
      <div className="my-2 py-2">
        <span className="fw-bold fs-5" style={{color:"#101648"}}>가격에 포함된 서비스</span>
        <div className="d-flex justify-content-left flex-wrap my-2">
          <div className="mx-2 d-flex flex-column align-items-center">
            <div
              className="text-white rounded-3 text-center p-1 mb-3"
              style={{backgroundColor:"#101648", width:"120px"}}>
              인테리어
            </div>
          </div>
          <div className="mx-2 d-flex flex-column align-items-center">
            <div
              className="text-white rounded-3 text-center p-1 mb-3"
              style={{backgroundColor:"#101648", width:"120px"}}>
              가구
            </div>
          </div>
          <div className="mx-2 d-flex flex-column align-items-center">
            <div
              className="text-white rounded-3 text-center p-1 mb-3"
              style={{backgroundColor:"#101648", width:"120px"}}>
              운송비
            </div>
          </div>
          <div className="mx-2 d-flex flex-column align-items-center">
            <div
              className="text-white rounded-3 text-center p-1 mb-3"
              style={{backgroundColor:"#101648", width:"120px"}}>
              설치비
            </div>
          </div>
        </div>
      </div>

      {/* 추가로 발생가능한 비용 */}
      <div className="my-2 py-2">
        <span className="fw-bold fs-5" style={{color:"#101648"}}>추가로 발생가능한 비용💡</span>
        <span style={{color:"#101648"}}>(토지위치, 상태에 따라 차이 발생)</span>
        <div className="row">
          <div className="col-9 d-flex justify-content-left flex-wrap my-2">
            <div className="mx-2 d-flex flex-column align-items-center">
              <div
                className="text-white rounded-3 text-center p-1"
                style={{backgroundColor:"#BD4040", width:"120px"}}>
                인허가비용
              </div>
              <span className="my-2 text-center">1,100만원</span>
            </div>
            <div className="mx-2 d-flex flex-column align-items-center">
              <div
                className="text-white rounded-3 text-center p-1"
                style={{backgroundColor:"#BD4040", width:"120px"}}>
                기초공사
              </div>
              <span className="my-2 text-center">1,920만원</span>
            </div>
            <div className="mx-2 d-flex flex-column align-items-center">
              <div
                className="text-white rounded-3 text-center p-1"
                style={{backgroundColor:"#BD4040", width:"120px"}}>
                토목공사
              </div>
              <span className="my-2 text-center">770만원</span>
            </div>
            <div className="mx-2 d-flex flex-column align-items-center">
              <div
                className="text-white rounded-3 text-center p-1"
                style={{backgroundColor:"#BD4040", width:"120px"}}>
                전기인입
              </div>
              <span className="my-2 text-center">80만원</span>
            </div>
            <div className="mx-2 d-flex flex-column align-items-center">
              <div
                className="text-white rounded-3 text-center p-1"
                style={{backgroundColor:"#BD4040", width:"120px"}}>
                수도인입
              </div>
              <span className="my-2 text-center">500만원</span>
            </div>
            <div className="mx-2 d-flex flex-column align-items-center">
              <div
                className="text-white rounded-3 text-center p-1"
                style={{backgroundColor:"#BD4040", width:"120px"}}>
                보험
              </div>
              <span className="my-2 text-center">180만원</span>
            </div>
            <div className="mx-2 d-flex flex-column align-items-center">
              <div
                className="text-white rounded-3 text-center p-1"
                style={{backgroundColor:"#BD4040", width:"120px"}}>
                세금
              </div>
              <span className="my-2 text-center">55만원</span>
            </div>
            <div className="mx-2 d-flex flex-column align-items-center">
              <div
                className="text-white rounded-3 text-center p-1"
                style={{backgroundColor:"#BD4040", width:"120px"}}>
                기타
              </div>
              <span className="my-2 text-center">150만원</span>
            </div>
          </div>
          <div className="col-3 align-self-center">
            <div className="d-flex flex-column align-items-center">
              <div><span className="fw-bold fs-5" style={{color:"#BD4040"}}>트러스 예상 가격</span></div>
              <div><span className="fw-bold fs-5" style={{color:"#101648"}}>4700만원</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* navigation */}
      <div className="navbar my-4">
        <div className="container-fluid px-0 d-flex justify-content-around">
          <ul className="nav w-100 d-flex justify-content-around">
            <li className="nav-item col-3">
              <div className="w-100 py-3 btn border-secondary rounded-0" style={{color:"#101648"}}>
                <span className="fs-5">제품사진</span>
              </div>
            </li>
            <li className="nav-item col-3">
            <div className="w-100 py-3 btn border-secondary rounded-0" style={{color:"#101648"}}>
                <span className="fs-5">상세정보</span>
              </div>
            </li>
            <li className="nav-item col-3">
              <div className="w-100 py-3 btn border-secondary rounded-0" style={{color:"#101648"}}>
                <span className="fs-5">리뷰, 방문후기(1)</span>
              </div>
            </li>
            <li className="nav-item col-3">
              <div className="w-100 py-3 btn border-secondary rounded-0" style={{color:"#101648"}}>
                <span className="fs-5">Q&A(11)</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* 상세설명 */}
      <div className="d-flex justify-content-center">
        <img
          alt="main post"
          src={houseData.detailImage}
          width={600}
        />
      </div>

      {/* 평점 */}
      <PostMenu
        title={`평점 ${getAvg(houseData).toFixed(1)}/5.0`}
        routeUrl={"/posts"}
        >
        <div className="d-flex justify-content-center">
          {
          houseData.ratingPost?houseData.ratingPost.map((e, i)=>(
            <MainPagePost data={e} key={i}/>
          )):
          <div style={{height:250}}>
            평점이 없습니다. 가장 먼저 리뷰를 남겨보세요!
          </div>
          }
        </div>
      </PostMenu>

      {/* Q&A */}
      <PostMenu
        title={`제품 Q&A(${4})`}
        routeUrl={"/posts"}
        routeText={"더보기"}>
        <div className="d-flex justify-content-center">
          {
          houseData.ratingPost?houseData.ratingPost.map((e, i)=>(
            <MainPagePost data={e} key={i}/>
          )):
          <div style={{height:250}}>
            Q&A가 없습니다. 궁금한 것이 있다면 질문하세요!
          </div>
          }
        </div>
      </PostMenu>

      {/* 추천정보 */}
      <PostMenu
        title={"1억 미만으로 지을 수 있는 북유럽 스타일 주택들을 구경해보세요!"}
        routeUrl={"/posts"}
        routeText={"더보기"}>
        <HouseList numShowItems={4} searchCondition={{}} />
      </PostMenu>
    </>
  ):(
    <>
      로딩 중
    </>
  )
}