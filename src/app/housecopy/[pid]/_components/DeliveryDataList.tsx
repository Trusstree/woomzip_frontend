'use client';

import Image from 'next/image';

export default function DeliveryDataList({ pid, houseData, deliveryData }) {
  const optionalData = [
    {
      src: '/houseIcons/framework.png',
      alt: 'location',
      title: '배송불가 지역',
      text: `${deliveryData}`,
    },
    {
      src: '/houseIcons/framework.png',
      alt: 'delivery',
      title: '배송비',
      text: `미포함(조건에 따라 변동)`,
    },
  ];

  return (
    <div className="row" style={{ margin: '120px 0' }}>
      <div className="col-12" style={{ fontSize: '22px', marginBottom: '15px' }}>
        제품 배송 정보
      </div>
      {optionalData.map((optional, index) => (
        <div className="col-md-2 col-sm-4 col-6" style={{ margin: '10px 0' }}>
          <div style={{ padding: '10px', borderRadius: '10px', backgroundColor: '#F5F7FF' }}>
            <div className="d-flex" style={{ alignItems: 'center' }}>
              <Image
                src={optional.src}
                alt={optional.alt}
                width={38}
                height={38}
                style={{ width: '22px', height: '22px' }}
              ></Image>
              <div style={{ fontSize: '16px', marginLeft: '5px' }}>{optional.title}</div>
            </div>

            <div
              style={{
                fontSize: '16px',
                color: '#314FC0',
                wordBreak: 'keep-all',
                width: '100%',
                textAlign: 'right',
              }}
            >
              {optional.text}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
