"use client";

import { cardPriceText } from "@/lib/stringUtil";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CSSProperties } from "react";

type MainPagePostProps = {
  data: any;
  className?: string;
  style?: CSSProperties;
};

export default function HouseCard(props: MainPagePostProps) {
  const router = useRouter();
  const { data } = props;

  return (
    <div className="col-md-4 col-lg-3">
      <div className="card d-flex flex-column align-items-center w-100" style={{border:"none"}}>
        <Image
          className="rounded-top-3 w-100 m-0"
          onClick={() => {
            router.push(`/house/${data["house_id"]}`);
          }}
          src={data["house_img_url"] || "/blur_image.png"}
          alt={`${data["house_explanation"]}`}
          width={220}
          height={220}
          style={{ objectFit: "cover", height: "220px", borderRadius:"10px"}}
          placeholder={"blur"}
          blurDataURL={"/blur_image.png"}
        />
        <div className="card-body w-100 pt-1 px-2 fs-6" style={{ height: "210px", border:"none"}}>



          
          
          <div className="d-flex flex-column fw-normal">
            
            <div style={{fontSize:"15px", fontWeight:"400", color:"gray"}}>
              {data["company_name"]}
            </div>
            

            <h5
            className="card-title fw-regular mb-1 text-nowrap"
            style={{overflow: "hidden", textOverflow: "ellipsis", marginBottom:"10px"}}
            >
            {data["house_name"]}
            </h5>

            <div className="row mb-2">
              <div style={{width:"auto"}}>
                {data["discount_rate"] > 0 && (
                  <div className="fs-5 fw-bold" style={{color: "#BD4040" }}>
                    {data["discount_rate"]}%
                  </div>
                )}
              </div>
              <div style={{width:"auto"}}>
                <div className="fs-5 fw-bold">{cardPriceText(data["final_price"])}</div>
              </div>
            </div>

            <div className="row" style={{marginBottom:"10px"}}>
              <div className="d-flex justify-content-between" style={{width:"33%", marginRight:"5px"}}>
                <Image
                  src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/refresh.png"}
                  width={19}
                  height={19}
                  alt="아이콘"
                  style={{marginTop:"2px"}}
                />
                <div>{data["total_floor_area"]?.toFixed(1) || "NaN"}평</div>
              </div>
              <div className="d-flex justify-content-between" style={{width:"29%", marginRight:"5px"}}>
                <Image
                  src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/refresh.png"}
                  width={19}
                  height={19}
                  alt="아이콘"
                  style={{marginTop:"2px"}}
                />
                <div>{data["room_count"]}개</div>
              </div>
              <div className="d-flex justify-content-between" style={{width:"29%", marginRight:"5px"}}>
                <Image
                  src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/refresh.png"}
                  width={19}
                  height={19}
                  alt="아이콘"
                  style={{marginTop:"2px"}}
                />
                <div>{data["toilet_count"]}개</div>
              </div>
              <div className="d-flex justify-content-between" style={{width:"33%", marginRight:"5px"}}>
                <Image
                  src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/refresh.png"}
                  width={19}
                  height={19}
                  alt="아이콘"
                  style={{marginTop:"2px"}}
                />
                {/*view count 들어가야함 */}
                <div>{data["total_floor_area"]?.toFixed(1) || "NaN"}0</div>
              </div>
              <div className="d-flex justify-content-between" style={{width:"29%", marginRight:"5px"}}>
                <Image
                  src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/refresh.png"}
                  width={19}
                  height={19}
                  alt="아이콘"
                  style={{marginTop:"2px"}}
                />
                {/*like count 들어가야함 */}
                <div>{data["room_count"]},000</div>
              </div>
              
            </div>
            
            {/*<div className="d-flex justify-content-between">
              <div className="fw-bold">AS기간</div>
              <div>{data["warranty"]}</div>
            </div>*/}
            
          </div>


          <div className="d-flex justify-content-left mb-2" style={{ height: "20px" }}>
            {data["has_model"] == "1" && (
              <div
                className="badge me-1 text-white rounded-3 text-center align-self-center"
                style={{ backgroundColor: "#136E11", fontWeight:"500"}}
              >
                모델하우스
              </div>
            )}
            {data["is_hut"] == "1" && (
              <div
                className="badge me-1 text-white rounded-3 text-center align-self-center"
                style={{ backgroundColor: "#3284e8"}}
              >
                농막주택
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
