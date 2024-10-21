'use client';

import { detailPriceText } from '@/lib/stringUtil';
import Image from 'next/image';

export default function OptionDataList({ pid, houseData, optionData }) {
  const serviceData = [
    {
      src: '/houseIcons/pyeong1.png',
      alt: 'pyeong',
      title: '평수 확장',
      text: '가능',
      subtitle: '해당 제품 디자인 및 자재 동일하게 평수 확장이 가능합니다.',
    },
    {
      src: '/houseIcons/framework.png',
      alt: 'framework',
      title: '구조 변경',
      text: '가능',
      subtitle: '해당 제품 디자인 및 자재 동일하게 내부 구조 변경이 가능합니다.',
    },
    {
      src: '/houseIcons/framework.png',
      alt: 'framework',
      title: '자재 변경',
      text: '가능',
      subtitle: '해당 제품 내에서 특정 자재를 원하는 자재로 변경이 가능합니다.',
    },
  ];

  return (
    <div className="row" style={{ margin: '120px 0' }}>
      <div className="col-12" style={{ fontSize: '22px' }}>
        {houseData['house_name']}를 커스터마이징 할 수 있어요.
      </div>
      <div className="col-md-4 col-12">
        <div style={{ fontSize: '20px', marginTop: '15px' }}>문의가 필요한 변경</div>
        {serviceData.map((detail, index) => (
          <div className="col-md-12" style={{ margin: '10px 0' }}>
            <div style={{ padding: '15px', border: '1px solid #314FC0', borderRadius: '10px' }}>
              <div className="d-flex justify-content-between" style={{ margin: '5px 0' }}>
                <div className="d-flex" style={{ alignItems: 'center' }}>
                  <Image
                    src={detail.src}
                    alt={detail.alt}
                    width={38}
                    height={38}
                    style={{ width: '22px', height: '22px' }}
                  ></Image>
                  <div style={{ fontSize: '16px', marginLeft: '10px' }}>{detail.title}</div>
                </div>
                <div style={{ fontSize: '16px', color: '#314FC0', wordBreak: 'keep-all' }}>{detail.text}</div>
              </div>

              <div className="d-flex justify-content-between" style={{ margin: '5px 0' }}>
                <div className="d-flex" style={{ alignItems: 'center' }}>
                  <div style={{ fontSize: '16px', marginLeft: '34px' }}>추가비용</div>
                </div>
                <div style={{ fontSize: '16px', color: '#314FC0', wordBreak: 'keep-all' }}>문의하여 알아보기</div>
              </div>

              <div style={{ fontSize: '14px', wordBreak: 'keep-all', color: '#555555' }}>{detail.subtitle}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="col-md-4 col-12">
        <div style={{ fontSize: '20px', marginTop: '15px' }}>추가 옵션구성</div>
        {optionData &&
          optionData.map((e, i) => (
            <div className="col-md-12" key={i}>
              <div style={{ padding: '15px' }}>
                <div style={{ margin: '5px 0' }}>
                  <div className="d-flex" style={{ alignItems: 'center' }}>
                    <Image
                      src={'/houseIcons/addition.png'}
                      alt={'option'}
                      width={38}
                      height={38}
                      style={{ width: '22px', height: '22px' }}
                    ></Image>
                    <div style={{ fontSize: '16px', wordBreak: 'keep-all', marginLeft: '10px' }}>
                      {e['option_product_name']}
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-between" style={{ margin: '5px 0' }}>
                  <div className="d-flex" style={{ alignItems: 'center' }}>
                    <div style={{ fontSize: '16px', marginLeft: '34px' }}>추가비용</div>
                  </div>
                  <div style={{ fontSize: '16px', wordBreak: 'keep-all' }}>
                    {detailPriceText(e['option_product_price'])}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
