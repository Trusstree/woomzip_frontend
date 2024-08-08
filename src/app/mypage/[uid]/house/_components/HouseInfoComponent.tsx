import { RadioComponent } from "@/components/forms/RadioComponent";
import { SelectComponent } from "@/components/forms/SelectComponent";
import { TextAreaComponent } from "@/components/forms/TextAreaComponent";
import { TextBoxComponent } from "@/components/forms/TextBoxComponent";

type HouseInfoComponent = {
  handleHouse: any;
  setHouseInfo: Function;
  houseInfo: any;
};

export function HouseInfoComponent(props: HouseInfoComponent) {
  const { handleHouse, setHouseInfo, houseInfo } = props;

  return (
    <div
      className="py-4 my-4"
      style={{
        borderTopStyle: "solid",
        borderTopColor: "#101648",
        borderTopWidth: "2px",
      }}
    >
      <h3 className="fw-bold mb-4" style={{ color: "#101648" }}>
        제품 기본 정보를 입력해주세요.
      </h3>
      <div style={{ fontSize: "18px", color: "red" }}>
        *단위를 제외한, 숫자만 입력해주세요.
      </div>
      <div className="d-flex flex-column">
        <TextBoxComponent
          className={"my-2"}
          title={"제품명 (최대 15자)"}
          name={"house_name"}
          data={houseInfo}
          onChange={handleHouse}
        />
        <TextBoxComponent
          className={"my-2"}
          title={"실제 사용 평수 (단위: 평)"}
          name={"total_floor_area"}
          data={houseInfo}
          onChange={handleHouse}
        />
        <TextBoxComponent
          className={"my-2"}
          title={"건축면적 (단위: ㎡)"}
          name={"building_area"}
          data={houseInfo}
          onChange={handleHouse}
        />
        <TextBoxComponent
          className={"my-2"}
          title={"연면적 (단위: ㎡)"}
          name={"yeon_area"}
          data={houseInfo}
          onChange={handleHouse}
        />
        <div className="row">
          <TextBoxComponent
            className={"col-6 my-2"}
            title={"기본 가격(단위: 원) *부가세 제외"}
            name={"base_price"}
            data={houseInfo}
            onChange={handleHouse}
          />
          <TextBoxComponent
            className={"col-6 my-2"}
            title={"할인 후 최종 가격(단위: 원) *부가세 제외"}
            name={"final_price"}
            data={houseInfo}
            onChange={handleHouse}
          />
          <div style={{ fontSize: "18px", color: "red" }}>
            *할인이 없다면, 기본 가격과 최종 가격에 같은 값을 입력해주세요.
          </div>
        </div>

        {/* floor */}
        <RadioComponent
          title={"층수"}
          name={"floor"}
          onChange={handleHouse}
          data={[
            { title: "1층", data: 1 },
            { title: "2층", data: 2 },
            { title: "3층 이상", data: 3 },
          ]}
        />

        {/* room_count */}
        <RadioComponent
          title={"방 개수"}
          name={"room_count"}
          onChange={handleHouse}
          data={[
            { title: "1개", data: 1 },
            { title: "2개", data: 2 },
            { title: "3개", data: 3 },
            { title: "4개", data: 4 },
            { title: "5개 이상", data: 5 },
          ]}
        />

        {/* toilet_count */}
        <RadioComponent
          title={"화장실 개수"}
          name={"toilet_count"}
          onChange={handleHouse}
          data={[
            { title: "1개", data: 1 },
            { title: "2개", data: 2 },
            { title: "3개", data: 3 },
            { title: "4개 이상", data: 4 },
          ]}
        />

        {/* estimate_duration */}
        <RadioComponent
          title={"예상 소요 기간 (제작일 기준)"}
          name={"estimate_duration"}
          onChange={handleHouse}
          data={[
            { title: "1개월", data: 1 },
            { title: "2개월", data: 2 },
            { title: "3개월", data: 3 },
            { title: "4개월", data: 4 },
            { title: "5개월", data: 5 },
            { title: "6개월 이상", data: 6 },
          ]}
        />

        {/* warranty */}
        <RadioComponent
          title={"AS 보증 기간"}
          name={"warranty"}
          onChange={handleHouse}
          data={[
            { title: "없음", data: "없음" },
            { title: "12개월", data: "12개월" },
            { title: "24개월", data: "24개월" },
            { title: "36개월", data: "36개월" },
          ]}
        />

        {/* hasModel */}
        <RadioComponent
          title={"농촌 체류형 주택으로 사용 가능한지 여부"}
          name={"has_model"}
          onChange={handleHouse}
          data={[
            { title: "예", data: 1 },
            { title: "아니오", data: 0 },
          ]}
        />

        {/* 농막인지 확인 */}
        <RadioComponent
          title={"농막으로 사용가능한지 여부"}
          name={"is_hut"}
          onChange={handleHouse}
          data={[
            { title: "예", data: 1 },
            { title: "아니오", data: 0 },
          ]}
        />

        {/* 특이사항 */}
        <SelectComponent
          title={"가격에 포함된 특이사항 (다중선택 가능)"}
          name={"specificity_info"}
          onChange={setHouseInfo}
          dataList={[
            "없음",
            "다락방",
            "발코니",
            "배란다",
            "옥상",
            "데크",
            "포치",
          ]}
        />

        <TextAreaComponent
          className={"my-2"}
          title={"제품 소개글 (최대 2,000자)"}
          name={"house_explanation"}
          data={houseInfo}
          onChange={handleHouse}
          placeholder={""}
        />
        <div style={{ fontSize: "18px", color: "red" }}>
          *제품의 특징 및 강점 등 제품 관련한 설명을 최대한 자세히 적어주세요.
        </div>
      </div>
    </div>
  );
}
