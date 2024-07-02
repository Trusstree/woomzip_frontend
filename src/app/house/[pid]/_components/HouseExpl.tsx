"use client";

import RowText from "@/app/house/[pid]/_components/RowText";
import { ReviewInfo } from "@/components/house/ReviewInfo";
import useQuery from "@/hooks/useQuery";
import { detailPriceText } from "@/lib/stringUtil";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function HouseExpl({
  pid,
  deliveryData,
  houseData,
  specificationData,
  optionData,
}) {
  const { createQueryString } = useQuery();
  const router = useRouter();
  const gyeonjeokLink = `${"/planning"}?${createQueryString("house_id", pid.toString())}`;

  const elementA = useRef<HTMLDivElement>(null);
  const onMoveBoxA = () => {
    elementA.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const elementB = useRef<HTMLDivElement>(null);
  const onMoveBoxB = () => {
    elementB.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const elementC = useRef<HTMLDivElement>(null);
  const onMoveBoxC = () => {
    elementC.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const elementD = useRef<HTMLDivElement>(null);
  const onMoveBoxD = () => {
    elementD.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/*상품 네비게이션 */}
      <div
        className=" sticky-top"
        style={{
          backgroundColor: "white",
          borderBottom: "1px solid black",
          zIndex: 1,
        }}
      >
        <div className="container" style={{ height: "60px" }}></div>
        <div className="d-flex justify-content-between">
          <div className="btn" onClick={onMoveBoxA}>
            기본 정보
          </div>
          <div className="btn" onClick={onMoveBoxB}>
            상세 정보
          </div>
          <div className="btn" onClick={onMoveBoxC}>
            후기
          </div>
          <div className="btn" onClick={onMoveBoxD}>
            배송 정보
          </div>
        </div>
      </div>

      {/* 상세 정보 */}
      <div ref={elementA} className="w-full h-screen relative flex flex-col">
        <h5 style={{ margin: "100px 0 30px 0" }}>기본 정보</h5>
        <div style={{ fontSize: "16px", marginBottom: "40px" }}>
          {houseData["house_explanation"]}
        </div>

        <RowText name={"제품명"} data={houseData["house_name"]} />
        <hr style={{ border: "1px solid gray" }} />
        <RowText
          name={"실 사용 평수"}
          data={`${houseData["total_floor_area"].toFixed(1)}평`}
        />
        <hr style={{ border: "1px solid gray" }} />
        <RowText
          name={"건축면적"}
          data={`${houseData["building_area"].toFixed(1)}㎡`}
        />
        <hr style={{ border: "1px solid gray" }} />
        <RowText
          name={"제작 소요기간"}
          data={`${houseData["estimate_duration"]}개월`}
        />
        <hr style={{ border: "1px solid gray" }} />
        <RowText name={"AS 보증기간"} data={houseData["warranty"]} />
        <hr style={{ border: "1px solid gray" }} />
        <RowText
          name={"방문 가능한 모델하우스"}
          data={houseData["has_model"] ? "있음" : "없음"}
        />
        <hr style={{ border: "1px solid gray" }} />
        <RowText name={"특이사항"} data={houseData["specificity_info"]} />
        <hr style={{ border: "1px solid gray" }} />
      </div>

      {/* 제품 사양 */}
      <div ref={elementB} className="w-full h-screen relative flex flex-col">
        <h5 style={{ margin: "150px 0 30px 0" }}>상세 정보</h5>
        <div style={{ fontSize: "16px", marginBottom: "40px" }}>
          {specificationData["specification_description"]}
        </div>
        <RowText name={"골조 구조"} data={specificationData["framework"]} />
        <hr style={{ border: "1px solid gray" }} />
        <RowText
          name={"외장재"}
          data={specificationData["exterior_material"]}
        />
        <hr style={{ border: "1px solid gray" }} />
        <RowText
          name={"지붕재"}
          data={specificationData["insulation_material"]}
        />
        <hr style={{ border: "1px solid gray" }} />
        <RowText name={"단열재"} data={specificationData["roofing_material"]} />
        <hr style={{ border: "1px solid gray" }} />
        <RowText
          name={"내장재"}
          data={specificationData["interior_material"]}
        />
        <hr style={{ border: "1px solid gray" }} />
        <RowText name={"창호"} data={specificationData["window"]} />
        <hr style={{ border: "1px solid gray" }} />
        <RowText name={"난방"} data={specificationData["heating"]} />
        <hr style={{ border: "1px solid gray" }} />
        <RowText name={"포함된 가구"} data={specificationData["furniture"]} />
        <hr style={{ border: "1px solid gray" }} />
        <RowText name={"주방"} data={specificationData["kitchen"]} />
        <hr style={{ border: "1px solid gray" }} />
        <RowText name={"화장실"} data={specificationData["toilet"]} />
        <hr style={{ border: "1px solid gray" }} />
        <RowText name={"조명"} data={specificationData["lighting"]} />
        <hr style={{ border: "1px solid gray" }} />
        <RowText name={"기타"} data={specificationData["etc_info"]} />
        <hr style={{ border: "1px solid gray" }} />
      </div>

      <div
        ref={elementC}
        className="w-full h-screen relative flex flex-col"
        style={{ marginTop: "150px" }}
      >
        <ReviewInfo />
      </div>

      {/* 배송 정보 */}
      <div ref={elementD}>
        <h5 style={{ margin: "150px 0 30px 0" }}>배송 정보</h5>
        <div style={{ fontSize: "16px", marginBottom: "40px" }}>
          배송 비용은 배송 위치와 진입 환경에 따라 측정됩니다.
          <br />
          <br />
          토지 위치와 진입 환경에 따라{" "}
          <span style={{ color: "#314FC0", fontWeight: "600" }}>
            배송비가 최대 2.5배 추가될 수 있어요!
          </span>
          <br />
          <span style={{ color: "#314FC0", fontWeight: "600" }}>
            움집만의 내 집짓기 길잡이, AI 타잔
          </span>
          과 내 예상 배송비용을 꼭 확인해보세요!
          <br />
          <br />
          <span
            className="btn"
            onClick={() => {
              router.push(gyeonjeokLink);
            }}
            style={{ backgroundColor: "#314FC0", color: "white" }}
          >
            AI 타잔과 내 배송비 확인해보기
          </span>
        </div>

        <RowText name={"배송 불가능한 지역"} data={deliveryData} />
        <hr style={{ border: "1px solid gray" }} />
      </div>

      {/* 가격 정보 */}
      <div>
        <h5 style={{ margin: "150px 0 30px 0" }}>가격 정보</h5>
        <div style={{ fontSize: "16px", marginBottom: "40px" }}>
          <span style={{ color: "#314FC0", fontWeight: "600" }}>움집</span>의
          모든 제품과 옵션에는 원칙적으로 제작 도중 추가비용이 발생하지 않으니,
          안심하세요!
          <br />
          <span style={{ fontSize: "14px" }}>
            (단, 소비자의 변경 요청사항에 따른 추가 비용 발생 제외)
          </span>
          <br />
          <br />
          고지된 비용에 제품 제작을 제외한 부대 비용은 포함되어 있지 않아요.
          <br />
          인허가, 토목공사, 기초공사, 각종 인입 공사, 보험, 세금 등 지금 보고
          있는 비용에서{" "}
          <span style={{ color: "#314FC0", fontWeight: "600" }}>
            평균 약 30%정도가 추가되고 있어요!
          </span>
          <br />
          <span style={{ color: "#314FC0", fontWeight: "600" }}>
            움집만의 내 집짓기 길잡이, AI 타잔
          </span>
          과 내 예상 총 건축비용을 알아보세요!
          <br />
          <br />
          <span
            className="btn"
            onClick={() => {
              router.push(gyeonjeokLink);
            }}
            style={{ backgroundColor: "#314FC0", color: "white" }}
          >
            AI 타잔과 내 총 비용 확인해보기
          </span>
        </div>

        <RowText
          name={"기본 가격"}
          data={detailPriceText(houseData["final_price"])}
        />
        <hr style={{ border: "1px solid gray" }} />
        <RowText
          name={"기본 부가세(10%)"}
          data={detailPriceText(houseData["final_price"] / 10)}
        />
        <hr style={{ border: "1px solid gray" }} />
        <div
          className="col-4"
          style={{
            fontSize: "16px",
            fontWeight: "600",
            margin: "40px 0 20px 0",
          }}
        >
          옵션 가격
        </div>
        {optionData &&
          optionData.map((e, i) => (
            <>
              <RowText
                key={`r${i}`}
                name={e["option_product_name"]}
                data={detailPriceText(e["option_product_price"])}
              />
              <hr key={`h${i}`} style={{ border: "1px solid gray" }} />
            </>
          ))}
      </div>

      <div className="container" style={{ height: "100px" }}></div>

      {/* <div ref={elementD} className="w-full h-screen relative flex flex-col">
        <h5 style={{ margin: "150px 0 30px 0" }}>Q&A(5)</h5>
        <div style={{ marginBottom: "200px" }}>
          <div className="d-flex justify-content-between">
            <div style={{ fontSize: "16px", fontWeight: "600" }}>
              질문 제목입니다. 모듈러 주택 구매하려고 하는데 제주도는 진짜
              안되나요 제발 부탁입...
            </div>
            <div style={{ fontSize: "16px" }}>민서아빠 | 2024-06-12</div>
          </div>
          <hr style={{ border: "1px solid gray" }} />
          <div className="d-flex justify-content-between">
            <div style={{ fontSize: "16px", fontWeight: "600" }}>
              질문 제목입니다. 모듈러 주택 구매하려고 하는데 제주도는 진짜
              안되나요 제발 부탁입...
            </div>
            <div style={{ fontSize: "16px" }}>민서아빠 | 2024-06-12</div>
          </div>
          <hr style={{ border: "1px solid gray" }} />
          <div className="d-flex justify-content-between">
            <div style={{ fontSize: "16px", fontWeight: "600" }}>
              질문 제목입니다. 모듈러 주택 구매하려고 하는데 제주도는 진짜
              안되나요 제발 부탁입...
            </div>
            <div style={{ fontSize: "16px" }}>민서아빠 | 2024-06-12</div>
          </div>
          <hr style={{ border: "1px solid gray" }} />
          <div className="d-flex justify-content-between">
            <div style={{ fontSize: "16px", fontWeight: "600" }}>
              질문 제목입니다. 모듈러 주택 구매하려고 하는데 제주도는 진짜
              안되나요 제발 부탁입...
            </div>
            <div style={{ fontSize: "16px" }}>민서아빠 | 2024-06-12</div>
          </div>
          <hr style={{ border: "1px solid gray" }} />
          <div className="d-flex justify-content-between">
            <div style={{ fontSize: "16px", fontWeight: "600" }}>
              질문 제목입니다. 모듈러 주택 구매하려고 하는데 제주도는 진짜
              안되나요 제발 부탁입...
            </div>
            <div style={{ fontSize: "16px" }}>민서아빠 | 2024-06-12</div>
          </div>
          <hr style={{ border: "1px solid gray" }} />
        </div>
      </div> */}
    </>
  );
}
