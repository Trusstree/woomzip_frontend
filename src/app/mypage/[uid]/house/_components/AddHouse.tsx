'use client';

import { useCallback, useEffect } from 'react';
import { getHouse, postHouse, updateHouse } from '@/actions/apis/houseAPI';
import { alertError, alertSuccess } from '@/lib/alertUtil';
import { HouseSpecificationComponent } from '@/app/mypage/[uid]/house/_components/HouseSpecificationComponent';
import { HouseImageComponent } from '@/app/mypage/[uid]/house/_components/HouseImageComponent';
import { HouseDeliveryComponent } from '@/app/mypage/[uid]/house/_components/HouseDeliveryComponent';
import { HouseInfoComponent } from '@/app/mypage/[uid]/house/_components/HouseInfoComponent';
import { HousePriceComponent } from '@/app/mypage/[uid]/house/_components/HousePriceComponent';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import useHouseInfo from '@/app/mypage/[uid]/house/_store/houseInfo';
import useSpecificityInfo from '@/app/mypage/[uid]/house/_store/specificationInfo';
import useImageInfo from '@/app/mypage/[uid]/house/_store/imageInfo';
import useOptionInfo from '@/app/mypage/[uid]/house/_store/optionInfo';
import useDeliveryInfo from '@/app/mypage/[uid]/house/_store/deliveryInfo';

export default function AddHouse({ uid, houseId }: { uid: string | number; houseId?: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const houseInfo = useHouseInfo();
  const optionInfo = useOptionInfo();
  const deliveryInfo = useDeliveryInfo();
  const specificationInfo = useSpecificityInfo();
  const imageInfo = useImageInfo();

  useEffect(() => {
    (async () => {
      if (!houseId) return;

      const [houseData, houseError] = await getHouse(Number(houseId));
      if (houseError) {
        alertError('houseError', houseError.message || ' 데이터를 불러오지 못했습니다. 다시 시도해주세요!');
        return;
      }
      const loadedHouse = houseData.data[0];
      console.log(loadedHouse);

      houseInfo.setBasePrice(loadedHouse.house_info['base_price']);
      houseInfo.setBuildingArea(loadedHouse.house_info['building_area']);
      houseInfo.setDiscountPrice(loadedHouse.house_info['final_price']);
      houseInfo.setEstimateDuration(loadedHouse.house_info['estimate_duration']);
      houseInfo.setFloorCount(loadedHouse.house_info['floor']);
      houseInfo.setGrossFloorArea(loadedHouse.house_info['gross_floor_area']);
      houseInfo.setHasModel(loadedHouse.house_info['has_model']);
      houseInfo.setHouseExplanation(loadedHouse.house_info['house_explanation']);
      houseInfo.setHouseName(loadedHouse.house_info['house_name']);
      houseInfo.setIsHut(loadedHouse.house_info['is_hut']);
      houseInfo.setPriceVariation(loadedHouse.house_info['price_variation']);
      houseInfo.setRoomCount(loadedHouse.house_info['room_count']);
      houseInfo.setSpecificityInfo(loadedHouse.house_info['specificity_info']);
      houseInfo.setToiletCount(loadedHouse.house_info['toilet_count']);
      houseInfo.setTotalFloorArea(loadedHouse.house_info['total_floor_area']);
      houseInfo.setWarranty(loadedHouse.house_info['warranty']);

      optionInfo.setOptionInfo(loadedHouse.option_info);
      deliveryInfo.setDeliveryInfo(loadedHouse.house_info.delivery_unavailable);

      specificationInfo.setETCInfo(loadedHouse.house_info.specification_info['etc_info']);
      specificationInfo.setExteriorMaterial(loadedHouse.house_info.specification_info['exterior_material']);
      specificationInfo.setFramework(loadedHouse.house_info.specification_info['framework']);
      specificationInfo.setFurniture(loadedHouse.house_info.specification_info['furniture']);
      specificationInfo.setHeating(loadedHouse.house_info.specification_info['heating']);
      specificationInfo.setInsulationMaterial(loadedHouse.house_info.specification_info['insulation_material']);
      specificationInfo.setInteriorMaterial(loadedHouse.house_info.specification_info['interior_material']);
      specificationInfo.setKitchen(loadedHouse.house_info.specification_info['kitchen']);
      specificationInfo.setLighting(loadedHouse.house_info.specification_info['lighting']);
      specificationInfo.setRoofingMaterial(loadedHouse.house_info.specification_info['roofing_material']);
      specificationInfo.setSpecificationDescription(
        loadedHouse.house_info.specification_info['specification_description'],
      );
      specificationInfo.setToilet(loadedHouse.house_info.specification_info['toilet']);
      specificationInfo.setWall(loadedHouse.house_info.specification_info['wall']);
      specificationInfo.setWindow(loadedHouse.house_info.specification_info['window']);

      imageInfo.setElevationPlanImages(loadedHouse.house_image['elevation_plan_images']);
      imageInfo.setExternalImages(loadedHouse.house_image['external_images']);
      imageInfo.setFloorPlanImages(loadedHouse.house_image['floor_plan_images']);
      imageInfo.setInternalImages(loadedHouse.house_image['internal_images']);
      imageInfo.setRepresentativeImage(loadedHouse.house_image['representative_images']);
    })();
  }, []);

  const submit = useCallback(async () => {
    //valida위한 부분
    if (!validate(houseInfo, optionInfo, deliveryInfo, specificationInfo, imageInfo)) return;

    const data = {
      house_info: {
        house_name: houseInfo.houseName,
        house_explanation: houseInfo.houseExplanation,
        floor: houseInfo.floorCount,
        building_area: houseInfo.buildingArea,
        total_floor_areate를: houseInfo.totalFloorArea,
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

    if (searchParams.has('house_id')) {
      const [response, error] = await updateHouse(searchParams.get('house_id'), data);
      if (error) {
        console.error(error);
        alertError('에러!', '뭐가 빠진 게 있나봐요 ㅠㅠ');
        return;
      }

      alertSuccess(houseInfo['house_name'], '수정되었습니다!');
      router.push(pathname.slice(0, pathname.length - 6));
    } else {
      const [response, error] = await postHouse(data);
      if (error) {
        console.error(error);
        alertError('에러!', '뭐가 빠진 게 있나봐요 ㅠㅠ');
        return;
      }

      alertSuccess(houseInfo['house_name'], '제대로 들어갔어요~');
      router.push(pathname.slice(0, pathname.length - 6));
    }
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
  if (houseInfo.hasModel != 0 && houseInfo.hasModel != 1) {
    alertError('필수 데이터가 빠졌어요', '농촌 체류형 주택으로 사용 가능한지 여부를 입력해주세요!');
    return false;
  }
  if (houseInfo.isHut != 0 && houseInfo.isHut != 1) {
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

  const imageLen =
    imageInfo['externalImages'].length +
    imageInfo['internalImages'].length +
    imageInfo['elevationPlanImages'].length +
    imageInfo['floorPlanImages'].length;

  if (imageLen < 5) {
    alertError('이미지 에러!', '제품 내외부 사진을 합쳐서 5장 이상 채워주세요!');
    return false;
  }

  return true;
};
