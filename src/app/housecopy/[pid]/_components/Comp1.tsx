import Image from 'next/image';

export default function Comp1({ imageData }) {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <div style={{ width: '100%', height: '200svh', position: 'absolute', zIndex: '0' }}>
        <Image fill src={imageData[0]} alt="pic1" style={{ objectFit: 'cover' }} />
        <div
          style={{
            position: 'absolute',
            zIndex: '1',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '50%',
            background: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
          }}
        />
      </div>

      <div
        style={{
          width: '90%',
          margin: '0 auto',
          zIndex: '2',
          position: 'relative',
          height: '200svh',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100svh',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            position: 'relative',
          }}
        >
          <div style={{ marginTop: '100px', color: '#ffffff', fontSize: 'clamp(10px, 3vw, 20px)', fontWeight: '600' }}>
            움집 제품
          </div>
          <div
            style={{
              color: '#ffffff',
              fontSize: 'clamp(40px, 10vw, 100px)',
              fontWeight: '700',
              letterSpacing: '0.03rem',
            }}
          >
            책 속의 숨쉬는 집
          </div>
          <div
            style={{
              marginTop: '10px',
            }}
          >
            <div
              style={{
                color: '#ffffff',
                fontSize: 'clamp(9px, 3vw, 13px)',
                fontWeight: '500',
                textAlign: 'center',
              }}
            >
              Designed By
            </div>
            <div
              style={{
                color: '#ffffff',
                fontSize: 'clamp(10px, 3vw, 16px)',
                fontWeight: '600',
                textAlign: 'center',
              }}
            >
              모두가하우징
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              position: 'absolute',
              left: '0',
              bottom: '50px',
              width: '100%',
            }}
          >
            <div
              className="d-flex align-items-center"
              style={{
                fontSize: 'clamp(10px, 3vw, 15px)',
                textAlign: 'center',
                color: '#ffffff',
              }}
            >
              <div
                style={{
                  paddingRight: '20px',
                  marginRight: '20px',
                  borderRight: '1px solid #ffffff',
                  color: '#ffffff',
                }}
              >
                한 채당
                <span
                  style={{
                    fontSize: 'clamp(13px, 3vw, 20px)',
                    fontWeight: '600',
                    marginLeft: '10px',
                  }}
                >
                  1,000,0000원
                </span>
              </div>
              <div>
                <div>
                  <span style={{ fontSize: 'clamp(13px, 3vw, 20px)', fontWeight: '600' }}>6개</span> 침실 ·{' '}
                  <span style={{ fontSize: 'clamp(13px, 3vw, 20px)', fontWeight: '600' }}>2개</span> 욕실
                </div>
                <div style={{ marginBottom: '20px' }}>32평 (21㎡)</div>
              </div>
            </div>
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
            height: '100svh',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              color: '#ffffff',
              fontSize: 'clamp(25px, 4vw, 45px)',
              fontWeight: '700',
              wordBreak: 'keep-all',
            }}
          >
            이 집은 정말 아름다운 집입니다. 걱정 마십시오.
            <br />
            당신의 전원생활 행복은 바로 요 놈이 해결합니다.
            <br />이 녀석으로 말할 것 같으면 아주 괴물같은 녀석입니다. 목조주택의 최정상입니다. 패시브하우스란 겨울엔
            따듯하고 여름엔 시원한! 아주 좋은 제품이란 말입니다.
          </div>
        </div>
      </div>
    </div>
  );
}
