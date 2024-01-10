"use client"

import { getHouse } from "@/api/HouseAPI";
import DetailPost from "@/components/house/DetailPost";
import { HouseList } from "@/components/house/HouseList";
import MainPagePost from "@/components/house/MainPagePost";
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
  ratingPost: RatingPost[]
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
      <div className={`mt-5 mb-3`}>
        <div className="fs-1 fw-bold">{houseData.title}</div>
        <div className="d-flex justify-content-between">
          <div className="fs-5">
            {`${houseData.price}만원 ${houseData.floorSpace}평 방${houseData.roomNumber} 화장실${houseData.toiletNumber} 다락${houseData.hasLoft?"포함":"미포함"}`}
          </div>
          <div className="fs-5">
            {houseData.tag?.map((e)=>(`#${e}`)).join(" ")}
          </div>
        </div>
      </div>

      {/* 사진 */}
      <div className={`d-flex justify-content-center`}>
        <div className={`row w-100`}>
          <div className="col-8 m-0 p-0">
            <Image
              className="rounded-5 w-100 p-1"
              style={{objectFit:"cover"}}
              src={houseData.image}
              alt="main BoardComponent"
              width={600}
              height={600} />

          </div>

          <div className="col-4 m-0 p-0">
            <Image
              className="rounded-5 w-100 p-1"
              style={{objectFit:"cover"}}
              src={houseData.subImage1} 
              alt="sub post 1"
              width={300}
              height={300} />
            <Image
              className="rounded-5 w-100 p-1"
              style={{objectFit:"cover"}}
              src={houseData.subImage2} 
              alt="sub post 2"
              width={300}
              height={300} />
          </div>
        </div>
      </div>
      {/* 상세정보 */}
      <div>
        <PostMenu
          title={"집 상세정보"}>
          <div className="d-flex justify-content-center">
            <DetailPost src={houseData.buildingImage}>실외 사진</DetailPost>
            <DetailPost src={houseData.blueprint}>실내 사진</DetailPost>
            <DetailPost src={houseData.costImage}>설계구조</DetailPost>
            <DetailPost src={houseData.officeImage}>판매자정보</DetailPost>
          </div>
        </PostMenu>
      </div>

      {/* 상세설명 */}
      <div>
        <div className="collapse collapsedExplanation row mb-3" id={"collapsedExplanation"}>
          <Image
            alt="main post"
            src={houseData.detailImage}
            width={600}
            height={600}
          />
        </div>
        <button
          type="button"
          style={{backgroundColor:"#101648"}}
          className={`w-100 btn px-4 py-2 btn btn-lg rounded-lg fw-bold text-white`}
          data-bs-toggle="collapse"
          data-bs-target={`#collapsedExplanation`}
          aria-controls={`collapsedExplanation`}
          aria-expanded="false"
          >
          상세정보 펼쳐보기
        </button>
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
          <div>
            평점이 없습니다. 가장 먼저 리뷰를 남겨보세요!
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