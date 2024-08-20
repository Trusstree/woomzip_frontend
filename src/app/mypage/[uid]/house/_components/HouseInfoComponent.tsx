'use client';

import { RadioComponent } from '@/components/forms/RadioComponent';
import { HouseSelectComponent } from '@/app/mypage/[uid]/house/_components/HouseSelectComponent';
import { TextAreaComponent } from '@/components/forms/TextAreaComponent';
import { TextBoxComponent } from '@/components/forms/TextBoxComponent';
import { ChangeEvent } from 'react';
import useHouseInfo from '@/app/mypage/[uid]/house/_store/houseInfo';
import { alertError } from '@/lib/alertUtil';
import { HouseSpecificationSelectComponent } from '@/app/mypage/[uid]/house/_components/HouseSpecificationSelectComponent';

const validateNumber = (e: ChangeEvent<HTMLInputElement>): boolean => {
  const regex = /^([1-9]{1}\d{0,9})(\.{1}\d{0,2})?$/g;
  if (e.target.value && !regex.test(e.target.value)) {
    alertError('유효한 숫자를 입력해주세요', '100억 미만의 소수점 두 자리까지의 숫자만 입력해주세요.');
    return true;
  }
  return false;
};

export function HouseInfoComponent() {
  const {
    houseName,
    houseExplanation,
    floorCount,
    buildingArea,
    totalFloorArea,
    grossFloorArea,
    roomCount,
    toiletCount,
    estimateDuration,
    warranty,
    hasModel,
    isHut,
    basePrice,
    discountPrice,
    specificityInfo,
    setHouseName,
    setHouseExplanation,
    setFloorCount,
    setBuildingArea,
    setTotalFloorArea,
    setGrossFloorArea,
    setRoomCount,
    setToiletCount,
    setEstimateDuration,
    setWarranty,
    setHasModel,
    setIsHut,
    setBasePrice,
    setDiscountPrice,
    setSpecificityInfo,
  } = useHouseInfo();

  const handleHouseName = (e: ChangeEvent<HTMLInputElement>) => {
    setHouseName(e.target.value);
  };

  const handleHouseExplanation = (e: ChangeEvent<HTMLInputElement>) => {
    setHouseExplanation(e.target.value);
  };

  const handleFloorCount = (e: ChangeEvent<HTMLInputElement>) => {
    if (validateNumber(e)) return;
    setFloorCount(e.target.value);
  };

  const handleBuildingArea = (e: ChangeEvent<HTMLInputElement>) => {
    if (validateNumber(e)) return;
    setBuildingArea(e.target.value);
  };

  const handleTotalFloorArea = (e: ChangeEvent<HTMLInputElement>) => {
    if (validateNumber(e)) return;
    setTotalFloorArea(e.target.value);
  };

  const handleGrossFloorArea = (e: ChangeEvent<HTMLInputElement>) => {
    if (validateNumber(e)) return;
    setGrossFloorArea(e.target.value);
  };

  const handleRoomCount = (e: ChangeEvent<HTMLInputElement>) => {
    if (validateNumber(e)) return;
    setRoomCount(e.target.value);
  };

  const handleToiletCount = (e: ChangeEvent<HTMLInputElement>) => {
    if (validateNumber(e)) return;
    setToiletCount(e.target.value);
  };

  const handleEstimateDuration = (e: ChangeEvent<HTMLInputElement>) => {
    if (validateNumber(e)) return;
    setEstimateDuration(e.target.value);
  };

  const handleWarranty = (e: ChangeEvent<HTMLInputElement>) => {
    setWarranty(e.target.value);
  };

  const handleHasModel = (e: ChangeEvent<HTMLInputElement>) => {
    if (validateNumber(e)) return;
    setHasModel(e.target.value);
  };

  const handleIsHut = (e: ChangeEvent<HTMLInputElement>) => {
    if (validateNumber(e)) return;
    setIsHut(e.target.value);
  };

  const handleBasePrice = (e: ChangeEvent<HTMLInputElement>) => {
    if (validateNumber(e)) return;
    setDiscountPrice(e.target.value);
    setBasePrice(e.target.value);
  };

  const handleDiscountPrice = (e: ChangeEvent<HTMLInputElement>) => {
    if (validateNumber(e)) return;
    if (!basePrice || Number(basePrice) < Number(e.target.value)) {
      alertError('가격을 올바르게 입력해주세요.', '할인된 가격은 기본 가격보다 적어야 합니다.');
      return;
    }
    setDiscountPrice(e.target.value);
  };

  return (
    <div
      className="py-4 my-4"
      style={{
        borderTopStyle: 'solid',
        borderTopWidth: '2px',
      }}
    >
      <h3 className="fw-bold mb-4" style={{}}>
        제품 기본 정보를 입력해주세요.
      </h3>
      <div style={{ width: 'auto', borderRadius: '10px', backgroundColor: 'lightgray', padding: '10px' }}>
        💡 <span style={{ color: 'red' }}>*</span> 표시가 된 항목은 필수 항목입니다.
      </div>
      <div
        style={{
          width: 'auto',
          borderRadius: '10px',
          backgroundColor: 'lightgray',
          padding: '10px',
          marginTop: '20px',
        }}
      >
        💡 단위를 제외한, 숫자만 입력해주세요.
      </div>
      <div className="d-flex flex-column">
        <TextBoxComponent
          className={'my-2'}
          title={'제품명 (최대 15자)'}
          name={'house_name'}
          value={houseName}
          onChange={handleHouseName}
          essential
        />
        <TextBoxComponent
          className={'my-2'}
          title={'실제 사용 평수 (단위: 평)'}
          name={'total_floor_area'}
          value={totalFloorArea}
          onChange={handleTotalFloorArea}
          essential
        />
        <TextBoxComponent
          className={'my-2'}
          title={'건축면적 (단위: ㎡)'}
          name={'building_area'}
          value={buildingArea}
          onChange={handleBuildingArea}
          essential
        />
        <TextBoxComponent
          className={'my-2'}
          title={'연면적 (단위: ㎡)'}
          name={'gross_floor_area'}
          value={grossFloorArea}
          onChange={handleGrossFloorArea}
          essential
        />
        <div
          style={{
            width: 'auto',
            borderRadius: '10px',
            backgroundColor: 'lightgray',
            padding: '10px',
            marginTop: '20px',
          }}
        >
          💡 할인이 없다면, 기본 가격과 최종 가격에 같은 값을 입력해주세요.
        </div>
        <div className="row">
          <TextBoxComponent
            className={'col-6 my-2'}
            title={'기본 가격(단위: 원 / 부가세 제외)'}
            name={'base_price'}
            value={basePrice}
            onChange={handleBasePrice}
            essential
          />
          <TextBoxComponent
            className={'col-6 my-2'}
            title={'할인 후 최종 가격(단위: 원 / 부가세 제외)'}
            name={'final_price'}
            value={discountPrice}
            onChange={handleDiscountPrice}
            essential
          />
        </div>

        {/* floor */}
        <RadioComponent
          title={'층수'}
          name={'floor'}
          onChange={handleFloorCount}
          value={floorCount}
          data={[
            { title: '1층', data: 1 },
            { title: '2층', data: 2 },
            { title: '3층 이상', data: 3 },
          ]}
          essential
        />

        {/* room_count */}
        <RadioComponent
          title={'방 개수'}
          name={'room_count'}
          onChange={handleRoomCount}
          value={roomCount}
          data={[
            { title: '1개', data: 1 },
            { title: '2개', data: 2 },
            { title: '3개', data: 3 },
            { title: '4개', data: 4 },
            { title: '5개 이상', data: 5 },
          ]}
          essential
        />

        {/* toilet_count */}
        <RadioComponent
          title={'화장실 개수'}
          name={'toilet_count'}
          value={toiletCount}
          onChange={handleToiletCount}
          data={[
            { title: '1개', data: 1 },
            { title: '2개', data: 2 },
            { title: '3개', data: 3 },
            { title: '4개 이상', data: 4 },
          ]}
          essential
        />

        {/* estimate_duration */}
        <RadioComponent
          title={'예상 소요 기간 (제작일 기준)'}
          name={'estimate_duration'}
          onChange={handleEstimateDuration}
          value={estimateDuration}
          data={[
            { title: '1개월', data: 1 },
            { title: '2개월', data: 2 },
            { title: '3개월', data: 3 },
            { title: '4개월', data: 4 },
            { title: '5개월', data: 5 },
            { title: '6개월 이상', data: 6 },
          ]}
          essential
        />

        {/* warranty */}
        <RadioComponent
          title={'AS 보증 기간'}
          name={'warranty'}
          onChange={handleWarranty}
          value={warranty}
          data={[
            { title: '없음', data: '없음' },
            { title: '12개월', data: '12개월' },
            { title: '24개월', data: '24개월' },
            { title: '36개월', data: '36개월' },
          ]}
          essential
        />

        {/* hasModel */}
        <RadioComponent
          title={'농촌 체류형 주택으로 사용 가능한지 여부'}
          name={'has_model'}
          onChange={handleHasModel}
          value={hasModel}
          data={[
            { title: '예', data: 1 },
            { title: '아니오', data: 0 },
          ]}
          essential
        />

        {/* 농막인지 확인 */}
        <RadioComponent
          title={'농막으로 사용가능한지 여부'}
          name={'is_hut'}
          onChange={handleIsHut}
          value={isHut}
          data={[
            { title: '예', data: 1 },
            { title: '아니오', data: 0 },
          ]}
          essential
        />

        {/* 특이사항 */}
        <HouseSpecificationSelectComponent
          title={'가격에 포함된 특이사항 (다중선택 가능)'}
          name={'specificity_info'}
          value={specificityInfo}
          onChange={setSpecificityInfo}
          dataList={['없음', '다락방', '발코니', '베란다', '옥상', '데크', '창고']}
        />

        <TextAreaComponent
          className={'my-2'}
          title={'제품 소개글 (최대 2,000자)'}
          name={'house_explanation'}
          essential
          value={houseExplanation}
          onChange={handleHouseExplanation}
        />
      </div>
    </div>
  );
}
