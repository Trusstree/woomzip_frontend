"use client";

import { ChangeEvent, ChangeEventHandler, useCallback, useState } from "react";
import { postHouse } from "@/apis/HouseAPI";
import { alertError, alertSuccess } from "@/lib/alertUtil";
import { HouseSpecificationComponent } from "@/app/mypage/[uid]/house/_components/HouseSpecificationComponent";
import { HouseImageComponent } from "@/app/mypage/[uid]/house/_components/HouseImageComponent";
import { HouseDeliveryComponent } from "@/app/mypage/[uid]/house/_components/HouseDeliveryComponent";
import { HouseInfoComponent } from "@/app/mypage/[uid]/house/_components/HouseInfoComponent";
import { HousePriceComponent } from "@/app/mypage/[uid]/house/_components/HousePriceComponent";
import { usePathname, useRouter } from "next/navigation";

export default function AddHouse({ uid }) {
  const pathname = usePathname();
  const router = useRouter();

  const [houseInfo, setHouseInfo] = useState({});
  const [optionInfo, setOptionInfo] = useState([] as Array<any>);
  const [deliveryInfo, setDeliveryInfo] = useState([] as Array<any>);
  const [specificationInfo, setSpecificationInfo] = useState({});
  const [imageList, setImageList] = useState([]);

  const handleHouse = (e: ChangeEvent<HTMLInputElement>): ChangeEventHandler<HTMLInputElement> => {
    setHouseInfo((oldValues) => ({ ...oldValues, [e.target.name]: e.target.value }));
    return;
  };

  const handleSpecification = (e: ChangeEvent<HTMLInputElement>): ChangeEventHandler<HTMLInputElement> => {
    if (e) e.preventDefault();
    setSpecificationInfo((oldValues) => ({ ...oldValues, [e.target.name]: e.target.value }));
    return;
  };

  const submitFunction = useCallback(async () => {
    //validate를 위한 부분
    if (!imageList["representative_image"]) {
      alertError("이미지 에러!", "대표 이미지가 빠졌어요 ㅠㅠ");
      return;
    }
    if (!imageList["external_images"]) {
      alertError("이미지 에러!", "제품 외부 사진이 빠졌어요 ㅠㅠ");
      return;
    }
    if (!imageList["internal_images"]) {
      alertError("이미지 에러!", "제품 내부 사진이 빠졌어요 ㅠㅠ");
      return;
    }
    if (!imageList["floor_plan_images"]) {
      alertError("이미지 에러!", "설계도면 <평면도> 사진이 빠졌어요 ㅠㅠ");
      return;
    }
    if (!imageList["elevation_plan_images"]) {
      alertError("이미지 에러!", "설계도면 <입면도> 사진이 빠졌어요 ㅠㅠ");
      return;
    }

    const data = {
      seller_id: uid,
      house_info: houseInfo,
      option_info: optionInfo,
      delivery_unavailable: deliveryInfo,
      specification_info: specificationInfo,
      house_img_url: imageList,
    };

    console.log(data);

    const [response, error] = await postHouse(data);
    if (error) {
      console.error(error);
      alertError("에러!", "뭐가 빠진 게 있나봐요 ㅠㅠ");
      return;
    }

    console.log(response);

    alertSuccess(houseInfo["house_name"], "제대로 들어갔어요~");
    router.push(pathname.slice(0, pathname.length - 6));
  }, [houseInfo, optionInfo, deliveryInfo, specificationInfo, imageList]);

  return (
    <div>
      <div className="d-flex justify-content-start flex-column mt-5">
        <h1 className="fw-bold" style={{ color: "#101648" }}>
          집 데이터 추가
        </h1>
        {/* 제품 기본 정보 */}
        <HouseInfoComponent handleHouse={handleHouse} setHouseInfo={setHouseInfo} houseInfo={houseInfo} />

        {/* 배송 */}
        <HouseDeliveryComponent setDeliveryInfo={setDeliveryInfo} />

        {/* 가격 */}
        <HousePriceComponent
          optionInfo={optionInfo}
          setOptionInfo={setOptionInfo}
          houseInfo={houseInfo}
          handleHouse={handleHouse}
        />

        {/* 기본 제품 제작 사양 */}
        <HouseSpecificationComponent
          specificationInfo={specificationInfo}
          setSpecificationInfo={setSpecificationInfo}
          handleSpecification={handleSpecification}
        />

        {/* 사진 */}
        <HouseImageComponent uid={uid} imageList={imageList} setImageList={setImageList} />

        {/* submit */}
        <div
          className="mt-4 py-4 d-flex justify-content-center flex-column"
          style={{ borderTopStyle: "solid", borderTopColor: "#101648", borderTopWidth: "2px" }}
        >
          <div className="mt-2 fw-bold fs-5" style={{ color: "#101648" }}>
            마지막으로 작성 정보를 다시 한 번 확인해주세요.
            <br />
            수정 필요가 있다면 검수 후, 수정 요청드릴 수 있습니다.
            <br />
            (수정은 우측 상단 *마이페이지*에서 가능합니다.)
            <br />
            추가로 표현하고 싶은데, 해당사항이 없다면 전화주세요!
          </div>
          <button
            type="button"
            name="submit"
            style={{ backgroundColor: "#101648" }}
            className={`my-5 px-5 py-3 btn btn-lg rounded-lg text-white fw-bold fs-3`}
            onClick={async () => {
              await submitFunction();
            }}
          >
            {"등록하기"}
          </button>
        </div>
      </div>
    </div>
  );
}
