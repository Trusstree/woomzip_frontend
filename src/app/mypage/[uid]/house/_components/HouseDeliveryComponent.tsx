'use client';

import useDeliveryInfo from '@/app/mypage/[uid]/house/_store/deliveryInfo';
import { SelectBoxComponent } from '@/components/forms/SelectBoxComponent';
import { ChangeEvent, useState } from 'react';

const deliveryRegion = [
  '없음(전국 배송 가능)',
  '제주도',
  '전라남도',
  '전라북도',
  '경상남도',
  '경상북도',
  '충청남도',
  '충청북도',
  '경기남부',
  '경기북부',
  '강원도',
  '서울',
];

export function HouseDeliveryComponent() {
  const { deliveryInfo, setDeliveryInfo } = useDeliveryInfo();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    const checked = e.target.checked;

    if (checked) {
      if (!deliveryInfo.includes(title)) setDeliveryInfo([...deliveryInfo, title]);
    } else {
      if (deliveryInfo.includes(title)) setDeliveryInfo(deliveryInfo.filter((el) => el != title));
    }
  };

  return (
    <div
      className="mt-4 py-4"
      style={{
        borderTop: '1px solid gray',
      }}
    >
      <h3 className="" style={{ margin: '50px 0' }}>
        2. 배송 정보를 입력해주세요.
      </h3>

      <div className={` my-2 d-flex flex-column`}>
        <span className="" style={{ fontSize: '17px' }}>
          <span style={{ color: 'red' }}>*</span> 배송 불가능 지역
        </span>
        <div className="row">
          {deliveryRegion.map((title, i) => (
            <SelectBoxComponent
              key={i}
              name={'delivery_unavailable'}
              title={title}
              onChange={handleChange}
              className={`mx-2 col-2`}
              checked={deliveryInfo.includes(title)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
