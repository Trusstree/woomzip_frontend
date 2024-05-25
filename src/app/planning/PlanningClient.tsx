"use client";

import React, { useCallback, useEffect, useState } from "react";
import SelectBox from "@/components/planning/SelectBox";
import SelectMiniBox from "@/components/planning/SelectMiniBox";
import SelectCityBox from "@/components/planning/SelectCityBox";
import PriceBox from "@/components/planning/PriceBox";
import { useRouter, useSearchParams } from "next/navigation";
import { getHouse } from "@/apis/HouseAPI";
import HouseCard from "@/components/house/HouseCard";
import { alertError } from "@/lib/alertUtil";

export default function PlanningClient() {
  const [houseType, setHouseType] = useState("");
  const [landCondition, setLandCondition] = useState("");
  const [roadCondition, setRoadCondition] = useState("");
  const [area, setArea] = useState("");
  const [addr, setAddr] = useState("");
  const [houseData, setHouseData] = useState(undefined);

  const searchParams = useSearchParams();
  const house_id = Number(searchParams.get("house_id"));
  const router = useRouter();

  const submit = useCallback(() => {
    const params = new URLSearchParams(searchParams);
    if (isNaN(house_id) || house_id <= 0) {
      alertError("house_id", "집이 선택되지 않았어요!");
      router.push("/house");
    }
    params.set("house_id", house_id.toString());

    if (houseType.length == 0) {
      alertError("houseType", "농막인지 주택인지 선택해주세요!");
      return;
    }
    params.set("house_type", houseType);

    if (addr.length == 0) {
      alertError("addr", "위치를 선택해주세요!");
      return;
    }
    params.set("addr", addr);

    if (area.length == 0) {
      alertError("area", "면적을 선택해주세요!");
      return;
    }
    params.set("area", area.toString());

    if (landCondition.length == 0) {
      alertError("landCondition", "토지 기울기를 선택해주세요!");
      return;
    }
    params.set("land_condition", landCondition);

    if (roadCondition.length == 0) {
      alertError("roadCondition", "도로 상태를 선택해주세요!");
      return;
    }
    params.set("road_condition", roadCondition);

    router.push(`/planning/application?${params.toString()}`);
  }, [houseType, landCondition, roadCondition, area, addr]);

  useEffect(() => {
    (async () => {
      if (isNaN(house_id)) return;
      console.log(house_id);
      const [data, error] = await getHouse(house_id);
      if (error) {
        console.error(error);
        return;
      }

      // 그냥 이부분은 HouseCard 재활용하려고 하드 코딩했어요.
      setHouseData({
        house_img_url: data.data[0]["house_image"]["representative_images"][0],
        house_name: data.data[0]["house_info"]["house_name"],
        total_floor_area: data.data[0]["house_info"]["total_floor_area"],
        building_area: data.data[0]["house_info"]["building_area"],
        room_count: data.data[0]["house_info"]["room_count"],
        toilet_count: data.data[0]["house_info"]["toilet_count"],
        estimate_duration: data.data[0]["house_info"]["estimate_duration"],
        warranty: data.data[0]["house_info"]["warranty"],
        has_model: data.data[0]["house_info"]["has_model"],
        is_hut: data.data[0]["house_info"]["is_hut"],
        discount_rate: data.data[0]["house_info"]["discount_rate"],
        final_price: data.data[0]["house_info"]["final_price"],
        base_price: data.data[0]["house_info"]["base_price"],
        company_name: data.data[0]["house_info"]["seller_nickname"],
      });
    })();
  }, []);

  return (
    <div className="row">
      <div style={{ width: "70%", minWidth: "375px" }}>
        <div style={{ marginBottom: "150px" }}>
          <div style={{ fontSize: "25px", marginBottom: "20px", fontWeight: "600" }}>선택하신 집이 맞나요?</div>
          <div style={{ fontSize: "19px", marginBottom: "30px" }}>찾아보기 탭에서 마음에 드는 주택을 찾아보세요.</div>
          <div style={{ width: "1200px", height: "300px", borderRadius: "10px" }}>
            {houseData ? (
              <HouseCard className="w-100" data={houseData} />
            ) : (
              <button
                style={{
                  width: "280px",
                  height: "300px",
                  borderRadius: "10px",
                  backgroundColor: "white",
                  borderColor: "#314FC0",
                  borderStyle: "soild",
                }}
              >
                선택된 집이 없어요.
                <br />
                찾아보기 탭에서 집을 선택해주세요.
              </button>
            )}
          </div>
        </div>

        <div style={{ marginBottom: "150px" }}>
          <div style={{ fontSize: "25px", marginBottom: "20px", fontWeight: "600" }}>어떻게 사실 건가요?</div>
          <div style={{ fontSize: "19px", marginBottom: "30px" }}>방식을 선택해주세요.</div>
          <SelectBox
            title={"농막"}
            text={"건축 인허가가 필요 없습니다."}
            value={"hut"}
            data={houseType}
            setData={setHouseType}
            img={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/home1.png"}
          />
          <SelectBox
            title={"주택"}
            text={"건축 인허가가 필요합니다."}
            value={"house"}
            data={houseType}
            setData={setHouseType}
            img={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/home2.png"}
          />
        </div>

        <div style={{ marginBottom: "150px" }}>
          <div style={{ fontSize: "25px", marginBottom: "20px", fontWeight: "600" }}>어디에 지으실 건가요?</div>
          <div style={{ fontSize: "19px", marginBottom: "30px" }}>아직 구매 전이라면 원하시는 위치를 알려주세요.</div>
          <SelectCityBox title={"경기도"} value={"경기도"} data={addr} setData={setAddr} />
          <SelectCityBox title={"강원도"} value={"강원도"} data={addr} setData={setAddr} />
          <SelectCityBox title={"충청북도"} value={"충청북도"} data={addr} setData={setAddr} />
          <SelectCityBox title={"충청남도"} value={"충청남도"} data={addr} setData={setAddr} />
          <SelectCityBox title={"경상북도"} value={"경상북도"} data={addr} setData={setAddr} />
          <SelectCityBox title={"경상남도"} value={"경상남도"} data={addr} setData={setAddr} />
          <SelectCityBox title={"전라북도"} value={"전라북도"} data={addr} setData={setAddr} />
          <SelectCityBox title={"전라남도"} value={"전라남도"} data={addr} setData={setAddr} />
          <SelectCityBox title={"제주도"} value={"제주도"} data={addr} setData={setAddr} />
        </div>

        <div style={{ marginBottom: "150px" }}>
          <div style={{ fontSize: "25px", marginBottom: "20px", fontWeight: "600" }}>토지 면적을 알려주세요.</div>
          <div style={{ fontSize: "19px", marginBottom: "30px" }}>아직 구매 전이라면 원하시는 면적을 알려주세요.</div>
          <SelectMiniBox title={"50평 이하"} text={"~165㎡"} value={"50"} data={area} setData={setArea} />
          <SelectMiniBox title={"75평 이하"} text={"~248㎡"} value={"75"} data={area} setData={setArea} />
          <SelectMiniBox title={"100평 이하"} text={"~330㎡"} value={"100"} data={area} setData={setArea} />
          <SelectMiniBox title={"125평 이하"} text={"~413㎡"} value={"125"} data={area} setData={setArea} />
          <SelectMiniBox title={"150평 이하"} text={"~496㎡"} value={"150"} data={area} setData={setArea} />
          <SelectMiniBox title={"150평 초과"} text={"496㎡~"} value={"151"} data={area} setData={setArea} />
        </div>

        <div style={{ marginBottom: "150px" }}>
          <div style={{ fontSize: "25px", marginBottom: "20px", fontWeight: "600" }}>토지 경사도 상태는 어떤가요?</div>
          <div style={{ fontSize: "19px", marginBottom: "30px" }}>대략적인 느낌을 알려주세요.</div>
          <SelectBox
            title={"평평함"}
            text={"토목공사가 필요 없습니다."}
            value={"Flat"}
            data={landCondition}
            setData={setLandCondition}
            img={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/slope1.png"}
          />
          <SelectBox
            title={"조금 경사짐"}
            text={"토목공사가 필요합니다."}
            value={"SlightlySloped"}
            data={landCondition}
            setData={setLandCondition}
            img={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/slope2.png"}
          />
          <SelectBox
            title={"많이 경사짐"}
            text={"비용이 더 많이 소요됩니다."}
            value={"SteeplySloped"}
            data={landCondition}
            setData={setLandCondition}
            img={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/slope3.png"}
          />
        </div>

        <div style={{ marginBottom: "150px" }}>
          <div style={{ fontSize: "25px", marginBottom: "20px", fontWeight: "600" }}>토지 진입로 상태는 어떤가요?</div>
          <div style={{ fontSize: "19px", marginBottom: "30px" }}>대략적인 느낌을 알려주세요.</div>
          <SelectBox
            title={"넓음"}
            text={"기본 배송비가 소요됩니다."}
            value={"Wide"}
            data={roadCondition}
            setData={setRoadCondition}
            img={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/raod1.png"}
          />
          <SelectBox
            title={"조금 좁음"}
            text={"추가 트럭 및 인력이 필요합니다."}
            value={"Narrow"}
            data={roadCondition}
            setData={setRoadCondition}
            img={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/road2.png"}
          />
          <SelectBox
            title={"많이 좁음"}
            text={"현장건축이 필요할 수 있습니다."}
            value={"VeryNarrow"}
            data={roadCondition}
            setData={setRoadCondition}
            img={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/road3.png"}
          />
        </div>
      </div>

      <div style={{ width: "25%", minWidth: "350px" }}>
        <div className="py-5 sticky-top">
          <PriceBox
            houseType={houseType}
            landCondition={landCondition}
            roadCondition={roadCondition}
            addr={addr}
            area={area}
            house={houseData}
          />
          <div
            className="button"
            style={{
              width: "100%",
              height: "50px",
              borderRadius: "10px",
              padding: "10px",
              marginBottom: "10px",
              backgroundColor: "#101648",
              color: "white",
              fontSize: "20px",
              fontWeight: "600",
              textAlign: "center",
            }}
            onClick={submit}
          >
            이 견적으로 프로젝트 시작하기
          </div>
        </div>
      </div>
    </div>
  );
}
