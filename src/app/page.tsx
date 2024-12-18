import Image from 'next/image';
import RouteLink from '@/app/_components/RouteLink';
import Inquiry from '@/components/Inquiry';
import SafeServiceNotice from '@/app/_components/SafeServiceNotice';

export default function test2() {
  return (
    <>
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '32 / 17',
          minHeight: '600px',
          maxHeight: '1200px',
          overflow: 'hidden',
        }}
      >
        <Image
          src={'/1.jpg'}
          width={1600}
          height={1300}
          style={{ objectFit: 'cover', width: '100%', aspectRatio: '32 / 17', minHeight: '600px', maxHeight: '1200px' }}
          alt={'background2'}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            aspectRatio: '6 / 1',
            minHeight: '150px',
            maxHeight: '200px',
            background: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
          }}
        ></div>

        <div
          style={{
            width: '100%',
            position: 'absolute',
            top: '50px',
            left: 0,
          }}
        >
          <div
            style={{
              width: '95%',
              margin: '0 auto',
              fontSize: 'clamp(40px, 10vw, 100px)',
              fontWeight: '700',
              color: '#ffffff',
              wordBreak: 'keep-all',
            }}
          >
            움집에서 짓지 말고, 구매하세요
          </div>
        </div>

        <div
          style={{
            width: '100%',
            position: 'absolute',
            bottom: '50px',
            left: 0,
          }}
        >
          <div
            style={{
              width: '95%',
              margin: '0 auto',
              fontSize: 'clamp(35px, 6vw, 55px)',
              fontWeight: '600',
              color: '#ffffff',
            }}
          >
            건축이 아닌 제조,
            <br /> 복잡한 일이 아닌 간단한 일로.
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: 'black',
          width: '100%',
          aspectRatio: '32 / 17',
          minHeight: '600px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            fontSize: 'clamp(35px, 6vw, 55px)',
            fontWeight: '600',
            wordBreak: 'keep-all',
            width: '95%',
            margin: '50px auto',
            color: '#ffffff',
          }}
        >
          어떤 집을 지어야 할지,
          <br />
          제작사를 믿을 수 있을지,
          <br />
          내 예산안에 가능할지 고민하시나요?
          <br />
          <br />그 모든 걱정, 움집에선 필요 없어요.
        </div>
      </div>

      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '32 / 17',
          minHeight: '600px',
          maxHeight: '1200px',
          overflow: 'hidden',
        }}
      >
        <Image
          src={'/2.jpg'}
          width={1600}
          height={1300}
          style={{ objectFit: 'cover', width: '100%', aspectRatio: '32 / 17', minHeight: '600px', maxHeight: '1200px' }}
          alt={'background2'}
        />
        <div
          style={{
            width: '100%',
            position: 'absolute',
            top: '100px',
            left: 0,
          }}
        >
          <div
            style={{
              width: '95%',
              margin: '0 auto',
              fontSize: '35px',
              fontWeight: '700',
              color: 'black',
              wordBreak: 'keep-all',
              textAlign: 'center',
            }}
          >
            체류형쉼터
          </div>
          <div
            style={{
              width: '95%',
              margin: '30px auto',
              fontSize: '16px',
              fontWeight: '600',
              color: 'black',
              wordBreak: 'keep-all',
              textAlign: 'center',
            }}
          >
            10평부터 17평까지 | 4,300만 원~
          </div>
        </div>

        <div
          style={{
            width: '100%',
            position: 'absolute',
            bottom: '50px',
            left: 0,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            className="btn"
            style={{
              border: 'none',
              borderRadius: '20px',
              backgroundColor: '#333333',
              color: '#ffffff',
              fontSize: '14px',
              fontWeight: '500',
              margin: '5px',
              padding: '10px 15px',
            }}
          >
            상세정보 보기
          </div>
          <div
            className="btn"
            style={{
              border: 'none',
              borderRadius: '20px',
              backgroundColor: '#ffffff',
              color: 'black',
              fontSize: '14px',
              fontWeight: '500',
              margin: '5px',
              padding: '10px 15px',
            }}
          >
            더 많은 제품보기
          </div>
        </div>
      </div>

      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '32 / 17',
          minHeight: '600px',
          maxHeight: '1200px',
          overflow: 'hidden',
        }}
      >
        <Image
          src={'/6.png'}
          width={1600}
          height={1300}
          style={{ objectFit: 'cover', width: '100%', aspectRatio: '32 / 17', minHeight: '600px', maxHeight: '1200px' }}
          alt={'background2'}
        />
        <div
          style={{
            width: '100%',
            position: 'absolute',
            top: '100px',
            left: 0,
          }}
        >
          <div
            style={{
              width: '95%',
              margin: '0 auto',
              fontSize: '35px',
              fontWeight: '700',
              color: '#ffffff',
              wordBreak: 'keep-all',
              textAlign: 'center',
            }}
          >
            일반 주택
          </div>
          <div
            style={{
              width: '95%',
              margin: '30px auto',
              fontSize: '16px',
              fontWeight: '600',
              color: '#ffffff',
              wordBreak: 'keep-all',
              textAlign: 'center',
            }}
          >
            11평부터 28평까지 | 5,800만 원 ~
          </div>
        </div>

        <div
          style={{
            width: '100%',
            position: 'absolute',
            bottom: '50px',
            left: 0,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            className="btn"
            style={{
              border: 'none',
              borderRadius: '20px',
              backgroundColor: '#333333',
              color: '#ffffff',
              fontSize: '14px',
              fontWeight: '500',
              margin: '5px',
              padding: '10px 15px',
            }}
          >
            상세정보 보기
          </div>
          <div
            className="btn"
            style={{
              border: 'none',
              borderRadius: '20px',
              backgroundColor: '#ffffff',
              color: 'black',
              fontSize: '14px',
              fontWeight: '500',
              margin: '5px',
              padding: '10px 15px',
            }}
          >
            더 많은 제품보기
          </div>
        </div>
      </div>

      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '32 / 17',
          minHeight: '600px',
          maxHeight: '1200px',
          overflow: 'hidden',
        }}
      >
        <Image
          src={'/3.png'}
          width={1600}
          height={1200}
          style={{ objectFit: 'cover', width: '100%', aspectRatio: '32 / 17', minHeight: '600px', maxHeight: '1200px' }}
          alt={'background2'}
        />
        <div
          style={{
            width: '100%',
            position: 'absolute',
            top: '35%',
            left: 0,
          }}
        >
          <div
            style={{
              width: '95%',
              margin: '0 auto',
              fontSize: '16px',
              fontWeight: '600',
              color: '#ffffff',
              wordBreak: 'keep-all',
              textAlign: 'center',
            }}
          >
            오직 움집에서만
          </div>
          <div
            style={{
              width: '95%',
              margin: '20px auto',
              fontSize: '35px',
              fontWeight: '700',
              color: '#ffffff',
              wordBreak: 'keep-all',
              textAlign: 'center',
            }}
          >
            움집 안심 서비스
          </div>
          <div
            style={{
              width: '95%',
              margin: '0 auto',
              fontSize: '17px',
              fontWeight: '500',
              color: '#ffffff',
              wordBreak: 'keep-all',
              textAlign: 'center',
            }}
          >
            움집에서는 안심 상담, 안심 계약, 안심 지불, 안심 AS까지
            <br />
            건축주가 믿고 시작할 수 있도록
            <br />
            모든 서비스를 제공합니다.
          </div>
          <div style={{ width: '100%', display: 'flex', marginTop: '50px' }}>
            <div
              className="btn"
              style={{
                border: 'none',
                borderRadius: '20px',
                backgroundColor: '#ffffff',
                color: 'black',
                fontSize: '14px',
                fontWeight: '500',
                padding: '10px 120px',
                margin: '0 auto',
              }}
            >
              더 알아보기
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '32 / 17',
          minHeight: '600px',
          overflow: 'hidden',
        }}
      >
        <Image
          src={'/4.png'}
          width={1600}
          height={985}
          style={{ objectFit: 'cover', width: '100%', aspectRatio: '32/17', minHeight: '600px' }}
          alt={'background2'}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '30%',
            height: '1000px',
            background: 'linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))',
          }}
        ></div>

        <div
          style={{
            width: '100%',
            position: 'absolute',
            bottom: '40px',
            left: 0,
          }}
        >
          <div className="col-12">
            <div
              style={{
                width: '95%',
                margin: '0 auto',
                fontSize: '16px',
                fontWeight: '600',
                wordBreak: 'keep-all',
              }}
            >
              움집 팀
            </div>
            <div
              style={{
                width: '95%',
                margin: '20px auto',
                fontSize: 'clamp(25px, 3vw, 35px)',
                fontWeight: '700',
                wordBreak: 'keep-all',
              }}
            >
              움집은 누구나 쉽게
              <br />내 삶을 찾을 수 있도록 돕습니다.
            </div>
            <div
              style={{
                width: '95%',
                margin: '0 auto',
                fontSize: 'clamp(14px, 2vw, 17px)',
                fontWeight: '500',
                wordBreak: 'keep-all',
              }}
            >
              모든 팀원이 지방에서 자랐습니다.
              <br />
              우리가 자라온 마을이 소멸되지 않고 이어질 수 있도록 일합니다.
              <br />
              결국 누구나 꿈꾸는 내 집이란 로망을 이룰 수 있도록 돕습니다.
            </div>
            <div
              className="btn"
              style={{
                border: 'none',
                borderRadius: '20px',
                backgroundColor: 'black',
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: '500',
                padding: '10px 120px',
                marginLeft: '2%',
                marginTop: '50px',
              }}
            >
              더 알아보기
            </div>
          </div>
        </div>
      </div>

      {/* <div style={{ backgroundColor: '#FAFBFF' }}>
        <div style={{ padding: '120px 0', maxWidth: '1280px', width: '90%', margin: '0 auto' }}>
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
            제품 찾기
          </div>

          <div className="row">
            <div className="col-md-4 col-12">
              <Image
                src={'/houseIcons/houses.png'}
                alt={'safe'}
                width={130}
                height={130}
                style={{ width: '130px', height: 'auto' }}
              ></Image>
              <div style={{ fontSize: '28px', fontWeight: '500' }}>당신이 찾던 집, 모두 움집에</div>
              <div style={{ fontSize: '18px', fontWeight: '400', color: '#666666' }}>
                모듈러 주택, 체류형쉼터, 농막까지 전부 다
              </div>
            </div>
            <div className="col-md-4 col-6" style={{ wordBreak: 'keep-all', paddingRight: '40px', marginTop: '110px' }}>
              <div className="d-flex justify-content-between align-items-center">
                <div style={{ fontSize: '20px', fontWeight: '400' }}>등록 업체</div>
                <RouteLink href={'/house'} styles={{ float: 'right' }}>
                  <div style={{ fontSize: '16px', fontWeight: '400', padding: '10px 0' }}>더보기</div>
                </RouteLink>
              </div>
              <div style={{ fontSize: '45px', color: '#314FC0', width: '100%' }}>20+</div>
            </div>
            <div className="col-md-4 col-6" style={{ wordBreak: 'keep-all', paddingRight: '40px', marginTop: '110px' }}>
              <div className="d-flex justify-content-between align-items-center">
                <div style={{ fontSize: '20px', fontWeight: '400' }}>등록 제품</div>
                <RouteLink href={'/house'} styles={{ float: 'right' }}>
                  <div style={{ fontSize: '16px', fontWeight: '400', padding: '10px 0' }}>더보기</div>
                </RouteLink>
              </div>
              <div style={{ fontSize: '45px', color: '#314FC0', width: '100%' }}>70+</div>
            </div>
            <div className="row" style={{ marginTop: '60px' }}>
              <div
                className="col-md-4 col-12"
                style={{ wordBreak: 'keep-all', paddingRight: '40px', paddingTop: '20px' }}
              >
                <div className="d-flex" style={{ alignItems: 'center' }}>
                  <Image src={'/buttonIcons/compass.png'} width={38} height={38} alt={'compass'} />
                  <RouteLink href={'/house'}>
                    <div style={{ fontSize: '20px', fontWeight: '400', marginLeft: '10px' }}>나에게 맞는 제품 찾기</div>
                  </RouteLink>
                </div>
                <div style={{ fontSize: '16px', fontWeight: '400', color: '#666666', marginTop: '15px' }}>
                  40가지로 제품 정보를 분석해서 나에게 딱 맞는 제품을 찾기가 쉬워요.
                </div>
              </div>

              <div
                className="col-md-4 col-12"
                style={{ wordBreak: 'keep-all', paddingRight: '40px', paddingTop: '20px' }}
              >
                <div className="d-flex" style={{ alignItems: 'center' }}>
                  <Image src={'/buttonIcons/chart.png'} width={38} height={38} alt={'compass'} />
                  <RouteLink href={'/house/54'}>
                    <div style={{ fontSize: '20px', fontWeight: '400', marginLeft: '10px' }}>상세 자재 확인하기</div>
                  </RouteLink>
                </div>
                <div style={{ fontSize: '16px', fontWeight: '400', color: '#666666', marginTop: '15px' }}>
                  어떤 자재가 사용되었는지, 좋은 자재인지 일반인들이 알기 어려운 정보들을 분석해두었어요.
                </div>
              </div>

              <div
                className="col-md-4 col-12"
                style={{ wordBreak: 'keep-all', paddingRight: '40px', paddingTop: '20px' }}
              >
                <div className="d-flex" style={{ alignItems: 'center' }}>
                  <Image src={'/buttonIcons/calculator.png'} width={38} height={38} alt={'compass'} />
                  <RouteLink href={'/planning?house_id=54'}>
                    <div style={{ fontSize: '20px', fontWeight: '400', marginLeft: '10px' }}>
                      내 집짓기 총 비용 계산해보기
                    </div>
                  </RouteLink>
                </div>
                <div style={{ fontSize: '16px', fontWeight: '400', color: '#666666', marginTop: '15px' }}>
                  제품 비용이 전부가 아니에요. 내 집을 짓기 위해 드는 모든 비용을 한 번에 예측해보세요.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SafeServiceNotice />

      <div style={{ position: 'relative' }}>
        <Image
          src={'/background2.webp'}
          width={1600}
          height={985}
          style={{ objectFit: 'cover', width: '100%', height: '600px', borderRadius: '15px' }}
          alt={'background2'}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '600px',
            borderRadius: '15px',
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))',
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
            top: '0',
            left: '0',
          }}
        >
          <div style={{ fontSize: '18px', fontWeight: '500', textAlign: 'center' }}>
            당신의 여정의 시작을 위한 한 걸음,
            <br />
            움집이 같이 걷겠습니다.
          </div>

          <div style={{ fontSize: '32px', fontWeight: '700', textAlign: 'center', padding: '20px 0 30px 0' }}>
            무엇이든 물어보세요.
          </div>
          <Inquiry />
        </div>
      </div> */}
    </>
  );
}
