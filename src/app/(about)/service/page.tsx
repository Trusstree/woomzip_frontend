import Image from 'next/image';
import Inquiry from '@/components/Inquiry';

export default function Service() {
  return (
    <>
      <div
        style={{
          width: '100%',
          aspectRatio: '32 / 17',
          minHeight: '600px',
          maxHeight: '1200px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Image
          src="/8.jpg"
          width={1600}
          height={1200}
          style={{
            objectFit: 'cover',
            width: '100%',
            aspectRatio: '32 / 17',
            minHeight: '600px',
            maxHeight: '1200px',
          }}
          alt={'company'}
        />
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: 0,
            width: '100%',
            fontSize: '15px',
            fontWeight: '600',
            wordBreak: 'keep-all',
            textAlign: 'center',
            color: '#ffffff',
          }}
        >
          움집 서비스 소개
          <div style={{ fontSize: '32px', wordBreak: 'keep-all', fontWeight: '700', marginTop: '30px' }}>
            계획부터 입주까지 움집이 당신과 함께합니다.
          </div>
        </div>
        <div style={{ width: '100%', display: 'flex', position: 'absolute', bottom: '10%', left: '0' }}>
          <div
            className="btn"
            style={{
              border: 'none',
              borderRadius: '20px',
              backgroundColor: '#4067F8',
              color: '#ffffff',
              fontSize: '14px',
              fontWeight: '500',
              padding: '10px 70px',
              margin: '0 auto',
            }}
          >
            문의하기
          </div>
        </div>
      </div>

      <div
        style={{
          width: '100%',
          aspectRatio: '32 / 17',
          minHeight: '600px',
          maxHeight: '1200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: 'auto',
            fontSize: '32px',
            wordBreak: 'keep-all',
            fontWeight: '700',
            marginTop: '100px',
          }}
        >
          움집에서는 누구나 쉽고 빠르게 자연 속 삶을 시작할 수 있습니다.
        </div>
      </div>

      <div
        style={{
          width: '100%',
          padding: '120px 0',
          backgroundColor: '#F9F9FA',
        }}
      >
        <div
          style={{
            width: '100%',
            fontSize: '32px',
            wordBreak: 'keep-all',
            fontWeight: '700',
            textAlign: 'center',
          }}
        >
          어려움이 아닌, 기대만 가득한 여정
        </div>
        <div
          style={{
            width: '90%',
            margin: '0 auto',
            maxWidth: '1200px',
          }}
        >
          <div className="row g-0" style={{ marginTop: '20px' }}>
            <div className="col-md-4 col-12">
              <div
                style={{
                  width: '90%',
                  height: '500px',
                  borderRadius: '15px',
                  padding: '20px',
                  wordBreak: 'keep-all',
                  backgroundColor: '#ffffff',
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // 추가된 그림자
                  margin: '20px auto 0 auto',
                }}
              >
                <div style={{ fontSize: '15px', width: '100%', textAlign: 'center', fontWeight: '700' }}>1단계</div>
                <div
                  style={{ fontSize: '20px', width: '100%', textAlign: 'center', fontWeight: '700', margin: '20px 0' }}
                >
                  나를 위한 다양한 제품들
                </div>
                <div
                  style={{
                    fontSize: '15px',
                    width: '100%',
                    textAlign: 'center',
                    fontWeight: '500',
                    color: '#555555',
                    marginBottom: '20px',
                  }}
                >
                  안심 계약부터, 안심 지불을 통해 내 재산을 지키세요!
                  <br />
                  이제는 걱정할 필요 없습니다.
                  <br />
                  세분화된 지불 과정과 제 3자 계약을 통해 더 이상의 불안한 상황은 끝! 내 집짓기는 즐거워야죠!
                </div>
                <div
                  style={{
                    width: '90%',
                    aspectRatio: '5/4',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    margin: '0 auto',
                  }}
                >
                  <Image
                    src={'/background2.webp'}
                    width={300}
                    height={240}
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      aspectRatio: '5/4',
                      borderRadius: '10px',
                    }}
                    alt={'background2'}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div
                style={{
                  width: '90%',
                  height: '500px',
                  borderRadius: '15px',
                  padding: '20px',
                  wordBreak: 'keep-all',
                  backgroundColor: '#ffffff',
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                  margin: '20px auto 0 auto',
                }}
              >
                <div style={{ fontSize: '15px', width: '100%', textAlign: 'center', fontWeight: '700' }}>2단계</div>
                <div
                  style={{ fontSize: '20px', width: '100%', textAlign: 'center', fontWeight: '700', margin: '20px 0' }}
                >
                  문의와 계약도 어렵지 않게
                </div>
                <div
                  style={{
                    fontSize: '15px',
                    width: '100%',
                    textAlign: 'center',
                    fontWeight: '500',
                    color: '#555555',
                    marginBottom: '20px',
                  }}
                >
                  안심 계약부터, 안심 지불을 통해 내 재산을 지키세요!
                  <br />
                  이제는 걱정할 필요 없습니다.
                  <br />
                  세분화된 지불 과정과 제 3자 계약을 통해 더 이상의 불안한 상황은 끝! 내 집짓기는 즐거워야죠!
                </div>
                <div
                  style={{
                    width: '90%',
                    aspectRatio: '5/4',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    margin: '0 auto',
                  }}
                >
                  <Image
                    src={'/background2.webp'}
                    width={300}
                    height={240}
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      aspectRatio: '5/4',
                      borderRadius: '10px',
                    }}
                    alt={'background2'}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div
                style={{
                  width: '90%',
                  height: '500px',
                  borderRadius: '15px',
                  padding: '20px',
                  wordBreak: 'keep-all',
                  backgroundColor: '#ffffff',
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                  margin: '20px auto 0 auto',
                }}
              >
                <div style={{ fontSize: '15px', width: '100%', textAlign: 'center', fontWeight: '700' }}>3단계</div>
                <div
                  style={{ fontSize: '20px', width: '100%', textAlign: 'center', fontWeight: '700', margin: '20px 0' }}
                >
                  지불과 AS까지 안전하게
                </div>
                <div
                  style={{
                    fontSize: '15px',
                    width: '100%',
                    textAlign: 'center',
                    fontWeight: '500',
                    color: '#555555',
                    marginBottom: '20px',
                  }}
                >
                  안심 계약부터, 안심 지불을 통해 내 재산을 지키세요!
                  <br />
                  이제는 걱정할 필요 없습니다.
                  <br />
                  세분화된 지불 과정과 제 3자 계약을 통해 더 이상의 불안한 상황은 끝! 내 집짓기는 즐거워야죠!
                </div>
                <div
                  style={{
                    width: '90%',
                    aspectRatio: '5/4',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    margin: '0 auto',
                  }}
                >
                  <Image
                    src={'/background2.webp'}
                    width={300}
                    height={240}
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      aspectRatio: '5/4',
                      borderRadius: '10px',
                    }}
                    alt={'background2'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          width: '100%',
          padding: '120px 0',
        }}
      >
        <div
          style={{
            width: '100%',
            fontSize: '32px',
            wordBreak: 'keep-all',
            fontWeight: '700',
            textAlign: 'center',
          }}
        >
          움집에서는 누구나 쉽고 빠르게 자연 속 삶을 시작할 수 있습니다.
        </div>
        <div
          style={{
            width: '90%',
            margin: '0 auto',
            maxWidth: '1200px',
          }}
        >
          <div className="row g-0" style={{ marginTop: '20px' }}>
            <div className="col-12">
              <div
                style={{
                  width: '90%',
                  height: '500px',
                  borderRadius: '15px',
                  padding: '20px',
                  wordBreak: 'keep-all',
                  backgroundColor: '#ffffff',
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // 추가된 그림자
                  margin: '20px auto 0 auto',
                }}
              >
                <div style={{ fontSize: '15px', width: '100%', textAlign: 'center', fontWeight: '700' }}>1단계</div>
                <div
                  style={{ fontSize: '20px', width: '100%', textAlign: 'center', fontWeight: '700', margin: '20px 0' }}
                >
                  다양한 안심 서비스
                </div>
                <div
                  style={{
                    fontSize: '15px',
                    width: '100%',
                    textAlign: 'center',
                    fontWeight: '500',
                    color: '#555555',
                    marginBottom: '20px',
                  }}
                >
                  안심 계약부터, 안심 지불을 통해 내 재산을 지키세요!
                  <br />
                  이제는 걱정할 필요 없습니다.
                  <br />
                  세분화된 지불 과정과 제 3자 계약을 통해 더 이상의 불안한 상황은 끝! 내 집짓기는 즐거워야죠!
                </div>
                <div
                  style={{
                    width: '90%',
                    aspectRatio: '5/4',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    margin: '0 auto',
                  }}
                >
                  <Image
                    src={'/background2.webp'}
                    width={300}
                    height={240}
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      aspectRatio: '5/4',
                      borderRadius: '10px',
                    }}
                    alt={'background2'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          width: '100%',
          aspectRatio: '32 / 17',
          minHeight: '600px',
          maxHeight: '1200px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Image
          src="/5.jpg"
          width={1600}
          height={1200}
          style={{
            objectFit: 'cover',
            width: '100%',
            aspectRatio: '32 / 17',
            minHeight: '600px',
            maxHeight: '1200px',
          }}
          alt={'yard'}
        />
        <div
          style={{
            position: 'absolute',
            top: '30%',
            left: 0,
            width: '100%',
            fontSize: '14px',
            fontWeight: '600',
            wordBreak: 'keep-all',
            textAlign: 'center',
            color: '#ffffff',
          }}
        >
          Our Vision
          <div style={{ fontSize: '32px', wordBreak: 'keep-all', fontWeight: '700', marginTop: '30px' }}>
            움집은 누구나 쉽게 자연 속 삶을
            <br />
            선택할 수 있도록 돕습니다.
          </div>
        </div>
      </div>

      <div style={{ position: 'relative' }}>
        <Image
          src={'/background2.webp'}
          width={1600}
          height={985}
          style={{ objectFit: 'cover', width: '100%', height: '800px', borderRadius: '15px 15px 0 0' }}
          alt={'background2'}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '600px',
            borderRadius: '15px',
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))',
          }}
        ></div>

        <div
          style={{
            padding: '40px 0',
            width: '100%',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: '10%',
            left: '0',
          }}
        >
          <div
            style={{
              width: '100%',
              fontSize: '14px',
              fontWeight: '600',
              wordBreak: 'keep-all',
              textAlign: 'center',
            }}
          >
            Contact Us
            <div style={{ fontSize: '32px', wordBreak: 'keep-all', fontWeight: '700', margin: '30px 0' }}>
              무엇이든 물어보세요.
            </div>
          </div>

          <Inquiry />
        </div>
      </div>
    </>
  );
}
