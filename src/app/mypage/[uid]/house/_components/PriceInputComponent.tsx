'use client';

import { alertError } from '@/lib/alertUtil';
import { isRequired } from '@/lib/validator';
import { ChangeEvent, useCallback, useState } from 'react';
import useOptionInfo from '@/app/mypage/[uid]/house/_store/optionInfo';

const validateNumber = (e: ChangeEvent<HTMLInputElement>): boolean => {
  const regex = /^([1-9]{1}\d{0,9})(\.{1}\d{0,2})?$/g;
  if (e.target.value && !regex.test(e.target.value)) {
    alertError('유효한 숫자를 입력해주세요', '100억 미만의 소수점 두 자리까지의 숫자만 입력해주세요.');
    return true;
  }
  return false;
};

export function PriceInputComponent() {
  const [priceData, setPriceData] = useState({
    option_type: '',
    option_product_name: '',
    option_product_price: 0,
  });
  const { optionInfo, setOptionInfo } = useOptionInfo();

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setPriceData((oldValues) => ({ ...oldValues, [e.target.name]: e.target.value }));
  };

  const onChangePrice = (e: ChangeEvent<HTMLInputElement>) => {
    if (validateNumber(e)) return;
    setPriceData((oldValues) => ({ ...oldValues, [e.target.name]: e.target.value }));
  };

  const submitChange = async () => {
    if (!isRequired(priceData['option_product_name'])) {
      alertError('option_product_name', '한 글자 이상 써야해요 ㅠㅠ');
      return;
    }
    if (!isRequired(priceData['option_product_price'])) {
      alertError('option_product_price', '한 글자 이상 써야해요 ㅠㅠ');
      return;
    }

    setOptionInfo([...optionInfo, priceData]);
    setPriceData({
      option_type: '',
      option_product_name: '',
      option_product_price: 0,
    });
  };

  return (
    <div className={`row`}>
      <div className="col-6">
        <input
          className="w-100 h-100"
          type="text"
          id={'option_product_name'}
          name={'option_product_name'}
          onChange={onChangeName}
          value={priceData['option_product_name']}
        />
      </div>

      <div className="col-4">
        <input
          className="w-100 h-100"
          type="text"
          id={'option_product_price'}
          name={'option_product_price'}
          onChange={onChangePrice}
          value={priceData['option_product_price']}
        />
      </div>

      <div className="col-2">
        <button style={{ backgroundColor: '#101648' }} className="btn text-white w-100" onClick={submitChange}>
          추가
        </button>
      </div>
    </div>
  );
}
