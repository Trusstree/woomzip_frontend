import styles from '@/app/test/_css/test2.module.css';

const houseData = [
  { label: '침실', value: '1', unit: '개' },
  { label: '욕실', value: '2', unit: '개' },
  { label: '층', value: '1', unit: '층' },
  { label: '골조', value: '경량목', unit: '' },
  { label: '실평수', value: '11', unit: '평' },
  { label: '건축면적', value: '33.2', unit: 'm2' },
  { label: '제작 소요기간', value: '2', unit: '개월' },
  { label: 'AS 보증기간', value: '24', unit: '개월' },
  { label: '특이사항', value: '창고, 배란다', unit: '' },
];

const InfoCard = ({ label, value, unit }) => (
  <div
    className="card"
    style={{
      width: '100%',
      border: 'none',
      borderRadius: '5px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      padding: '10px',
      marginBottom: '15px',
    }}
  >
    <div className="d-flex justify-content-between" style={{ alignItems: 'center' }}>
      <div
        style={{
          fontSize: '16px',
          color: '#666666',
          paddingRight: '10px',
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: '20px',
          color: '#444444',
          fontWeight: '400',
          paddingLeft: '10px',
        }}
      >
        <span style={{ fontSize: '22px', color: '#314FC0', fontWeight: '600' }}>{value}</span>
        {unit}
      </div>
    </div>
  </div>
);

export default function test2() {
  return (
    <>
      <div style={{ width: '90%', maxWidth: '1300px', margin: '0 auto' }}>
        <div className="row">
          <div className="col-md-6 col-12">
            <div
              className="container"
              style={{ backgroundColor: '#000000', width: '100%', aspectRatio: '1', borderRadius: '15px' }}
            ></div>
          </div>
          <div className="col-md-6 col-12">
            <div style={{ padding: '30px 0' }}>
              <div style={{ fontSize: '32px', color: '#222222', fontWeight: '600' }}>제품명</div>
              <div style={{ fontSize: '28px', color: '#444444', fontWeight: '400' }}>
                <span style={{ fontSize: '32px', color: '#314FC0', fontWeight: '600' }}>1억 5400</span>만원
                <span style={{ fontSize: '20px' }}> (부가세 미포함)</span>
              </div>
            </div>

            <div className="row">
              {houseData.map((item, index) => (
                <div className="col-md-5 col-6" key={index} style={{ marginBottom: '15px' }}>
                  <InfoCard label={item.label} value={item.value} unit={item.unit} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: '40px 0' }}>
        <div className={styles.sub_title_container}>
          <div className={styles.sub_title}>
            가장 합리적인 구매를 위한
            <br />
            무료 서비스 제공
          </div>
          <div className={styles.discription}>40여가지의 데이터 분류, 카테고리, 상세 필터링</div>
        </div>
        <div className="row" style={{ width: '100%', maxWidth: '1150px', margin: '0 auto' }}>
          <div className="col-2"></div>
          <div className="col-4">
            <div
              className="container"
              style={{
                width: '100%',
                aspectRatio: '5/7',
                borderRadius: '20px',
                border: '1px solid #999999',
                padding: '20px',
              }}
            >
              <div style={{ fontSize: '20px', fontWeight: '600', color: '#222222' }}>혼자라면</div>
              <div style={{ fontSize: '14px', fontWeight: '500', color: '#444444' }}>
                혼자라면 겪을 문제들이에요. 벌써 어마무시하죠? 힘들어요 힘들어
              </div>

              <div style={{ fontSize: '30px', fontWeight: '700', color: '#222222', padding: '10px 0 30px 0' }}>
                ₩ 0,000원
              </div>

              <div>
                <div style={{ fontSize: '14px', fontWeight: '500', color: '#444444', padding: '5px 10px' }}>
                  ✔️ 발품 팔아서 내 집 찾기
                </div>
                <div style={{ fontSize: '14px', fontWeight: '500', color: '#444444', padding: '5px 10px' }}>
                  ✔️ 직접 업체 찾아다니기
                </div>
                <div style={{ fontSize: '14px', fontWeight: '500', color: '#444444', padding: '5px 10px' }}>
                  ✔️ 어려운 계약과정
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div
              className="container"
              style={{
                width: '100%',
                aspectRatio: '5/7',
                borderRadius: '20px',
                border: '1px solid #999999',
                padding: '20px',
                backgroundColor: '#000000',
                color: 'white',
              }}
            >
              <div style={{ fontSize: '20px', fontWeight: '600' }}>움집 이용 시</div>
              <div style={{ fontSize: '14px', fontWeight: '500' }}>
                움집과 함께라면 내 집 짓기,
                <br />더 이상 어렵지 않아요
              </div>

              <div style={{ fontSize: '30px', fontWeight: '700', padding: '10px 0 30px 0' }}>₩ 무료</div>

              <div>
                <div style={{ fontSize: '14px', fontWeight: '500', padding: '5px 10px' }}>
                  ✔️ 쉽고 빠른 나에게 딱 맞는 집 찾기
                </div>
                <div style={{ fontSize: '14px', fontWeight: '500', padding: '5px 10px' }}>✔️ 쉬운 업체 소통</div>
                <div style={{ fontSize: '14px', fontWeight: '500', padding: '5px 10px' }}>✔️ 믿을 수 있는 계약과정</div>
                <div style={{ fontSize: '14px', fontWeight: '500', padding: '5px 10px' }}>✔️ 합리적인 구매</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          margin: '70px 0 40px 0',
          padding: '40px 0',
          width: '100%',
          borderRadius: '15px',
          backgroundColor: '#000000',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ fontSize: '20px', fontWeight: '600', textAlign: 'center' }}>
          당신의 여정의 시작을 위한 한 걸음,
          <br />
          움집이 같이 걷겠습니다.
        </div>

        <div style={{ fontSize: '42px', fontWeight: '700', textAlign: 'center', padding: '40px 0 10px 0' }}>
          무엇이든 물어보세요
        </div>
        <div className="row" style={{ width: '90%', maxWidth: '500px' }}>
          <div style={{ width: '30%' }}>
            <div>이름</div>
            <input style={{ border: 'none', borderRadius: '5px', width: '100%' }}></input>
          </div>
          <div style={{ width: '70%' }}>
            <div>이메일 혹은 전화번호</div>
            <input style={{ border: 'none', borderRadius: '5px', width: '100%' }}></input>
          </div>
          <div style={{ width: '100%' }}>
            <div>문의사항</div>
            <input style={{ border: 'none', borderRadius: '5px', width: '100%', height: '250px' }}></input>
          </div>
        </div>
      </div>

      <div style={{ padding: '40px 0' }}>
        <div style={{ textAlign: 'center', fontSize: '42px' }}>문의내역</div>
        <div>
          <hr />
          <div style={{ width: '100%', maxWidth: '1150px', margin: '0 auto' }}>구조 변경을 얼마나 들까요?</div>
        </div>
        <div>
          <hr />
          <div style={{ width: '100%', maxWidth: '1150px', margin: '0 auto' }}>구조 변경을 얼마나 들까요?</div>
        </div>
        <div>
          <hr />
          <div style={{ width: '100%', maxWidth: '1150px', margin: '0 auto' }}>구조 변경을 얼마나 들까요?</div>
        </div>
      </div>
    </>
  );
}
