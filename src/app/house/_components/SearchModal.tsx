"use client";

import FillteringButton from "@/app/house/_components/FillteringButton";
import MultiRangeSlider from "@/app/house/_components/MultiRangeSlider";
import ResetButton from "@/app/house/_components/ResetButton";
import SearchComponent from "@/app/house/_components/SearchComponent";

import useQuery from "@/hooks/useQuery";
import { cardPriceText } from "@/lib/stringUtil";

export function SearchModal() {
  const [minPrice, maxPrice, stepPrice] = [0, 300000000, 10000000];
  const [minArea, maxArea, stepArea] = [0, 30, 1];
  const { getParams } = useQuery();

  return (
    <div
      className="modal fade"
      id={`search_modal`}
      aria-labelledby={`search_modal_Label`}
      aria-hidden="true"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog" style={{ width: "60%", minWidth: "380px", opacity: "0.85" }}>
        <div className="modal-content" style={{ width: "100%", minWidth: "300px" }}>
          <div className="modal-header">
            <h5 className="modal-title" id={`search_modal_Label`}>
              필터링
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div style={{ width: "100%", margin: "20px 0" }}>
              <div style={{ margin: "0 10px", fontWeight: "600" }}>검색</div>
              <SearchComponent />
            </div>
            <div style={{ width: "100%", margin: "20px 0" }}>
              <div style={{ margin: "0 10px", fontWeight: "600" }}>가격</div>
              <div className="ms-3">
                {getParams().get("min_price") && cardPriceText(getParams().get("min_price"))} ~{" "}
                {getParams().get("max_price") && cardPriceText(getParams().get("max_price"))}
              </div>
              <MultiRangeSlider
                minName={"min_price"}
                maxName={"max_price"}
                min={minPrice}
                max={maxPrice}
                step={stepPrice}
              />
            </div>
            <div style={{ width: "100%", margin: "20px 0" }}>
              <div style={{ margin: "0 10px", fontWeight: "600" }}>사용 평수</div>
              <div className="ms-3">
                {getParams().get("floor_area_min")}평 ~ {getParams().get("floor_area_max")}평
              </div>
              <MultiRangeSlider
                minName={"floor_area_min"}
                maxName={"floor_area_max"}
                min={minArea}
                max={maxArea}
                step={stepArea}
              />
            </div>
            <div style={{ width: "100%", margin: "20px 0" }}>
              <div style={{ margin: "0 10px", fontWeight: "600" }}>방 개수</div>
              <FillteringButton title={"1개"} value={1} name={"room_count"} type={"select"} />
              <FillteringButton title={"2개"} value={2} name={"room_count"} type={"select"} />
              <FillteringButton title={"3개"} value={3} name={"room_count"} type={"select"} />
            </div>
            <div style={{ width: "100%", margin: "20px 0" }}>
              <div style={{ margin: "0 10px", fontWeight: "600" }}>화장실 개수</div>
              <FillteringButton title={"1개"} value={1} name={"toilet_count"} type={"select"} />
              <FillteringButton title={"2개"} value={2} name={"toilet_count"} type={"select"} />
            </div>
            <div style={{ width: "100%", margin: "20px 0" }}>
              <div style={{ margin: "0 10px", fontWeight: "600" }}>층수</div>
              <FillteringButton title={"1층"} value={1} name={"floor_count"} type={"select"} />
              <FillteringButton title={"2층"} value={2} name={"floor_count"} type={"select"} />
            </div>
            <div style={{ width: "100%", margin: "20px 0" }}>
              <div style={{ margin: "0 10px", fontWeight: "600" }}>특이사항</div>
              <FillteringButton title={"데크"} value={"데크"} name={"specificity"} type={"select"} />
              <FillteringButton title={"다락방"} value={"다락방"} name={"specificity"} type={"select"} />
              <FillteringButton title={"발코니"} value={"발코니"} name={"specificity"} type={"select"} />
              <FillteringButton title={"베란다"} value={"베란다"} name={"specificity"} type={"select"} />
              <FillteringButton title={"옥상"} value={"옥상"} name={"specificity"} type={"select"} />
            </div>
            <div style={{ width: "100%", margin: "20px 0" }}>
              <div style={{ margin: "0 10px", fontWeight: "600" }}>골조 구조</div>
              <FillteringButton title={"경량목"} value={"경량목"} name={"frame"} type={"select"} />
              <FillteringButton title={"경량스틸"} value={"경량스틸"} name={"frame"} type={"select"} />
              <FillteringButton title={"기타"} value={"기타"} type={"select"} name={"frame"} />
            </div>
            <div style={{ width: "100%", margin: "20px 0" }}>
              <div style={{ margin: "0 10px", fontWeight: "600" }}>제작 소요기간</div>
              <FillteringButton title={"3개월 이하"} value={3} name={"estimate_duration"} type={"select"} />
              <FillteringButton title={"6개월 이하"} value={6} name={"estimate_duration"} type={"select"} />
              <FillteringButton title={"12개월 이하"} value={12} name={"estimate_duration"} type={"select"} />
            </div>
            <div style={{ width: "100%", margin: "20px 0" }}>
              <div style={{ margin: "0 10px", fontWeight: "600" }}>AS 보증기간</div>
              <FillteringButton title={"1년 이상"} value={12} name={"warranty"} type={"select"} />
              <FillteringButton title={"2년 이상"} value={24} name={"warranty"} type={"select"} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "20px 0",
              }}
            >
              <div style={{ width: "100%" }}>
                <div style={{ margin: "0 10px", fontWeight: "600" }}>리셋</div>
                <ResetButton img={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/all.png"} />
              </div>
              {/* <div style={{ width: "100%" }}>
                <div style={{ margin: "0 10px", fontWeight: "600" }}>모델하우스</div>
                <FillteringButton
                  title={"있음"}
                  value={1}
                  name={"model"}
                  type={"select"}
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
