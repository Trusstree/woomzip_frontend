import Image from 'next/image';

export default function SafeList() {
  const optionalData = [
    {
      src: '/houseIcons/safeAsk.png',
      alt: 'safeAsk',
      title: '안심 문의',
      text: '문의사항 접수 및 안내',
      text2: '커스터마이징 요청사항 파악',
      text3: '비교 견적서 제공',
    },
    {
      src: '/houseIcons/safeContract.png',
      alt: 'safeAsk',
      title: '안심 계약',
      text: '움집을 통한 제 3자 계약',
      text2: `20장 이상 움집 표준계약서 제공`,
      text3: '2주 이내 위약금 없는 안심 계약취소',
    },
    {
      src: '/houseIcons/safePay.png',
      alt: 'safeAsk',
      title: '안심 지불',
      text: `지불대행 에스크로 서비스`,
      text2: '6단계 비용 지불 과정',
      text3: '단계별 공정 완료 확인 시스템',
    },
    {
      src: '/houseIcons/safeAS.png',
      alt: 'safeAsk',
      title: '안심 사후관리',
      text: `2년 무상 AS 제공`,
      text2: 'AS 기간동안 총 비용 중 6%를 움집에서 보관하여 AS 거부 예방',
    },
  ];

  return (
    <div className="row" style={{ padding: '120px 0' }}>
      <div className="col-12 d-flex" style={{ marginBottom: '15px', alignItems: 'center' }}>
        <Image
          src={'/houseIcons/safe.png'}
          alt={'safe'}
          width={38}
          height={38}
          style={{ width: '22px', height: 'auto' }}
        ></Image>
        <div style={{ fontSize: '22px', marginLeft: '5px' }}>움집 안심 서비스란?</div>
      </div>
      {optionalData.map((optional, index) => (
        <div key={index} className="col-md-3 col-6" style={{ margin: '10px 0' }}>
          <div style={{ padding: '10px', alignItems: 'center', justifyItems: 'center' }}>
            <Image
              src={optional.src}
              alt={optional.alt}
              width={130}
              height={130}
              style={{ width: '130px', height: 'auto' }}
            ></Image>

            <div style={{ fontSize: '20px', fontWeight: '600' }}>{optional.title}</div>

            <div
              style={{
                fontSize: '16px',
                fontWeight: 'regural',
                wordBreak: 'keep-all',
                width: '100%',
                textAlign: 'center',
                marginTop: '5px',
              }}
            >
              <div>{optional.text}</div>
              <div>{optional.text2}</div>
              <div>{optional.text3}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
