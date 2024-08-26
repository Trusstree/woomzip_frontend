'use client';

import { useCallback } from 'react';
import { postHouse } from '@/actions/apis/houseAPI';
import { alertError, alertSuccess } from '@/lib/alertUtil';
import { HouseSpecificationComponent } from '@/app/mypage/[uid]/house/_components/HouseSpecificationComponent';
import { HouseImageComponent } from '@/app/mypage/[uid]/house/_components/HouseImageComponent';
import { HouseDeliveryComponent } from '@/app/mypage/[uid]/house/_components/HouseDeliveryComponent';
import { HouseInfoComponent } from '@/app/mypage/[uid]/house/_components/HouseInfoComponent';
import { HousePriceComponent } from '@/app/mypage/[uid]/house/_components/HousePriceComponent';
import { usePathname, useRouter } from 'next/navigation';
import useHouseInfo from '@/app/mypage/[uid]/house/_store/houseInfo';
import useSpecificityInfo from '@/app/mypage/[uid]/house/_store/specificationInfo';
import useImageInfo from '@/app/mypage/[uid]/house/_store/imageInfo';
import useOptionInfo from '@/app/mypage/[uid]/house/_store/optionInfo';
import useDeliveryInfo from '@/app/mypage/[uid]/house/_store/deliveryInfo';

export default function AddHouse({ uid }) {
  const pathname = usePathname();
  const router = useRouter();

  const houseInfo = useHouseInfo();
  const optionInfo = useOptionInfo();
  const deliveryInfo = useDeliveryInfo();
  const specificationInfo = useSpecificityInfo();
  const imageInfo = useImageInfo();

  const submit = useCallback(async () => {
    //validate를 위한 부분
    if (!validate(houseInfo, optionInfo, deliveryInfo, specificationInfo, imageInfo)) return;

    const data = {
      house_info: {
        house_name: houseInfo.houseName,
        house_explanation: houseInfo.houseExplanation,
        floor: houseInfo.floorCount,
        building_area: houseInfo.buildingArea,
        total_floor_area: houseInfo.totalFloorArea,
        room_count: houseInfo.roomCount,
        toilet_count: houseInfo.toiletCount,
        estimate_duration: houseInfo.estimateDuration,
        warranty: houseInfo.warranty,
        has_model: houseInfo.hasModel,
        is_hut: houseInfo.isHut,
        base_price: houseInfo.basePrice,
        final_price: houseInfo.discountPrice,
        price_variation: houseInfo.priceVariation,
        specificity_info: houseInfo.specificityInfo,
      },
      option_info: optionInfo.optionInfo,
      delivery_unavailable: deliveryInfo.deliveryInfo,
      specification_info: {
        framework: specificationInfo.framework,
        exterior_material: specificationInfo.exteriorMaterial,
        roofing_material: specificationInfo.roofingMaterial,
        insulation_material: specificationInfo.insulationMaterial,
        interior_material: specificationInfo.interiorMaterial,
        window: specificationInfo.window,
        heating: specificationInfo.heating,
        furniture: specificationInfo.furniture,
        toilet: specificationInfo.toilet,
        kitchen: specificationInfo.kitchen,
        lighting: specificationInfo.lighting,
        etc_info: specificationInfo.etcInfo,
        specification_description: specificationInfo.specificationDescription,
      },
      house_img_url: {
        representative_image: imageInfo.representativeImage[0],
        external_images: imageInfo.externalImages,
        internal_images: imageInfo.internalImages,
        floor_plan_images: imageInfo.floorPlanImages,
        elevation_plan_images: imageInfo.elevationPlanImages,
      },
    };

    const [response, error] = await postHouse(data);
    if (error) {
      console.error(error);
      alertError('에러!', '뭐가 빠진 게 있나봐요 ㅠㅠ');
      return;
    }

    alertSuccess(houseInfo['house_name'], '제대로 들어갔어요~');
    router.push(pathname.slice(0, pathname.length - 6));
  }, [houseInfo, optionInfo, deliveryInfo, specificationInfo, imageInfo, pathname, router]);

  return (
    <div>
      <div
        className="d-flex justify-content-start flex-column"
        style={{ width: '90%', maxWidth: '1150px', margin: '0 auto' }}
      >
        <h1 className="fw-bold" style={{ marginTop: '30px' }}>
          제품 등록 관리자
        </h1>
        {/* 제품 기본 정보 */}
        <HouseInfoComponent />

        {/* 배송 */}
        <HouseDeliveryComponent />

        {/* 가격 */}
        <HousePriceComponent />

        {/* 기본 제품 제작 사양 */}
        <HouseSpecificationComponent />

        {/* 사진 */}
        <HouseImageComponent uid={uid} />

        {/* submit */}
        <div
          className="mt-4 py-4 d-flex justify-content-center flex-column"
          style={{
            borderTop: '1px solid gray',
          }}
        >
          <div
            style={{
              width: 'auto',
              borderRadius: '10px',
              backgroundColor: 'lightgray',
              padding: '10px',
              marginBottom: '20px',
            }}
          >
            💡 마지막으로 작성 정보를 다시 한 번 확인해주세요.
            <br />
            수정 필요가 있다면 검수 후, 수정 요청드릴 수 있습니다.
            <br />
            추가로 문의사항은 전화주시면 감사하겠습니다.
          </div>
          <button
            type="button"
            name="submit"
            style={{ backgroundColor: '#314FC0' }}
            className={`my-5 px-5 py-3 btn btn-lg rounded-lg text-white fw-bold fs-3`}
            onClick={submit}
          >
            {'등록하기'}
          </button>
        </div>
      </div>
    </div>
  );
}

const validate = (houseInfo, optionInfo, deliveryInfo, specificationInfo, imageInfo) => {
  if (!houseInfo.houseName) {
    alertError('필수 데이터가 빠졌어요', '제품명을 입력해주세요!');
    return false;
  }
  if (!houseInfo.houseExplanation) {
    alertError('필수 데이터가 빠졌어요', '제품 소개글을 입력해주세요!');
    return false;
  }
  if (!houseInfo.floorCount) {
    alertError('필수 데이터가 빠졌어요', '층수를 입력해주세요!');
    return false;
  }
  if (!houseInfo.buildingArea) {
    alertError('필수 데이터가 빠졌어요', '건축면적을 입력해주세요!');
    return false;
  }
  if (!houseInfo.totalFloorArea) {
    alertError('필수 데이터가 빠졌어요', '실제 사용 평수를 입력해주세요!');
    return false;
  }
  if (!houseInfo.roomCount) {
    alertError('필수 데이터가 빠졌어요', '방 개수를 입력해주세요!');
    return false;
  }
  if (!houseInfo.toiletCount) {
    alertError('필수 데이터가 빠졌어요', '화장실 개수를 입력해주세요!');
    return false;
  }
  if (!houseInfo.estimateDuration) {
    alertError('필수 데이터가 빠졌어요', '예상 소요 기간을 입력해주세요!');
    return false;
  }
  if (!houseInfo.warranty) {
    alertError('필수 데이터가 빠졌어요', 'AS 보증 기간을 입력해주세요!');
    return false;
  }
  if (!houseInfo.hasModel) {
    alertError('필수 데이터가 빠졌어요', '농촌 체류형 주택으로 사용 가능한지 여부를 입력해주세요!');
    return false;
  }
  if (!houseInfo.isHut) {
    alertError('필수 데이터가 빠졌어요', '농막으로 사용가능한지 여부를 입력해주세요!');
    return false;
  }
  if (!houseInfo.basePrice) {
    alertError('필수 데이터가 빠졌어요', '기본가격을 입력해주세요!');
    return false;
  }
  if (!houseInfo.discountPrice) {
    alertError('필수 데이터가 빠졌어요', '할인 후 최종 가격을 입력해주세요!');
    return false;
  }
  if (!houseInfo.specificityInfo) {
    alertError('필수 데이터가 빠졌어요', '제품 구조 특이사항을 입력해주세요!');
    return false;
  }
  if (!imageInfo['representativeImage']) {
    alertError('이미지 에러!', '대표 이미지가 빠졌어요 ㅠㅠ');
    return false;
  }
  if (imageInfo['externalImages'].length + imageInfo['internalImages'].length < 5) {
    alertError('이미지 에러!', '제품 내외부 사진을 합쳐서 5장 이상 채워주세요!');
    return false;
  }

  return true;
};
