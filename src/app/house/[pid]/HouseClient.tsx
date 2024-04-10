"use client"

import { getHouse } from "@/apis/HouseAPI";
import { HouseList } from "@/components/house/HouseList";
import PostMenu from "@/components/posts/PostMenu";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { priceText } from "@/lib/stringUtil";
import { useRouter } from "next/navigation";
import { deleteHeart, getHeart, getHeartCount, postHeart } from "@/apis/HeartAPI";
import { getSession } from "next-auth/react";
import { alertSuccess } from "@/lib/alertUtil";
import { getPrice } from "@/apis/priceAPI";

type HouseComponentProps = {
  session: any
  pid:number
}

export function HouseClient (props: HouseComponentProps) {
  const router = useRouter();
  const modelLink = "https://forms.gle/Qdq1HgPvcB76sRAW7";
  const gyeonjeokLink = "https://forms.gle/WhzuLumaL6C6TFu69";

  const { pid, session } = props;
  const [houseData, setHouseData] = useState(undefined);
  const [priceList, setPriceList] = useState(undefined);
  const [heart, setHeart] = useState({heart:undefined, count:0});
  
  // house
  useEffect( () => {
    (async () => {
      const [ data, error ] = await getHouse(pid);
      if(error) {console.error(error); return;}
      setHouseData(data.data[0]);
      console.log(data.data[0]);
    }
    )();
  },[]);

  // price
  // useEffect( () => {
  //   (async () => {
  //     const [ data, error ] = await getPrice(pid);
  //     if(error) console.log(error);
  //     else setPriceList(data);
  //   }
  //   )();
  // },[]);

  // // heart
  // useEffect( () => {
  //   (async () => {
  //     const [ heartCount, heartCountError ] = await getHeartCount(pid);
  //     const heartParams = {house_id:pid};
  //     if(session?.user) heartParams["user_id"]=session?.user?.id;
  //     const [ myHeart, myHeartError ] = await getHeart(heartParams);
  //     if(heartCountError) console.error(heartCountError);
  //     if(myHeartError) console.log(myHeartError);

  //     setHeart({heart:myHeart[0], count:heartCount});
  //   }
  //   )();
  // },[]);

  // const getAvg = (data: any) => {
  //   if(!data || !data.ratingPost) return 0;

  //   const sum=data.ratingPost?.reduce((acc, e) => acc + e.rate, 0);
  //   return (sum/data.ratingPost.length);
  // }
  
  // const ClickHeart = useCallback(async () => {
  //   const session  = await getSession();
  //   if(session?.user){
  //     const heartParams={house_id:pid, user_id:session.user.uid};

  //     if(heart.heart) {
  //       const [response, error] = await deleteHeart(heartParams);
  //       if(error)console.log(error);
  //       setHeart({heart:undefined, count:heart.count-1});
  //     } else {
  //       const[response, error] = await postHeart(heartParams);
  //       if(error)console.log(error);
  //       setHeart({heart:response, count:heart.count+1});
  //     }
  //   } else {
  //     alertSuccess("로그인이 필요한 서비스입니다.","로그인해주세요!");
  //   }
  // },[heart])

  return houseData?(
    <>
      {/* 제목 */}
      <div className={`row mt-4`}>
        {/* image */}
        <div className="col-md-6">
          <Image
            className="w-100 rounded-5 p-1"
            style={{objectFit:"cover"}}
            src={houseData["house_image_url"]}
            alt="main BoardComponent"
            width={400}
            height={450} />
          <div className={"d-flex justify-content-around"}>
            <div className="me-auto d-flex">
              {/* View Count */}
              {/* <div className="mx-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={25}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>10597</span>
              </div> */}
              
              {/* Heart Count */}
              <div className="mx-3 d-flex">
                <button
                  className="btn py-0 border-0">
                  {/* onClick={ClickHeart}> */}
                  {heart.heart?
                  (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={25}>
                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                  </svg>)
                  :
                  (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={25}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>)}
                </button>
                <div>{heart.count}</div>
              </div>
            </div>
            <div className="ms-auto">
              {houseData["has_model"] &&
                <div className="badge text-white p-2 mx-1" style={{backgroundColor:"#136E11"}}>
                모델하우스
              </div>}
            </div>
          </div>
        </div>

        {/* information */}
        <div className={`col-md-6`}>
          <h3 className="d-flex flex-column fw-bold my-3">
            {houseData["house_name"]}
          </h3>

          <div className="d-flex align-items-end my-4">
            {/* {(houseData["discount_rate"]>0) && //houseData.discount
            <>
              <span className={"fs-3 mx-1"} style={{color:"#BD4040"}}>{houseData["discount_rate"]}%</span>
              <span className={"text-decoration-line-through mx-1"} style={{color:"gray", textDecoration:""}}>{priceText(houseData["price"])}원</span>
            </>
            } */}
            <span className={"fs-4 mx-1"} style={{color:"#101648"}}>{priceText(houseData["final_price"])}원</span>
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
                className="fw-bold ps-0"
                style={{color:"#101648", border:"none"}}
                onClick={()=>{}}>
                {houseData["company"]}
              </div>
            </div>
          </div>
          
          <div className={""}>
            <select disabled={priceList?.filter((e)=>(e.category=="optional")).length==0} defaultValue={"선택옵션"} className="form-select my-4" aria-label="Default select example">
              {priceList && priceList.filter((e)=>(e.category=="optional"))?.map((e, i)=>(
                <option key={i} value={e.price}>{e.name} - {e.price}원</option>
              ))}
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
          {priceList && priceList.filter((e)=>(e.category=="included"))?.map((e, i)=>(
            <div key={i} className="me-1 mx-md-2 d-flex flex-column align-items-center">
              <div
                className="text-white rounded-3 text-center p-1 mb-3"
                style={{backgroundColor:"#136E11", width:"105px"}}>
                {e.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 추가로 발생가능한 비용 */}
      <div className="my-2 py-2">
        <span className="fw-bold fs-5" style={{color:"#101648"}}>추가로 발생가능한 비용💡</span>
        <span style={{color:"#101648"}}>(토지위치, 상태에 따라 차이 발생)</span>
        <div className="row">
          <div className="col-md-8 col-lg-9 d-flex justify-content-left flex-wrap my-2">
            {priceList && priceList.filter((e)=>(e.category=="additional"))?.map((e, i)=>(
              <div key={i} className="me-1 mx-md-2 d-flex flex-column align-items-center">
                <div
                  className="text-white rounded-3 text-center p-1"
                  style={{backgroundColor:"#BD4040", width:"105px"}}>
                  {e["name"]}
                </div>
                <span className="my-2 text-center">{priceText(e["price"])}원</span>
              </div>
            ))}
          </div>
          <div className="col-md-4 col-lg-3 align-self-center">
            <div className="d-flex flex-column align-items-center">
              <div><span className="fw-bold fs-5" style={{color:"#BD4040"}}>트러스 예상 가격</span></div>
              <div>
                <span className="fw-bold fs-5" style={{color:"#101648"}}>
                  {priceText(priceList?.filter((e)=>(e.category=="additional"))?.reduce((acc,cur)=>(acc+cur.price),0))}원
                </span>
              </div>
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