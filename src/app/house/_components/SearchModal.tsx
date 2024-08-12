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
      data-bs-backdrop="true"
      data-bs-keyboard="true"
    >
      <div className="modal-dialog" style={{ width: "97%", maxWidth: "750px" }}>
        <div className="modal-content" style={{ width: "100%" }}>
          <div className="modal-header">
            <h6 className="modal-title" id={`search_modal_Label`}>
              필터링
            </h6>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body" style={{ padding: "30px" }}>
            <div style={{ width: "100%", marginBottom: "20px" }}>
              <div style={{ margin: "20px 10px", fontSize: "20px" }}>
                가격 범위
              </div>
              <div style={{ width: "90%", margin: "0 auto" }}>
                <MultiRangeSlider
                  minName={"min_price"}
                  maxName={"max_price"}
                  min={minPrice}
                  max={maxPrice}
                  step={stepPrice}
                />
                <div className="d-flex justify-content-between">
                  <div
                    style={{
                      width: "30%",
                      borderRadius: "20px",
                      textAlign: "center",
                      padding: "5px 0",
                      fontSize: "15px",
                      fontWeight: "500",
                      backgroundColor: "#314FC0",
                      color: "white",
                    }}
                  >
                    {cardPriceText(
                      getParams().get("min_price")
                        ? getParams().get("min_price")
                        : minPrice
                    )}
                  </div>
                  <div>~</div>
                  <div
                    style={{
                      width: "30%",
                      borderRadius: "20px",
                      textAlign: "center",
                      padding: "5px 0",
                      fontSize: "15px",
                      fontWeight: "500",
                      backgroundColor: "#314FC0",
                      color: "white",
                    }}
                  >
                    {cardPriceText(
                      getParams().get("max_price")
                        ? getParams().get("max_price")
                        : maxPrice
                    )}
                  </div>
                </div>
              </div>
            </div>
            <hr style={{ margin: "30px 0" }} />

            <div style={{ width: "100%", margin: "20px 0" }}>
              <div style={{ margin: "20px 10px", fontSize: "20px" }}>
                평수 범위
              </div>
              <div style={{ width: "90%", margin: "0 auto" }}>
                <MultiRangeSlider
                  minName={"floor_area_min"}
                  maxName={"floor_area_max"}
                  min={minArea}
                  max={maxArea}
                  step={stepArea}
                />
                <div className="d-flex justify-content-between">
                  <div
                    style={{
                      width: "30%",
                      borderRadius: "20px",
                      textAlign: "center",
                      padding: "5px 0",
                      fontSize: "15px",
                      fontWeight: "500",
                      backgroundColor: "#314FC0",
                      color: "white",
                    }}
                  >
                    {getParams().get("floor_area_min")
                      ? getParams().get("floor_area_min")
                      : minArea}
                    평
                  </div>
                  <div>~</div>
                  <div
                    style={{
                      width: "30%",
                      borderRadius: "20px",
                      textAlign: "center",
                      padding: "5px 0",
                      fontSize: "15px",
                      fontWeight: "500",
                      backgroundColor: "#314FC0",
                      color: "white",
                    }}
                  >
                    {getParams().get("floor_area_max")
                      ? getParams().get("floor_area_max")
                      : maxArea}
                    평
                  </div>
                </div>
              </div>
            </div>
            <hr style={{ margin: "30px 0" }} />

            <div style={{ width: "100%", margin: "20px 0" }}>
              <div style={{ margin: "20px 10px", fontSize: "20px" }}>
                침실 및 욕실
              </div>
              <div style={{ margin: "20px 0" }}>
                <div style={{ margin: "0 10px", fontSize: "16px" }}>층</div>
                <div className="row g-2">
                  <FillteringButton
                    title={"상관 없음"}
                    value={undefined}
                    name={"floor_count"}
                    type={"select"}
                  />
                  <FillteringButton
                    title={"1"}
                    value={1}
                    name={"floor_count"}
                    type={"select"}
                  />
                  <FillteringButton
                    title={"2"}
                    value={2}
                    name={"floor_count"}
                    type={"select"}
                  />
                </div>
              </div>
              <div style={{ margin: "20px 0" }}>
                <div style={{ margin: "0 10px", fontSize: "16px" }}>침실</div>
                <div className="row g-2">
                  <FillteringButton
                    title={"상관없음"}
                    value={undefined}
                    name={"room_count"}
                    type={"select"}
                  />
                  <FillteringButton
                    title={"1"}
                    value={1}
                    name={"room_count"}
                    type={"select"}
                  />
                  <FillteringButton
                    title={"2"}
                    value={2}
                    name={"room_count"}
                    type={"select"}
                  />
                  <FillteringButton
                    title={"3+"}
                    value={3}
                    name={"room_count"}
                    type={"select"}
                  />
                </div>
              </div>
            </div>
            <div style={{ margin: "20px 0" }}>
              <div style={{ margin: "0 10px", fontSize: "16px" }}>욕실</div>
              <div className="row g-2">
                <FillteringButton
                  title={"상관 없음"}
                  value={undefined}
                  name={"toilet_count"}
                  type={"select"}
                />
                <FillteringButton
                  title={"1"}
                  value={1}
                  name={"toilet_count"}
                  type={"select"}
                />
                <FillteringButton
                  title={"2"}
                  value={2}
                  name={"toilet_count"}
                  type={"select"}
                />
                <FillteringButton
                  title={"3+"}
                  value={2}
                  name={"toilet_count"}
                  type={"select"}
                />
              </div>
            </div>
            <hr style={{ margin: "30px 0" }} />

            <div style={{ width: "100%", margin: "20px 0" }}>
              <div style={{ margin: "20px 10px", fontSize: "20px" }}>기간</div>
              <div style={{ margin: "20px 0" }}>
                <div style={{ margin: "0 10px", fontSize: "16px" }}>
                  AS 보증기간
                </div>
                <div className="row g-2">
                  <FillteringButton
                    title={"상관 없음"}
                    value={undefined}
                    name={"warranty"}
                    type={"text"}
                  />
                  <FillteringButton
                    title={"1년 이상"}
                    value={12}
                    name={"warranty"}
                    type={"text"}
                  />
                  <FillteringButton
                    title={"2년 이상"}
                    value={24}
                    name={"warranty"}
                    type={"text"}
                  />
                </div>
              </div>
              <div style={{ margin: "20px 0" }}>
                <div style={{ margin: "0 10px", fontSize: "16px" }}>
                  제작 소요기간
                </div>
                <div className="row g-2">
                  <FillteringButton
                    title={"상관 없음"}
                    value={undefined}
                    name={"estimate_duration"}
                    type={"text"}
                  />
                  <FillteringButton
                    title={"3개월 이하"}
                    value={3}
                    name={"estimate_duration"}
                    type={"text"}
                  />
                  <FillteringButton
                    title={"6개월 이하"}
                    value={6}
                    name={"estimate_duration"}
                    type={"text"}
                  />
                  <FillteringButton
                    title={"12개월 이하"}
                    value={12}
                    name={"estimate_duration"}
                    type={"text"}
                  />
                </div>
              </div>
            </div>
            <hr style={{ margin: "30px 0" }} />

            <div style={{ width: "100%", margin: "20px 0" }}>
              <div style={{ margin: "0 10px", fontSize: "20px" }}>
                포함 사항
              </div>
              <div style={{ margin: "20px 0" }}>
                <div style={{ margin: "0 10px", fontSize: "16px" }}>
                  추가사항
                </div>
                <FillteringButton
                  title={"데크"}
                  value={"데크"}
                  name={"specificity"}
                  type={"select"}
                />
                <FillteringButton
                  title={"다락방"}
                  value={"다락방"}
                  name={"specificity"}
                  type={"select"}
                />
                <FillteringButton
                  title={"발코니"}
                  value={"발코니"}
                  name={"specificity"}
                  type={"select"}
                />
                <FillteringButton
                  title={"베란다"}
                  value={"베란다"}
                  name={"specificity"}
                  type={"select"}
                />
                <FillteringButton
                  title={"옥상"}
                  value={"옥상"}
                  name={"specificity"}
                  type={"select"}
                />
              </div>
            </div>
            <div style={{ margin: "20px 0" }}>
              <div style={{ margin: "0 10px", fontSize: "16px" }}>골조구조</div>
              <FillteringButton
                title={"경량목"}
                value={"경량목"}
                name={"frame"}
                type={"select"}
              />
              <FillteringButton
                title={"경량스틸"}
                value={"경량스틸"}
                name={"frame"}
                type={"select"}
              />
              <FillteringButton
                title={"기타"}
                value={"기타"}
                type={"select"}
                name={"frame"}
              />
            </div>
          </div>
          <div className="modal-footer">
            <div className="d-flex justify-content-between w-100">
              <ResetButton />

              <SearchComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
