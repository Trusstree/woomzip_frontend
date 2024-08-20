'use client';

import { ChangeEvent, ChangeEventHandler, useCallback, useState } from 'react';
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
    console.log(deliveryInfo);
    //validate를 위한 부분
    if (!imageInfo['representative_image']) {
      alertError('이미지 에러!', '대표 이미지가 빠졌어요 ㅠㅠ');
      return;
    }

    if (imageInfo['external_images'].length + imageInfo['internal_images'].length < 5) {
      alertError('이미지 에러!', '제품 내외부 사진을 합쳐서 5장 이상 채워주세요!');
      return;
    }

    const data = {
      seller_id: uid,
      house_info: houseInfo,
      option_info: optionInfo,
      delivery_unavailable: deliveryInfo,
      specification_info: specificationInfo,
      house_img_url: imageInfo,
    };

    const [response, error] = await postHouse(data);
    if (error) {
      console.error(error);
      alertError('에러!', '뭐가 빠진 게 있나봐요 ㅠㅠ');
      return;
    }

    alertSuccess(houseInfo['house_name'], '제대로 들어갔어요~');
    router.push(pathname.slice(0, pathname.length - 6));
  }, [houseInfo, optionInfo, deliveryInfo, specificationInfo, imageInfo]);

  return (
    <div>
      <div
        className="d-flex justify-content-start flex-column"
        style={{ width: '90%', maxWidth: '1150px', margin: '0 auto' }}
      >
        <h1 className="fw-bold" style={{}}>
          집 데이터 추가
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
            borderTopStyle: 'solid',
            borderTopColor: '#101648',
            borderTopWidth: '2px',
          }}
        >
          <div className="mt-2 fw-bold fs-5" style={{ color: '#101648' }}>
            마지막으로 작성 정보를 다시 한 번 확인해주세요.
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
