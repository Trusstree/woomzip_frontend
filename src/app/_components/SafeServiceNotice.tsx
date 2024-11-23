import Image from 'next/image';

const dataSets = [
  {
    backgroundColor: '#FFFFFF',
    badgeText: '안심 문의',
    mainTitle: '문의는 간편하게',
    subTitle: '원하는 사항을 파악하여 깔끔하게 해결해드릴게요.',
    soloTitle: '혼자라면',
    soloItems: ['어려운 건축용어와 지식들', '여러 견적받기 어려움', '커스터마이징 어려움'],
    withUmgipTitle: '움집 안심문의',
    withUmgipItems: ['고객 요구사항 파악', '변경사항 있을 시 커스터마이징 파악', '가장 적합한 3개사 가견적 제공'],
    src: '/houseIcons/safeAsk.png',
    alt: 'fastProcess',
  },
  {
    backgroundColor: '#FFFFFF',
    badgeText: '안심 계약',
    mainTitle: '계약은 안전하게',
    subTitle: '움집에서 진행하세요.',
    soloTitle: '혼자라면',
    soloItems: ['제작사와 직접 계약', '잦은 계약금 환불 거부', '제작사마다 다른 빈약한 계약서'],
    withUmgipTitle: '움집 안심계약',
    withUmgipItems: [
      '움집, 고객, 제작사 셋이서 하는 제 3자 계약',
      '어떤 사유든지 7일 이내 계약금 환불 가능',
      '20페이지 이상의 움집 안심 표준계약서 제공',
    ],
    src: '/houseIcons/safeContract.png',
    alt: 'safeAsk',
  },

  {
    backgroundColor: '#FAFBFF',
    badgeText: '안심 지불',
    mainTitle: '지불은 확실하게',
    subTitle: '확실하게 확인하고, 안전하게 지불하세요.',
    soloTitle: '혼자라면',
    soloItems: ['업체마다 다른 지불 과정', '제작과정 확인 어려움', '잔금 처리 후 배송'],
    withUmgipTitle: '움집 안심지불',
    withUmgipItems: ['6단계로 지불 과정 통일', '제작 공정별 상황 파악', '주택 설치 후 잔금 처리'],
    src: '/houseIcons/safePay.png',
    alt: 'safeContract',
  },
  {
    backgroundColor: '#FAFBFF',
    badgeText: '안심 AS',
    mainTitle: 'AS는 당연하게',
    subTitle: '2년 AS 당연하게 보호 받으세요.',
    soloTitle: '혼자라면',
    soloItems: ['AS 책임관계 불명확', '잦은 AS 거부'],
    withUmgipTitle: '움집 안심AS',
    withUmgipItems: ['표준 AS 기준 제공', '하자 이행증권 필수 발행'],
    src: '/houseIcons/safeAS.png',
    alt: 'customContract',
  },
];

export default function SafeServiceNotice() {
  return (
    <>
      {dataSets.map((data, index) => (
        <div key={index} style={{ backgroundColor: data.backgroundColor, padding: '60px 0' }}>
          <div style={{ maxWidth: '1280px', width: '90%', margin: '0 auto' }}>
            <div
              style={{
                backgroundColor: '#314FC0',
                borderRadius: '30px',
                padding: '5px',
                width: '100px',
                textAlign: 'center',
                color: 'white',
                fontSize: '20px',
                marginBottom: '40px',
              }}
            >
              {data.badgeText}
            </div>

            <div className="row">
              <div className="col-md-4 col-12" style={{ marginTop: '20px' }}>
                <Image
                  src={data.src}
                  alt={data.alt}
                  width={130}
                  height={130}
                  style={{ width: '130px', height: 'auto' }}
                ></Image>
                <div style={{ fontSize: '28px', fontWeight: '500', width: 'auto' }}>{data.mainTitle}</div>
                <div style={{ fontSize: '18px', fontWeight: '400', color: '#666666', width: 'auto' }}>
                  {data.subTitle}
                </div>
              </div>
              <div className="col-md-4 col-12" style={{ marginTop: '20px' }}>
                <div
                  style={{
                    width: '100%',
                    borderRadius: '20px',
                    border: '1px solid #999999',
                    padding: '20px',
                  }}
                >
                  <div style={{ fontSize: '20px', fontWeight: '500', marginBottom: '20px', textAlign: 'center' }}>
                    {data.soloTitle}
                  </div>
                  <div>
                    {data.soloItems.map((item, idx) => (
                      <div
                        key={idx}
                        style={{ fontSize: '15px', fontWeight: '500', padding: '5px 10px', textAlign: 'center' }}
                      >
                        ✔️ {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-12" style={{ marginTop: '20px' }}>
                <div
                  style={{
                    width: '100%',
                    borderRadius: '20px',
                    border: '1px solid #314FC0',
                    padding: '20px',
                    backgroundColor: '#F5F7FF',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    className="d-flex"
                    style={{ alignItems: 'center', width: 'auto', justifyContent: 'center', marginBottom: '20px' }}
                  >
                    <Image
                      src={'/houseIcons/safe.png'}
                      alt={'safe'}
                      width={38}
                      height={38}
                      style={{ width: '22px', height: 'auto' }}
                    ></Image>
                    <div style={{ fontSize: '20px', fontWeight: '500', marginLeft: '10px' }}>{data.withUmgipTitle}</div>
                  </div>
                  <div>
                    {data.withUmgipItems.map((item, idx) => (
                      <div
                        key={idx}
                        style={{ fontSize: '15px', fontWeight: '500', padding: '5px 10px', textAlign: 'center' }}
                      >
                        ✔️ {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
