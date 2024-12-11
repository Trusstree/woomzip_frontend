import Image from 'next/image';
export default function DeliveryDataList({ pid, houseData, deliveryData }) {
  const optionalData = [
    {
      src: '/houseIcons/delivery.png',
      alt: 'location',
      title: '배송불가 지역',
      text: `${deliveryData}`,
    },
    {
      src: '/houseIcons/money.png',
      alt: 'delivery',
      title: '배송비',
      text: `미포함(조건에 따라 변동)`,
    },
  ];

  return (
    <div className="row" style={{ margin: '140px 0' }}>
      <div className="col-12" style={{ fontSize: '22px', marginBottom: '15px', fontWeight: '500' }}>
        어디까지 배송해드릴까요?
      </div>
      {optionalData.map((optional, index) => (
        <div key={index} className="col-md-2 col-sm-4 col-6" style={{ margin: '10px 0' }}>
          <div style={{ padding: '10px' }}>
            <div className="d-flex" style={{ alignItems: 'center' }}>
              <Image
                src={optional.src}
                alt={optional.alt}
                width={38}
                height={38}
                style={{ width: '22px', height: 'auto' }}
              />
              <div style={{ fontSize: '16px', marginLeft: '5px' }}>{optional.title}</div>
            </div>

            <div
              style={{
                fontSize: '16px',
                fontWeight: '500',
                wordBreak: 'keep-all',
                width: '100%',
                marginTop: '5px',
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
