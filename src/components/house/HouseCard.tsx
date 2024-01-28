"use client"

import { truncatedText } from "@/lib/stringUtil";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CSSProperties } from "react";

type MainPagePostProps = {
  data: DataProps
  className?: string
  style?: CSSProperties
}

type DataProps = {
  idx: number,
  image: string,
  title: string,
  price: string,
  floorSpace: string
}

export default function HouseCard(props: MainPagePostProps) {
  const router = useRouter();
  const { data, className, style } = props;

  return (
    <div className="col-3">
      <div className="card d-flex flex-column align-items-center w-100">
        <Image
          className="rounded-top-2 w-100 m-0"
          onClick={()=>{router.push(`/house/${data.idx}`);}}
          src={`${data?.image?data.image:""}`}
          alt={`${data.title}`}
          width={250}
          height={250}
          style={{objectFit:"cover", height:"300px"}}
          placeholder={"blur"}
          blurDataURL={"/blur_image.png"} />
        <div
          className="card-body w-100 pt-2 fs-6"
          style={{height:"250px", backgroundColor:"lightgray"}}>
          <div className="d-flex justify-content-left mb-2">
            {1 && <div
              className="badge me-1 text-white rounded-3 text-center align-self-center"
              style={{backgroundColor:"#101648"}}>
              모듈러
            </div>}
            {1 && <div
              className="badge me-1 text-white rounded-3 text-center align-self-center"
              style={{backgroundColor:"#136E11"}}>
              모델하우스
            </div>}
          </div>
          <h5 className="card-title fw-bold" style={{color:"#101648"}}>{truncatedText(data.title,12)}</h5>
          <div className="d-flex flex-column fw-normal">
            <div className="d-flex justify-content-between text-nowrap">
              <div>
                <span className="fs-5 fw-bold" style={{color:"#BD4040"}}>10%</span>
                <span className="text-muted text-decoration-line-through">9900만원</span>
              </div>
              <div className="fs-5 fw-bold">{data.price}만원</div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="fw-bold">평수</div>
              <div>{data.floorSpace}평</div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="fw-bold">방</div>
              <div>{data.floorSpace}개</div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="fw-bold">화장실</div>
              <div>{data.floorSpace}개</div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="fw-bold">AS기간</div>
              <div>{data.floorSpace}개월</div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="fw-bold">판매자</div>
              <div>디자인아담</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}