"use client"

import { getHouse } from "@/apis/HouseAPI";
import { HouseList } from "@/components/house/HouseList";
import PostMenu from "@/components/posts/PostMenu";
import { useEffect, useState } from "react";
import Image from "next/image";
import { priceText } from "@/lib/stringUtil";
import { useRouter } from "next/navigation";

type HouseComponentProps = {
  pid:number
}

export function HouseClient (props: HouseComponentProps) {
  const router = useRouter();
  const modelLink = "https://forms.gle/Qdq1HgPvcB76sRAW7";
  const gyeonjeokLink = "https://forms.gle/WhzuLumaL6C6TFu69";

  const { pid } = props;
  const [houseData, setHouseData] = useState(undefined);
  
  useEffect( () => {
    (async () => {
      const { data, error } = await getHouse(pid);
      
      if(error) console.log(error);
      else setHouseData(data[0]);
    }
    )();
  },[]);

  const getAvg = (data: any) => {
    if(!data || !data.ratingPost) return 0;

    const sum=data.ratingPost?.reduce((acc, e) => acc + e.rate, 0);
    return (sum/data.ratingPost.length);
  }

  return houseData?(
    <>
      {/* 제목 */}
      <div className={`row mt-4`}>
        {/* image */}
        <div className="col-md-6">
          <Image
            className="w-100 rounded-5 p-1"
            style={{objectFit:"cover"}}
            src={houseData["thumbnail"]}
            alt="main BoardComponent"
            width={400}
            height={450} />
          <div className={"d-flex justify-content-around"}>
            {/* <div className="me-auto d-flex">
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
            </div> */}
            <div className="ms-auto">
              {houseData["moduler"]=="yes" &&
              (<div className="badge text-white p-2 mx-1" style={{backgroundColor:"#136E11"}}>
                모듈러
              </div>)}
              {houseData["hasModel"]=="yes" &&
                <div className="badge text-white p-2 mx-1" style={{backgroundColor:"#136E11"}}>
                모델하우스
              </div>}
            </div>
          </div>
        </div>

        {/* information */}
        <div className={`col-md-6`}>
          <h3 className="d-flex flex-column fw-bold my-3">
            {houseData["title"]}
          </h3>

          <div className="d-flex align-items-end my-4">
            {(houseData["discount"]>0) && //houseData.discount
            <>
              <span className={"fs-3 mx-1"} style={{color:"#BD4040"}}>{houseData["discount"]}%</span>
              <span className={"text-decoration-line-through mx-1"} style={{color:"gray", textDecoration:""}}>{priceText(houseData["price"])}원</span>
            </>
            }
            <span className={"fs-4 mx-1"} style={{color:"#101648"}}>{priceText(houseData["price"]*(100-houseData["discount"])*0.01)}원</span>
            <span style={{color:"#101648"}}>(부가세 포함)</span>
          </div>

          <div className="d-flex flex-column">
            <div className="d-flex align-items-center">
              <div className={"fs-5 fw-bold"} style={{color:"#101648", width:100}}>평수</div>
              <span style={{color:"#101648"}}>{houseData["floorSpace"]}평</span>
            </div>
            <div className="d-flex align-items-center">
              <span className={"fs-5 fw-bold"} style={{color:"#101648", width:100}}>방</span>
              <span style={{color:"#101648"}}>{houseData["roomNumber"]}개</span>
            </div>
            <div className="d-flex align-items-center">
              <span className={"fs-5 fw-bold"} style={{color:"#101648", width:100}}>화장실</span>
              <span style={{color:"#101648"}}>{houseData["toiletNumber"]}개</span>
            </div>
            <div className="d-flex align-items-center">
              <span className={"fs-5 fw-bold"} style={{color:"#101648", width:100}}>AS기간</span>
              <span style={{color:"#101648"}}>{houseData["afterService"]}개월</span>
            </div>
            <div className="d-flex align-items-center">
              <span className={"fs-5 fw-bold"} style={{color:"#101648", width:100}}>판매자</span>
              <div
                className="fw-bold btn ps-0"
                style={{color:"#101648", border:"none"}}
                onClick={()=>{}}>
                {houseData["company"]}
              </div>
            </div>
          </div>

          <div className={"1"}>
            <select disabled defaultValue={"선택옵션"} className="form-select my-4" aria-label="Default select example">
              <option value="선택옵션">선택옵션 - 없음</option>
            </select>
            <div className={"row g-3"}>
              <div className="col-6">
                <div
                  className="w-100 h-100 btn text-white py-3 d-flex justify-content-center align-items-center"
                  onClick={()=>{router.push(modelLink);}}
                  style={{backgroundColor:"#101648"}}>
                  <span
                    className="fs-5 fw-bold"
                    style={{wordBreak:"keep-all"}}>
                    모델하우스 예약하기
                  </span>
                </div>
              </div>
              <div className="col-6">
                <div
                  className="w-100 h-100 btn text-white py-3 d-flex justify-content-center align-items-center"
                  style={{backgroundColor:"#101648"}}
                  onClick={()=>{router.push(gyeonjeokLink);}}>
                  <span
                    className="fs-5 fw-bold"
                    style={{wordBreak:"keep-all"}}>
                    견적 문의하기
                  </span>
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
          {houseData["interior"]=="yes" && 
          <div className="me-1 mx-md-2 d-flex flex-column align-items-center">
            <div
              className="text-white rounded-3 text-center p-1 mb-3"
              style={{backgroundColor:"#136E11", width:"105px"}}>
              인테리어
            </div>
          </div>}
          {houseData["gagu"]=="yes" &&
          <div className="me-1 mx-md-2 d-flex flex-column align-items-center">
            <div
              className="text-white rounded-3 text-center p-1 mb-3"
              style={{backgroundColor:"#136E11", width:"105px"}}>
              가구
            </div>
          </div>}
          {houseData["transportation"]=="yes" &&
          <div className="me-1 mx-md-2 d-flex flex-column align-items-center">
            <div
              className="text-white rounded-3 text-center p-1 mb-3"
              style={{backgroundColor:"#136E11", width:"105px"}}>
              운송비
            </div>
          </div>}
          {houseData["installation"]=="yes" &&
          <div className="me-1 mx-md-2 d-flex flex-column align-items-center">
            <div
              className="text-white rounded-3 text-center p-1 mb-3"
              style={{backgroundColor:"#136E11", width:"105px"}}>
              설치비
            </div>
          </div>}
        </div>
      </div>

      {/* 추가로 발생가능한 비용 */}
      <div className="my-2 py-2">
        <span className="fw-bold fs-5" style={{color:"#101648"}}>추가로 발생가능한 비용💡</span>
        <span style={{color:"#101648"}}>(토지위치, 상태에 따라 차이 발생)</span>
        <div className="row">
          <div className="col-md-8 col-lg-9 d-flex justify-content-left flex-wrap my-2">
            {houseData["inheoga"]>0 &&
            <div className="me-1 mx-md-2 d-flex flex-column align-items-center">
              <div
                className="text-white rounded-3 text-center p-1"
                style={{backgroundColor:"#BD4040", width:"105px"}}>
                인허가비용
              </div>
              <span className="my-2 text-center">{priceText(houseData["inheoga"])}원</span>
            </div>}
            {houseData["gicho"]>0 &&
            <div className="me-1 mx-md-2 d-flex flex-column align-items-center">
              <div
                className="text-white rounded-3 text-center p-1"
                style={{backgroundColor:"#BD4040", width:"105px"}}>
                기초공사
              </div>
              <span className="my-2 text-center">{priceText(houseData["gicho"])}원</span>
            </div>}
            {houseData["tomok"]>0 &&
            (<div className="me-1 mx-md-2 d-flex flex-column align-items-center">
              <div
                className="text-white rounded-3 text-center p-1"
                style={{backgroundColor:"#BD4040", width:"105px"}}>
                토목공사
              </div>
              <span className="my-2 text-center">{priceText(houseData["tomok"])}원</span>
            </div>)}
            {houseData["electroInip"]>0 &&
            <div className="me-1 mx-md-2 d-flex flex-column align-items-center">
              <div
                className="text-white rounded-3 text-center p-1"
                style={{backgroundColor:"#BD4040", width:"105px"}}>
                전기인입
              </div>
              <span className="my-2 text-center">{priceText(houseData["electroInip"])}원</span>
            </div>}
            {houseData["sudoInip"]>0 &&
            <div className="me-1 mx-md-2 d-flex flex-column align-items-center">
              <div
                className="text-white rounded-3 text-center p-1"
                style={{backgroundColor:"#BD4040", width:"105px"}}>
                수도인입
              </div>
              <span className="my-2 text-center">{priceText(houseData["sudoInip"])}원</span>
            </div>}
            {houseData["bohum"]>0 &&
            <div className="me-1 mx-md-2 d-flex flex-column align-items-center">
              <div
                className="text-white rounded-3 text-center p-1"
                style={{backgroundColor:"#BD4040", width:"105px"}}>
                보험
              </div>
              <span className="my-2 text-center">{priceText(houseData["bohum"])}원</span>
            </div>}
            {houseData["tax"]>0 &&
            <div className="me-1 mx-md-2 d-flex flex-column align-items-center">
              <div
                className="text-white rounded-3 text-center p-1"
                style={{backgroundColor:"#BD4040", width:"105px"}}>
                세금
              </div>
              <span className="my-2 text-center">{priceText(houseData["tax"])}원</span>
            </div>}
            {houseData["etc"]>0 &&
            <div className="me-1 mx-md-2 d-flex flex-column align-items-center">
              <div
                className="text-white rounded-3 text-center p-1"
                style={{backgroundColor:"#BD4040", width:"105px"}}>
                기타
              </div>
              <span className="my-2 text-center">{priceText(houseData["etc"])}원</span>
            </div>}
          </div>
          <div className="col-md-4 col-lg-3 align-self-center">
            <div className="d-flex flex-column align-items-center">
              <div><span className="fw-bold fs-5" style={{color:"#BD4040"}}>트러스 예상 가격</span></div>
              <div><span className="fw-bold fs-5" style={{color:"#101648"}}>
                {priceText(houseData["inheoga"]+houseData["gicho"]+houseData["tomok"]+houseData["electroInip"]+houseData["sudoInip"]+houseData["bohum"]+houseData["tax"]+houseData["etc"])}원
              </span></div>
            </div>
          </div>
        </div>
      </div>

      {/* navigation */}
      {/* <div className="navbar my-4">
        <div className="container-fluid px-0 d-flex justify-content-around">
          <ul className="nav w-100 d-flex justify-content-around">
            <li className="nav-item col-3">
              <div className="w-100 h-100 py-3 btn border-secondary rounded-0" style={{color:"#101648"}}>
                <span className="fs-5">제품사진</span>
              </div>
            </li>
            <li className="nav-item col-3">
              <div className="w-100 h-100 py-3 btn border-secondary rounded-0" style={{color:"#101648"}}>
                  <span className="fs-5">상세정보</span>
                </div>
              </li>
            <li className="nav-item col-3">
              <div className="w-100 h-100 py-3 btn border-secondary rounded-0" style={{color:"#101648"}}>
                <span className="fs-5">리뷰, 방문후기(1)</span>
              </div>
            </li>
            <li className="nav-item col-3">
              <div className="w-100 h-100 py-3 btn border-secondary rounded-0" style={{color:"#101648"}}>
                <span className="fs-5">Q&A(11)</span>
              </div>
            </li>
          </ul>
        </div>
      </div> */}

      {/* 상세설명 */}
      <div className="d-flex flex-column justify-content-center">
        <div className="fs-4 fw-bold" style={{color:"#101648"}}>제품사진</div>
        <img
          alt="main post"
          src={houseData.itemImage} />
      </div>

      {/* 상세정보 */}
      <div className="d-flex flex-column justify-content-center">
        <div className="fs-4 fw-bold" style={{color:"#101648"}}>상세정보</div>
        <img
          alt="main post"
          src={houseData.detailImage} />
      </div>

      {/* 평점 */}
      {/* <PostMenu
        title={`평점 ${getAvg(houseData).toFixed(1)}/5.0`}
        routeUrl={"/posts"}
        horizontalScroll={true}>
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
      </PostMenu> */}

      {/* Q&A */}
      {/* <PostMenu
        title={`제품 Q&A(${4})`}
        routeUrl={"/posts"}
        routeText={"더보기"}
        horizontalScroll={true}>
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
      </PostMenu> */}

      {/* 추천정보 */}
      <PostMenu
        title={"더 많은 주택들을 구경해보세요!"}
        routeUrl={"/house"}
        routeText={"더보기"}
        horizontalScroll={true}>
        <HouseList numShowItems={6} searchCondition={{}}  />
      </PostMenu>
    </>
  ):(
    <>
      로딩 중
    </>
  )
}