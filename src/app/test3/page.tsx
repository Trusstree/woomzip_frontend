import styles from '@/app/test2/test2.module.css';

export default function test2() {
  return (
    <>
      <div style={{ padding: '60px 0' }}>
        <div className={styles.title_container}>
          <div className={styles.title}>
            내 집 짓기의
            <br />
            가장 합리적인 선택
          </div>
        </div>
      </div>

      <div style={{ padding: '40px 0' }}>
        <div className={styles.sub_title_container}>
          <div className={styles.sub_title}>가장 많은 제품</div>
          <div className={styles.discription}>국내 가장 많은 모듈러 주택 제품 확보</div>
        </div>
        <div className="row g-1">
          <div className="col-2">
            <div
              className="container"
              style={{ backgroundColor: '#000000', width: '90%', aspectRatio: '1', borderRadius: '15px' }}
            ></div>
          </div>

          <div className="col-1">
            <div
              className="container"
              style={{ backgroundColor: '#000000', width: '90%', aspectRatio: '5 / 6', borderRadius: '15px' }}
            ></div>
          </div>

          <div className="col-2">
            <div
              className="container"
              style={{
                backgroundColor: '#000000',
                width: '90%',
                aspectRatio: '5 / 6',
                borderRadius: '15px',
                marginTop: '30px',
              }}
            ></div>
          </div>

          <div
            className="col-2"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '1' }}
          >
            <div style={{ width: 'auto', fontSize: '90px', fontWeight: '600' }}>
              <span style={{ color: '#314FC0', fontSize: '100px', fontWeight: '700' }}>55+</span>개
            </div>
          </div>

          <div className="col-2">
            <div
              className="container"
              style={{
                backgroundColor: '#000000',
                width: '90%',
                aspectRatio: '10 / 11',
                borderRadius: '15px',
                marginTop: '10px',
              }}
            ></div>
          </div>

          <div className="col-1">
            <div
              className="container"
              style={{
                backgroundColor: '#000000',
                width: '90%',
                aspectRatio: '5 / 6',
                borderRadius: '15px',
                marginTop: '60%',
              }}
            ></div>
          </div>

          <div className="col-1">
            <div
              className="container"
              style={{ backgroundColor: '#000000', width: '90%', aspectRatio: '5 / 6', borderRadius: '15px' }}
            ></div>
          </div>

          <div className="col-1">
            <div
              className="container"
              style={{ backgroundColor: '#000000', width: '90%', aspectRatio: '5 / 6', borderRadius: '15px' }}
            ></div>
          </div>
        </div>
      </div>

      <div style={{ padding: '40px 0' }}>
        <div className={styles.sub_title_container}>
          <div className={styles.sub_title}>가장 쉬운 탐색</div>
          <div className={styles.discription}>40여가지의 데이터 분류, 카테고리, 상세 필터링</div>
        </div>
        <div className="row g-1" style={{ width: '100%', maxWidth: '1150px', margin: '0 auto' }}>
          <div className="col-7">
            <div
              className="container"
              style={{ backgroundColor: '#000000', width: '100%', aspectRatio: '1', borderRadius: '15px' }}
            ></div>
          </div>
          <div
            className="col-5"
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
          >
            <div style={{ margin: '20px 0' }}>
              <div style={{ fontSize: '20px', fontWeight: '600', color: '#222222' }}>제품 카테고리화</div>
              <div style={{ fontSize: '16px', fontWeight: '500', color: '#444444' }}>쉽게 찾아요</div>
            </div>
            <div style={{ margin: '20px 0' }}>
              <div style={{ fontSize: '20px', fontWeight: '600', color: '#222222' }}>제품 카테고리화</div>
              <div style={{ fontSize: '16px', fontWeight: '500', color: '#444444' }}>쉽게 찾아요</div>
            </div>
            <div style={{ margin: '20px 0' }}>
              <div style={{ fontSize: '20px', fontWeight: '600', color: '#222222' }}>제품 카테고리화</div>
              <div style={{ fontSize: '16px', fontWeight: '500', color: '#444444' }}>쉽게 찾아요</div>
            </div>
            <div style={{ margin: '20px 0' }}>
              <div style={{ fontSize: '16px', fontWeight: '600', color: '#222222' }}>{'>'}경험하기</div>
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
