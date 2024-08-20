'use client';

import { PriceComponent } from '@/app/mypage/[uid]/house/_components/PriceComponent';
import { PriceInputComponent } from '@/app/mypage/[uid]/house/_components/PriceInputComponent';
import useHouseInfo from '@/app/mypage/[uid]/house/_store/houseInfo';
import useOptionInfo from '@/app/mypage/[uid]/house/_store/optionInfo';
import { TextAreaComponent } from '@/components/forms/TextAreaComponent';
import { ChangeEvent } from 'react';

export function HousePriceComponent() {
  const { optionInfo } = useOptionInfo();
  const { priceVariation, setPriceVariation } = useHouseInfo();
  const handlePriceVariation = (e: ChangeEvent<HTMLInputElement>) => {
    setPriceVariation(e.target.value);
  };

  return (
    <div
      className="mt-4 py-4"
      style={{
        borderTop: '1px solid gray',
      }}
    >
      <h3 style={{ margin: '50px 0' }}>3. 제품 추가 가격 정보를 입력해주세요.</h3>
      <div style={{ width: 'auto', borderRadius: '10px', backgroundColor: 'lightgray', padding: '10px' }}>
        💡 옵션의 가격은 평단가가 아닌, 해당 제품에 적용했을 때 추가되는 총 금액으로 입력해주세요.
      </div>

      <div className={`mt-2 row`}>
        <div className="col-6" style={{ fontSize: '17px', marginLeft: '9px' }}>
          옵션 이름
        </div>
        <div className="col-4" style={{ fontSize: '17px' }}>
          옵션 추가 가격 (단위: 원 / 부가세 제외)
        </div>
      </div>

      <div className="row">
        <PriceInputComponent />
      </div>

      <div className="w-100 d-flex flex-column">
        {optionInfo?.map((e: any, i: number) => <PriceComponent key={i} index={i} />)}
      </div>

      <TextAreaComponent
        className={'mt-5 mb-2'}
        title={'가격 관련 설명글을 작성해주세요. (최대 2,000자)'}
        name={'price_variation'}
        value={priceVariation}
        onChange={handlePriceVariation}
      />
    </div>
  );
}
