'use client';

import { useRouter } from 'next/navigation';

export default async function Inquire() {
  const router = useRouter();
  return (
    <>
      <div style={{ backgroundColor: 'black', height: '61px', width: '100%' }}></div>
      <div
        style={{
          width: '100%',
          padding: '100px 0',
        }}
      >
        <div
          style={{
            width: '90%',
            maxWidth: '800px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <div>편하고 빠른 문의</div>
          <div
            style={{
              fontSize: '30px',
              fontWeight: '600',
              wordBreak: 'keep-all',
              textAlign: 'center',
              margin: '20px 0',
            }}
          >
            이제는 시작해보세요. 어렵지 않습니다.
          </div>
          <div style={{ marginBottom: '150px' }}>언제든 편한 시간에 전화 또는 문자로 편하게 문의하세요.</div>
          <div className="row" style={{ width: '100%' }}>
            <div className="col-md-6 col-12" style={{ marginBottom: '30px' }}>
              <div
                style={{
                  width: '100%',
                  height: '230px',
                  backgroundColor: '#F8F8FA',
                  border: 'lightgray 1px solid',
                  borderRadius: '10px',
                  padding: '25px',
                }}
              >
                <div style={{ fontSize: '23px', fontWeight: '700', margin: '5px 0' }}>상세 문의하기</div>
                <div style={{ fontSize: '15px', fontWeight: '350' }}>
                  원하는 조건이 확실하고, 내 조건에 따라 조금 더 상세한 문의를 하고 싶어요.
                </div>
                <div
                  className="btn"
                  style={{
                    backgroundColor: 'black',
                    color: '#ffffff',
                    borderRadius: '50px',
                    padding: '10px 15px',
                    fontWeight: '400',
                    fontSize: '14px',
                    marginTop: '40px ',
                  }}
                  onClick={() => router.push('/inquire/house')}
                >
                  시작해보기 {'>'}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div
                style={{
                  width: '100%',
                  height: '230px',
                  backgroundColor: '#F8F8FA',
                  border: 'lightgray 1px solid',
                  borderRadius: '10px',
                  padding: '25px',
                }}
              >
                <div style={{ fontSize: '23px', fontWeight: '700', margin: '5px 0' }}>빠른 문의하기</div>
                <div style={{ fontSize: '15px', fontWeight: '350' }}>
                  아직 자세하진 않지만, 대략적으로 궁금한 것들을 물어보고 싶어요.
                </div>
                <div
                  className="btn"
                  style={{
                    backgroundColor: 'black',
                    color: '#ffffff',
                    borderRadius: '50px',
                    padding: '10px 15px',
                    fontWeight: '400',
                    fontSize: '14px',
                    marginTop: '40px ',
                  }}
                  onClick={() => router.push('/inquire/contact')}
                >
                  시작해보기 {'>'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
