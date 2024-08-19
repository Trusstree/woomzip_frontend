'use client';

import useDeliveryInfo from '@/app/mypage/[uid]/house/_store/deliveryInfo';
import { SelectBoxComponent } from '@/components/forms/SelectBoxComponent';
import { ChangeEvent } from 'react';

export function HouseDeliveryComponent() {
  const { deliveryInfo, setDeliveryInfo } = useDeliveryInfo();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const title = e.target.name;
    if (e.target.checked) {
      if (deliveryInfo.includes(title)) return;
      setDeliveryInfo([...deliveryInfo, title]);
    } else {
      setDeliveryInfo(deliveryInfo.filter((elem) => elem != title));
    }
  };

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

  return (
    <div
      className="mt-4 py-4"
      style={{
        borderTopStyle: 'solid',
        borderTopColor: '#101648',
        borderTopWidth: '2px',
      }}
    >
      <h3 className="fw-bold mb-4">배송 정보를 입력해주세요.</h3>

      <div className={` my-2 d-flex flex-column`}>
        <span className="fs-5">배송 불가능 지역</span>
        <div className="row">
          {deliveryRegion.map((title, i) => (
            <SelectBoxComponent
              key={i}
              name={'delivery_unavailable'}
              title={title}
              handleChange={handleChange}
              className={`mx-2 col-2`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
