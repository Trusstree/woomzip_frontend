"use client"

import { priceText } from "@/lib/stringUtil";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CSSProperties } from "react";

type MainPagePostProps = {
  data: any
  className?: string
  style?: CSSProperties
}

export default function MyHouseCard(props: MainPagePostProps) {
  const router = useRouter();
  const { data, className, style } = props;

  return (
    <div className="col-md-6 col-lg-4 col-xl-3">
      <div className="card d-flex flex-column align-items-center w-100">
        <div>
          <button
            className="btn text-white"
            style={{backgroundColor:"#101648"}}>
            편집
          </button>
          <Image
            className="rounded-top-2 w-100 m-0"
            onClick={()=>{router.push(`/house/${data.idx}`);}}
            src={`${data["thumbnail"]}`}
            alt={`${data["title"]}`}
            width={220}
            height={220} 
            style={{objectFit:"cover", height:"220px"}}
            placeholder={"blur"}
            blurDataURL={"/blur_image.png"} />
        </div>
        <div
          className="card-body w-100 pt-1 px-2 fs-6"
          style={{height:"230px", backgroundColor:"lightgray"}}>
          <div className="d-flex justify-content-left mb-2" style={{height:"20px"}}>
            {data["moduler"]=="yes" && <div
              className="badge me-1 text-white rounded-3 text-center align-self-center"
              style={{backgroundColor:"#101648"}}>
              모듈러
            </div>}
            {data["hasModel"]=="yes" && <div
              className="badge me-1 text-white rounded-3 text-center align-self-center"
              style={{backgroundColor:"#136E11"}}>
              모델하우스
            </div>}
          </div>
          <h4
            className="card-title fw-bold mb-0 text-nowrap"
            style={{color:"#101648", overflow:"hidden", textOverflow:"ellipsis"}}>
            {data.title}
          </h4>
          <div className="d-flex flex-column fw-normal">
            <div className="d-flex justify-content-between">
              {(data["discount"]>0) && <div className="fs-5 fw-bold" style={{color:"#BD4040"}}>{data.discount}%</div>}
                <div className="ms-auto">
                  {(data["discount"]>0) && <div className="text-muted text-right text-decoration-line-through m-0 p-0" style={{fontSize:"14px", height:"14px"}}>{priceText(data["price"])}원</div>}
                  <div className="fs-6 fw-bold text-end">{priceText(data.price*(100-data.discount)*0.01)}원</div>
                </div>
              
            </div>
            <div className="d-flex justify-content-between">
              <div className="fw-bold">평수</div>
              <div>{data["floorSpace"]}평</div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="fw-bold">방</div>
              <div>{data["roomNumber"]}개</div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="fw-bold">화장실</div>
              <div>{data["toiletNumber"]}개</div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="fw-bold">AS기간</div>
              <div>{data["afterService"]}개월</div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="fw-bold">판매자</div>
              <div>{data["company"]}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}