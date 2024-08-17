'use client';

import useQuery from '@/hooks/useQuery';
import { detailPriceText } from '@/lib/stringUtil';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from '@/app/house/[pid]/_styles/HouseRemocon.module.css';

export default function HouseRemocon({ pid, houseData, optionData }) {
  const { createQueryString } = useQuery();
  const router = useRouter();

  const [selectedOptionData, setSelectedOptionData] = useState([]);

  const gyeonjeokLink = `${'/planning'}?${createQueryString('house_id', pid.toString())}`;

  return (
    <div className={`card ${styles.HouseRemoconCard}`}>
      <div
        style={{
          padding: '15px',
          boxShadow: '3px 3px 13px rgba(0, 0, 0, 0.2)',
          borderRadius: '10px',
        }}
      >
        <div style={{ fontSize: '20px', fontWeight: '500' }}>
          ₩ {detailPriceText(houseData['final_price'])} <span style={{ fontWeight: '300' }}>/채</span>
        </div>

        <div className={''} style={{ width: '100%' }}>
          <select
            onChange={(ee) => {
              if (Number(ee.target.value) >= 0 && !selectedOptionData.includes(optionData[Number(ee.target.value)])) {
                setSelectedOptionData((oldValue) => [...oldValue, optionData[ee.target.value]]);
              }
            }}
            disabled={optionData?.length == 0}
            defaultValue={'선택옵션'}
            className="form-select"
            style={{ fontSize: '14px', marginTop: '15px' }}
            aria-label="Default select example"
          >
            <option value={-1}>옵션 선택</option>
            {optionData &&
              optionData.map((e, i) => (
                <option key={i} value={i}>
                  {' '}
                  {e['option_product_name']} ({detailPriceText(e['option_product_price'])})
                </option>
              ))}
          </select>

          <div className={'row'} style={{ width: '100%', marginTop: '10px', marginLeft: '2px' }}>
            <div
              className="w-100 btn text-white d-flex justify-content-center align-items-center"
              style={{ backgroundColor: '#314FC0', height: '60px' }}
              onClick={() => {
                router.push(gyeonjeokLink);
              }}
            >
              <span style={{ wordBreak: 'keep-all', fontSize: '16px' }}>
                <span style={{ fontWeight: '600' }}>AI 타잔</span>과
                <br />내 총 비용 확인하기
              </span>
            </div>
          </div>

          <div
            style={{
              fontSize: '14px',
              fontWeight: '330',
              textAlign: 'center',
              margin: '10px 0',
            }}
          >
            본 계약 전에는 요금이 청구되지 않습니다.
          </div>

          {/* 선택된 옵션 */}
          <div className="">
            {selectedOptionData &&
              selectedOptionData.map((e, i) => (
                <div key={i} className="d-flex align-items-center justify-content-between">
                  <div className="row d-flex align-items-center" style={{ width: 'auto', marginLeft: '0px' }}>
                    <div style={{ fontSize: '14px', width: 'auto', padding: '0' }}>{e['option_product_name']}</div>
                    <div
                      className="btn"
                      style={{ fontSize: '14px', color: '#314FC0', width: '20px', padding: '5px' }}
                      onClick={() => {
                        setSelectedOptionData((oldValue) => oldValue.filter((_, j) => j != i));
                      }}
                    >
                      X
                    </div>
                  </div>

                  <div style={{ fontSize: '14px', width: 'auto' }}>{detailPriceText(e['option_product_price'])}</div>
                </div>
              ))}
          </div>
        </div>

        <hr style={{ margin: '0' }} />
        <div className="d-flex justify-content-between" style={{ width: '99%', marginLeft: '3px', marginTop: '10px' }}>
          <div style={{ width: '100px', fontSize: '15px' }}>할인</div>
          <div style={{ width: 'auto', fontSize: '15px', fontWeight: '400' }}>
            {houseData['discount_rate'] > 0 && ( //houseData.discount
              <>
                <span style={{ color: '#314FC0', fontSize: '16px' }}>{houseData['discount_rate']}%</span>
              </>
            )}
          </div>
        </div>
        <div className="d-flex justify-content-between" style={{ width: '99%', marginLeft: '3px', marginTop: '3px' }}>
          <div style={{ width: '100px', fontSize: '15px' }}>부가세(10%)</div>
          <div style={{ width: 'auto', fontSize: '15px', fontWeight: '400' }}>
            {detailPriceText(
              (selectedOptionData.reduce((acc, cur) => acc + cur['option_product_price'], 0) +
                houseData['final_price']) /
                10,
            )}
          </div>
        </div>
        <div className="d-flex justify-content-between" style={{ width: '99%', marginLeft: '3px', marginTop: '3px' }}>
          <div style={{ width: '100px', fontSize: '15px', fontWeight: '500' }}>총 금액</div>
          <div style={{ width: 'auto', fontSize: '15px', fontWeight: '500' }}>
            {detailPriceText(
              (selectedOptionData.reduce((acc, cur) => acc + cur['option_product_price'], 0) +
                houseData['final_price']) *
                1.1,
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
