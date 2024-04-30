"use client"

import { cardPriceText } from "@/lib/stringUtil";
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
  const { data } = props;

  console.log(data)

  return (

    <div className="col-md-4 col-lg-3">
      <div className="card d-flex flex-column align-items-center w-100">
        {/* <button
          className="btn text-white me-auto"
          style={{backgroundColor:"#101648"}}>
          편집
        </button> */}
        <Image
          className="rounded-top-2 w-100 m-0"
          onClick={()=>{router.push(`/house/${data["house_id"]}`);}}
          src={data["house_img_url"] || "/blur_image.png"}
          alt={`${data["house_explanation"]}`}
          width={220}
          height={220}
          style={{objectFit:"cover", height:"220px"}}
          placeholder={"blur"}
          blurDataURL={"/blur_image.png"} />
        <div
          className="card-body w-100 pt-1 px-2 fs-6"
          style={{height:"230px", backgroundColor:"lightgray"}}>
          <div className="d-flex justify-content-left mb-2" style={{height:"20px"}}>
            {data["has_model"]=="1" && <div
              className="badge me-1 text-white rounded-3 text-center align-self-center"
              style={{backgroundColor:"#136E11"}}>
              모델하우스
            </div>}

            {data["is_hut"]=="1" && <div
              className="badge me-1 text-white rounded-3 text-center align-self-center"
              style={{backgroundColor:"#136E11"}}>
              농막주택
            </div>}
          </div>
          <h4
            className="card-title fw-bold mb-0 text-nowrap"
            style={{color:"#101648", overflow:"hidden", textOverflow:"ellipsis"}}>
            {data["house_name"]}
          </h4>
          <div className="d-flex flex-column fw-normal">
            <div className="d-flex justify-content-between">
              {(data["discount_rate"]>0) && <div className="fs-5 fw-bold" style={{color:"#BD4040"}}>{data["discount_rate"]}%</div>}
                <div className="ms-auto">
                  {(data["discount_rate"]>0) && <div className="text-muted text-end text-decoration-line-through m-0 p-0" style={{fontSize:"14px", height:"14px"}}>{cardPriceText(data["base_price"])}</div>}
                  <div className="fs-6 fw-bold text-end">{cardPriceText(data["final_price"])}</div>
                </div>
              
            </div>
            <div className="d-flex justify-content-between">
              <div className="fw-bold">평수</div>
              <div>{data["total_floor_area"].toFixed(1)}평</div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="fw-bold">방</div>
              <div>{data["room_count"]}개</div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="fw-bold">화장실</div>
              <div>{data["toilet_count"]}개</div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="fw-bold">AS기간</div>
              <div>{data["warranty"]}</div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="fw-bold">판매자</div>
              <div>{data["company_name"]}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}