"use client";

import { getHouse } from "@/apis/HouseAPI";
import PostMenu from "@/components/posts/PostMenu";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { detailPriceText } from "@/lib/stringUtil";
import { useRouter } from "next/navigation";
import { getHousesHeartRemove, getHousesHeart } from "@/apis/HeartAPI";
import { alertSuccess } from "@/lib/alertUtil";
import { parseSpecificationInfo } from "@/lib/parseUtil";
import useQuery from "@/hooks/useQuery";
import { useUser } from "@/components/app/ContextSession";

type HouseComponentProps = {
  pid: number;
};

export function HouseClient(props: HouseComponentProps) {
  const router = useRouter();
  const { createQueryString } = useQuery();
  const { userContext } = useUser();

  const { pid } = props;
  const [houseData, setHouseData] = useState(undefined);
  const [imageData, setImageData] = useState(undefined);
  const [optionData, setOptionData] = useState(undefined);
  const [deliveryData, setDeliveryData] = useState(undefined);
  const [specificationData, setSpecificationData] = useState(undefined);
  const [heart, setHeart] = useState(0);
  const [selectedOptionData, setSelectedOptionData] = useState([]);

  const modelLink = "https://forms.gle/Qdq1HgPvcB76sRAW7";
  const gyeonjeokLink = `${"/planning"}?${createQueryString("house_id", pid.toString())}`; //"https://forms.gle/WhzuLumaL6C6TFu69";

  // house
  useEffect(() => {
    (async () => {
      const [data, error] = await getHouse(pid);
      if (error) {
        console.error(error);
        return;
      }

      const JSONSpecificityInfo = JSON.parse(data.data[0]["house_info"]["specificity_info"]);
      const asdf = [];
      if (JSONSpecificityInfo["default"]) asdf.push(JSONSpecificityInfo["default"]);
      if (JSONSpecificityInfo["etc"]) asdf.push(JSONSpecificityInfo["etc"]);

      setHouseData({
        ...data.data[0]["house_info"],
        specificity_info: asdf.join(", "),
      });
      setImageData(data.data[0]["house_image"]);
      setOptionData(data.data[0]["option_info"]);
      setSpecificationData(parseSpecificationInfo(data.data[0]["house_info"]["specification_info"]));
      setDeliveryData(JSON.parse(data.data[0]["house_info"]["delivery_unavailable"]).join(", "));
      setHeart(data.data[0]["house_info"]["like_count"]);
    })();
  }, []);

  // // price
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

  const ClickHeart = useCallback(async () => {
    if (userContext) {
      const heartParams = { house_id: pid, user_id: userContext.uid };

      if (heart > 0) {
        const [response, error] = await getHousesHeartRemove({ house_id: pid });
        if (error) console.log(error);
        setHeart(heart - 1);
      } else {
        const [response, error] = await getHousesHeart({ house_id: pid });
        if (error) console.log(error);
        console.log(response);
        setHeart(heart + 1);
      }
    } else {
      alertSuccess("로그인이 필요한 서비스입니다.", "로그인해주세요!");
    }
  }, [heart]);

  return houseData ? (
    <>
      {/* 제목 */}
      <div className={`row mt-4`}>
        {/* image */}
        <div className="col-md-6">
          <Image
            className="w-100 rounded-5 p-1"
            style={{ objectFit: "cover" }}
            src={imageData["representative_images"][0]}
            alt="main BoardComponent"
            width={400}
            height={450}
          />
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
                <button className="btn py-0 border-0" onClick={ClickHeart}>
                  {heart ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={25}>
                      <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      width={25}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  )}
                </button>
                <div>{heart}</div>
              </div>
            </div>
            <div className="ms-auto">
              {houseData["has_model"] == "1" && (
                <div className="badge text-white p-2 mx-1" style={{ backgroundColor: "#136E11" }}>
                  모델하우스
                </div>
              )}
              {houseData["is_hut"] == "1" && (
                <div className="badge text-white p-2 mx-1" style={{ backgroundColor: "#136E11" }}>
                  농막주택
                </div>
              )}
            </div>
          </div>
        </div>

        {/* information */}
        <div className={`col-md-6`}>
          <h3 className="d-flex flex-column fw-bold my-3">{houseData["house_name"]}</h3>

          <div className="d-flex align-items-end my-4">
            {houseData["discount_rate"] > 0 && ( //houseData.discount
              <>
                <span className={"fs-3 mx-1"} style={{ color: "#BD4040" }}>
                  {houseData["discount_rate"]}%
                </span>
                <span className={"text-decoration-line-through mx-1"} style={{ color: "gray", textDecoration: "" }}>
                  {houseData["price"]}
                </span>
              </>
            )}
            <span className={"fs-4 mx-1"} style={{ color: "#101648" }}>
              {detailPriceText(houseData["final_price"])}
            </span>
            <span style={{ color: "#101648" }}>(부가세 포함)</span>
          </div>

          <div className="d-flex flex-column">
            <div className="d-flex align-items-center">
              <div className={"fs-5 fw-bold"} style={{ color: "#101648", width: 100 }}>
                평수
              </div>
              <span style={{ color: "#101648" }}>{houseData["total_floor_area"].toFixed(1)}평</span>
            </div>
            <div className="d-flex align-items-center">
              <span className={"fs-5 fw-bold"} style={{ color: "#101648", width: 100 }}>
                방
              </span>
              <span style={{ color: "#101648" }}>{houseData["room_count"]}개</span>
            </div>
            <div className="d-flex align-items-center">
              <span className={"fs-5 fw-bold"} style={{ color: "#101648", width: 100 }}>
                화장실
              </span>
              <span style={{ color: "#101648" }}>{houseData["toilet_count"]}개</span>
            </div>
            <div className="d-flex align-items-center">
              <span className={"fs-5 fw-bold"} style={{ color: "#101648", width: 100 }}>
                AS기간
              </span>
              <span style={{ color: "#101648" }}>{houseData["warranty"]}</span>
            </div>
            <div className="d-flex align-items-center">
              <span className={"fs-5 fw-bold"} style={{ color: "#101648", width: 100 }}>
                판매자
              </span>
              <div className="fw-bold ps-0" style={{ color: "#101648", border: "none" }} onClick={() => {}}>
                {houseData["seller_nickname"]}
              </div>
            </div>
          </div>

          <div className={""}>
            <select
              onChange={(ee) => {
                if (Number(ee.target.value) >= 0 && !selectedOptionData.includes(optionData[Number(ee.target.value)])) {
                  setSelectedOptionData((oldValue) => [...oldValue, optionData[ee.target.value]]);
                }
              }}
              disabled={optionData?.length == 0}
              defaultValue={"선택옵션"}
              className="form-select my-4"
              aria-label="Default select example"
            >
              <option value={-1}>해당사항 없음</option>
              {optionData &&
                optionData.map((e, i) => (
                  <option key={i} value={i}>
                    {" "}
                    {e["option_type"]} - {e["option_product_name"]} ({detailPriceText(e["option_product_price"])})
                  </option>
                ))}
            </select>

            {/* 선택된 옵션 */}
            <div className="mb-5">
              {selectedOptionData &&
                selectedOptionData.map((e, i) => (
                  <div key={i} className="d-flex align-items-center">
                    <div
                      className="btn me-3"
                      onClick={() => {
                        setSelectedOptionData((oldValue) => oldValue.filter((_, j) => j != i));
                      }}
                    >
                      X
                    </div>
                    <div>
                      {e["option_type"]} - {e["option_product_name"]} ({detailPriceText(e["option_product_price"])})
                    </div>
                  </div>
                ))}
            </div>

            <div className={"row g-3"}>
              <div className="col-6">
                <div
                  className="w-100 h-100 btn text-white py-3 d-flex justify-content-center align-items-center"
                  onClick={() => {
                    router.push(modelLink);
                  }}
                  style={{ backgroundColor: "#101648" }}
                >
                  <span className="fs-5 fw-bold" style={{ wordBreak: "keep-all" }}>
                    모델하우스 예약하기
                  </span>
                </div>
              </div>
              <div className="col-6">
                <div
                  className="w-100 h-100 btn text-white py-3 d-flex justify-content-center align-items-center"
                  style={{ backgroundColor: "#101648" }}
                  onClick={() => {
                    router.push(gyeonjeokLink);
                  }}
                >
                  <span className="fs-5 fw-bold" style={{ wordBreak: "keep-all" }}>
                    견적 문의하기
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 가격에 포함된 서비스 */}
      {/* <div className="my-2 py-2">
        <span className="fw-bold fs-5" style={{color:"#101648"}}>가격에 포함된 서비스</span>
        <div className="d-flex justify-content-left flex-wrap my-2">
          {optionData && optionData.filter((e)=>(e.category=="included"))?.map((e, i)=>(
            <div key={i} className="me-1 mx-md-2 d-flex flex-column align-items-center">
              <div
                className="text-white rounded-3 text-center p-1 mb-3"
                style={{backgroundColor:"#136E11", width:"105px"}}>
                {e.name}
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* 추가로 발생가능한 비용 */}
      {/* <div className="my-2 py-2">
        <span className="fw-bold fs-5" style={{color:"#101648"}}>추가로 발생가능한 비용💡</span>
        <span style={{color:"#101648"}}>(토지위치, 상태에 따라 차이 발생)</span>
        <div className="row">
          <div className="col-md-8 col-lg-9 d-flex justify-content-left flex-wrap my-2">
            {optionData && optionData.filter((e)=>(e.category=="additional"))?.map((e, i)=>(
              <div key={i} className="me-1 mx-md-2 d-flex flex-column align-items-center">
                <div
                  className="text-white rounded-3 text-center p-1"
                  style={{backgroundColor:"#BD4040", width:"105px"}}>
                  {e["name"]}
                </div>
                <span className="my-2 text-center">{detailPriceText(e["price"])}</span>
              </div>
            ))}
          </div>
          <div className="col-md-4 col-lg-3 align-self-center">
            <div className="d-flex flex-column align-items-center">
              <div><span className="fw-bold fs-5" style={{color:"#BD4040"}}>트러스 예상 가격</span></div>
              <div>
                <span className="fw-bold fs-5" style={{color:"#101648"}}>
                  {detailPriceText(optionData?.filter((e)=>(e.category=="additional"))?.reduce((acc,cur)=>(acc+cur.price),0))}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div> */}

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

      {/* 상세정보 */}
      <div className="my-5 d-flex flex-column justify-content-center">
        <h4 className="fw-bold mb-4" style={{ color: "#101648" }}>
          제품사진
        </h4>
        {/* 외부 사진 */}
        <h5 className="fw-bold mb-4" style={{ color: "#101648" }}>
          외부 사진
        </h5>
        <div className="mb-4 d-flex flex-nowrap overflow-auto">
          {imageData["external_images"] &&
            imageData["external_images"].map((e, i) => (
              <img key={i} alt={`external_images_${i}`} src={e} height={500} />
            ))}
        </div>
        {/* 내부 사진 */}
        <h5 className="fw-bold mb-4" style={{ color: "#101648" }}>
          내부 사진
        </h5>
        <div className="mb-4 d-flex flex-nowrap overflow-auto">
          {imageData["internal_images"] &&
            imageData["internal_images"].map((e, i) => (
              <img key={i} alt={`internal_images_${i}`} src={e} height={500} />
            ))}
        </div>
      </div>

      {/* 설계구조 */}
      <div className="my-5 d-flex flex-column justify-content-center">
        <h4 className="fw-bold mb-4" style={{ color: "#101648" }}>
          설계구조
        </h4>
        {/* 평면도 */}
        <h5 className="fw-bold mb-4" style={{ color: "#101648" }}>
          평면도
        </h5>
        <div className="mb-4 d-flex flex-nowrap overflow-auto">
          {imageData["floor_plan_images"] &&
            imageData["floor_plan_images"].map((e, i) => (
              <img key={i} alt={`floor_plan_images_${i}`} src={e} height={500} />
            ))}
        </div>
        {/* 입면도 */}
        <h5 className="fw-bold mb-4" style={{ color: "#101648" }}>
          입면도
        </h5>
        <div className="mb-4 d-flex flex-nowrap overflow-auto">
          {imageData["elevation_plan_images"] &&
            imageData["elevation_plan_images"].map((e, i) => (
              <img key={i} alt={`elevation_plan_images_${i}`} src={e} height={500} />
            ))}
        </div>
      </div>

      <div className="py-4" style={{ borderTopStyle: "solid", borderTopColor: "#101648", borderTopWidth: "2px" }}>
        {/* 상세 정보 */}
        <div className={"d-flex flex-column my-5"}>
          <h3 className="fw-bold" style={{ color: "#101648" }}>
            상세 정보
          </h3>
          <div className="my-1 row">
            <div className="fw-bold fs-5 fs-5 col-5" style={{ color: "#101648" }}>
              제품명
            </div>
            <div className="col-7 fs-5" style={{ color: "#101648" }}>
              {houseData["house_name"]}
            </div>
          </div>
          <div className="my-1 row">
            <div className="fw-bold fs-5 col-5" style={{ color: "#101648" }}>
              실제 사용 평수
            </div>
            <div className="col-7 fs-5" style={{ color: "#101648" }}>
              {houseData["total_floor_area"].toFixed(1)}평
            </div>
          </div>
          <div className="my-1 row">
            <div className="fw-bold fs-5 col-5" style={{ color: "#101648" }}>
              건축면적
            </div>
            <div className="col-7 fs-5" style={{ color: "#101648" }}>
              {houseData["building_area"].toFixed(1)}㎡
            </div>
          </div>
          <div className="my-1 row">
            <div className="fw-bold fs-5 col-5" style={{ color: "#101648" }}>
              방
            </div>
            <div className="col-7 fs-5" style={{ color: "#101648" }}>
              {houseData["room_count"]}개
            </div>
          </div>
          <div className="my-1 row">
            <div className="fw-bold fs-5 col-5" style={{ color: "#101648" }}>
              화장실
            </div>
            <div className="col-7 fs-5" style={{ color: "#101648" }}>
              {houseData["toilet_count"]}개
            </div>
          </div>
          <div className="my-1 row">
            <div className="fw-bold fs-5 col-5">예상 소요기간(제작일 기준)</div>
            <div className="col-7 fs-5">{houseData["estimate_duration"]}개월</div>
          </div>
          <div className="my-1 row">
            <div className="fw-bold fs-5 col-5" style={{ color: "#101648" }}>
              AS 보증기간
            </div>
            <div className="col-7 fs-5" style={{ color: "#101648" }}>
              {houseData["warranty"]}
            </div>
          </div>
          <div className="my-1 row">
            <div className="fw-bold fs-5 col-5" style={{ color: "#101648" }}>
              모델하우스
            </div>
            <div className="col-7 fs-5" style={{ color: "#101648" }}>
              {houseData["has_model"] ? "있음" : "없음"}
            </div>
          </div>
          <div className="my-1 row">
            <div className="fw-bold fs-5 col-5" style={{ color: "#101648" }}>
              특이사항
            </div>
            <div className="col-7 fs-5" style={{ color: "#101648" }}>
              {houseData["specificity_info"]}
            </div>
          </div>
          <div className="d-flex flex-column">
            <div className="fw-bold fs-5" style={{ color: "#101648" }}>
              제품 소개
            </div>
            <div className="fs-5" style={{ color: "#101648" }}>
              {houseData["house_explanation"]}
            </div>
          </div>

          {/* 제품 사양 */}
          <div className="my-5">
            <div className={"d-flex flex-column mt-4"}>
              <h3 className="fw-bold" style={{ color: "#101648" }}>
                제품 사양
              </h3>

              <div className="my-1 row">
                <div className="fw-bold fs-5 col-5" style={{ color: "#101648" }}>
                  골조 구조
                </div>
                <div className="col-7 fs-5" style={{ color: "#101648" }}>
                  {specificationData["framework"]}
                </div>
              </div>

              {/* 외장재 */}
              <div className="my-1 row">
                <div className="fw-bold fs-5 col-5" style={{ color: "#101648" }}>
                  외장재
                </div>
                <div className="col-7 fs-5" style={{ color: "#101648" }}>
                  {specificationData["exterior_material"]}
                </div>
              </div>

              {/* 지붕재 */}
              <div className="my-1 row">
                <div className="fw-bold fs-5 col-5" style={{ color: "#101648" }}>
                  지붕재
                </div>
                <div className="col-7 fs-5" style={{ color: "#101648" }}>
                  {specificationData["insulation_material"]}
                </div>
              </div>

              {/* 단열재 */}
              <div className="my-1 row">
                <div className="fw-bold fs-5 col-5" style={{ color: "#101648" }}>
                  단열재
                </div>
                <div className="col-7 fs-5" style={{ color: "#101648" }}>
                  {specificationData["roofing_material"]}
                </div>
              </div>

              {/* 내장재 */}
              <div className="my-1 row">
                <div className="fw-bold fs-5 col-5" style={{ color: "#101648" }}>
                  내장재
                </div>
                <div className="col-7 fs-5" style={{ color: "#101648" }}>
                  {specificationData["interior_material"]}
                </div>
              </div>

              {/* 창호 */}
              <div className="my-1 row">
                <div className="fw-bold fs-5 col-5" style={{ color: "#101648" }}>
                  창호
                </div>
                <div className="col-7 fs-5" style={{ color: "#101648" }}>
                  {specificationData["window"]}
                </div>
              </div>

              {/* 난방 */}
              <div className="my-1 row">
                <div className="fw-bold fs-5 col-5" style={{ color: "#101648" }}>
                  난방
                </div>
                <div className="col-7 fs-5" style={{ color: "#101648" }}>
                  {specificationData["heating"]}
                </div>
              </div>

              {/* 가구 */}
              <div className="my-1 row">
                <div className="fw-bold fs-5 col-5" style={{ color: "#101648" }}>
                  가구
                </div>
                <div className="col-7 fs-5" style={{ color: "#101648" }}>
                  {specificationData["furniture"]}
                </div>
              </div>

              {/* 화장실 */}
              <div className="my-1 row">
                <div className="fw-bold fs-5 col-5" style={{ color: "#101648" }}>
                  화장실
                </div>
                <div className="col-7 fs-5" style={{ color: "#101648" }}>
                  {specificationData["toilet"]}
                </div>
              </div>

              {/* 내장 */}
              <div className="my-1 row">
                <div className="fw-bold fs-5 col-5" style={{ color: "#101648" }}>
                  내장
                </div>
                <div className="col-7 fs-5" style={{ color: "#101648" }}>
                  {specificationData["interior_material"]}
                </div>
              </div>

              {/* 주방 */}
              <div className="my-1 row">
                <div className="fw-bold fs-5 col-5" style={{ color: "#101648" }}>
                  주방
                </div>
                <div className="col-7 fs-5" style={{ color: "#101648" }}>
                  {specificationData["kitchen"]}
                </div>
              </div>

              {/* 조명 */}
              <div className="my-1 row">
                <div className="fw-bold fs-5 col-5" style={{ color: "#101648" }}>
                  조명
                </div>
                <div className="col-7 fs-5" style={{ color: "#101648" }}>
                  {specificationData["lighting"]}
                </div>
              </div>

              {/* 기타 */}
              <div className="my-1 row">
                <div className="fw-bold fs-5 col-5" style={{ color: "#101648" }}>
                  기타
                </div>
                <div className="col-7 fs-5" style={{ color: "#101648" }}>
                  {specificationData["etc_info"]}
                </div>
              </div>

              {/* 사양 설명 */}
              <div className="my-1 d-flex flex-column">
                <div className="fw-bold fs-5" style={{ color: "#101648" }}>
                  사양 설명
                </div>
                <div className="fs-5" style={{ color: "#101648" }}>
                  {specificationData["specification_description"]}
                </div>
              </div>
            </div>
          </div>

          {/* 가격 정보 */}
          <div className="my-5">
            <div className={"d-flex flex-column mt-4"}>
              <h3 className="fw-bold" style={{ color: "#101648" }}>
                가격 정보
              </h3>

              {/* 기본 제품 */}
              <div className="my-1 row">
                <div className="fw-bold fs-5 col-5" style={{ color: "#101648" }}>
                  기본 제품
                </div>
                <div className="col-7 fs-5" style={{ color: "#101648" }}>
                  {detailPriceText(houseData["final_price"])}
                </div>
              </div>

              <h4 className="mt-5 fw-bold" style={{ color: "#101648" }}>
                (옵션)
              </h4>
              {optionData &&
                optionData.map((e, i) => (
                  <div className="my-1 row" key={i}>
                    <div className="fw-bold fs-5 col-5" style={{ color: "#101648" }}>
                      {e["option_product_name"]}
                    </div>
                    <div className="col-7 fs-5" style={{ color: "#101648" }}>
                      {detailPriceText(e["option_product_price"])}
                    </div>
                  </div>
                ))}

              {/* 가격 변동 사항 */}
              <div className="my-5 d-flex flex-column">
                <div className="fw-bold fs-5" style={{ color: "#101648" }}>
                  기타 가격 변동 사항
                </div>
                <div className="fs-5" style={{ color: "#101648" }}>
                  {houseData["price_variation"]}
                </div>
              </div>
            </div>
          </div>

          {/* 배달 관련 정보 */}
          <div className="mb-5">
            <div className={"d-flex flex-column mt-4"}>
              <h3 className="fw-bold" style={{ color: "#101648" }}>
                배달 지역 정보
              </h3>
              <div className="fs-5" style={{ color: "#101648" }}>
                {deliveryData}
              </div>
            </div>
          </div>

          {/* 판매자 정보
          <div>
            
          </div> */}
        </div>
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
      {/* <PostMenu
        title={"더 많은 주택들을 구경해보세요!"}
        routeUrl={"/house"}
        routeText={"더보기"}
        horizontalScroll={true}
      >
        <HousewList numShowItems={6} houseData={[]} count={0} />
      </PostMenu> */}
    </>
  ) : (
    <div>로딩 중</div>
  );
}
