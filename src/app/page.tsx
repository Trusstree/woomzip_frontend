import Image from 'next/image';
import RouteLink from '@/app/_components/RouteLink';

export default function test2() {
  return (
    <>
      <div
        style={{ position: 'relative', width: '100%', aspectRatio: '5 / 2', minHeight: '300px', overflow: 'hidden' }}
      >
        <Image
          src={'/background2.webp'}
          width={1600}
          height={985}
          style={{ objectFit: 'cover', width: '100%', height: '500px' }}
          alt={'background2'}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            aspectRatio: '15 / 4',
            minHeight: '220px',
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))',
          }}
        ></div>

        <div
          style={{
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <div
            className="row"
            style={{
              padding: '30px 0',
              maxWidth: '1280px',
              width: '90%',
              margin: '0 auto',
              aspectRatio: '5 / 2',
              minHeight: '300px',
            }}
          >
            <div className="col-md-7 col-12" style={{ fontSize: '32px', fontWeight: '500', color: '#333333' }}>
              가장 쉽고 빠른 전원생활,
              <br />
              <span style={{ color: '#314FC0' }}>움집</span>에서 시작됩니다.
            </div>

            <div className="col-md-5 col-12" style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', bottom: 0, left: 30 }}>
                <div
                  style={{
                    backgroundColor: '#314FC0',
                    borderRadius: '50px',
                    width: '10px',
                    height: '10px',
                  }}
                ></div>
                <div
                  style={{
                    padding: '10px 0',
                    fontSize: '18px',
                    fontWeight: '500',
                    color: '#ffffff',
                  }}
                >
                  든든한 전원생활 파트너
                </div>
                <div
                  style={{
                    fontSize: '16px',
                    fontWeight: '400',
                    wordBreak: 'keep-all',
                    color: '#ffffff',
                  }}
                >
                  전원생활을 고민할 때부터, 내 집을 짓는 순간을 지나, 살아가는 삶까지 움집이 있다면 더욱 즐거워질거에요.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: '70px 0', maxWidth: '1280px', width: '90%', margin: '0 auto' }}>
        <div style={{ fontSize: '28px', fontWeight: '500', width: '100%', textAlign: 'center' }}>왜 움집인가요?</div>
      </div>

      <div style={{ padding: '60px 0', maxWidth: '1280px', width: '90%', margin: '0 auto' }}>
        <div style={{ fontSize: '28px', fontWeight: '500' }}>국내에서 가장 많은 제품</div>
        <div style={{ fontSize: '18px', fontWeight: '400', color: '#666666' }}>
          다양한 모듈러 주택, 체류형쉼터, 농막을 비교할 수 있어요.
        </div>
        <div className="row">
          <div className="col-md-5 col-0"></div>
          <div className="col-md-3 col-6" style={{ marginTop: '20px', padding: '30px' }}>
            <div style={{ fontSize: '20px', fontWeight: '400' }}>등록 업체</div>
            <div style={{ fontSize: '45px', color: '#314FC0', width: '100%', textAlign: 'right' }}>16+</div>
            <RouteLink href={'/house'} styles={{ float: 'right' }}>
              <div style={{ fontSize: '16px', fontWeight: '400', padding: '10px 0' }}>더보기</div>
            </RouteLink>
          </div>
          <div className="col-md-3 col-6" style={{ marginTop: '20px', padding: '30px' }}>
            <div style={{ fontSize: '20px', fontWeight: '400' }}>등록 제품</div>
            <div style={{ fontSize: '45px', color: '#314FC0', width: '100%', textAlign: 'right' }}>40+</div>
            <RouteLink href={'/house'} styles={{ float: 'right' }}>
              <div style={{ fontSize: '16px', fontWeight: '400', padding: '10px 0' }}>더보기</div>
            </RouteLink>
          </div>
        </div>
      </div>

      <div style={{ padding: '60px 0', maxWidth: '1280px', width: '90%', margin: '0 auto' }}>
        <div style={{ fontSize: '28px', fontWeight: '500' }}>정확한 정보와 분석</div>
        <div style={{ fontSize: '18px', fontWeight: '400', color: '#666666' }}>
          다양한 정보를 정확하게 분석하여 합리성을 판단할 수 있어요.
        </div>
        <div className="row" style={{ marginTop: '20px' }}>
          <div className="col-md-4 col-12" style={{ padding: '40px', wordBreak: 'keep-all' }}>
            <Image src={'/buttonIcons/compass.png'} width={38} height={38} alt={'compass'} />
            <RouteLink href={'/house'}>
              <div style={{ fontSize: '20px', fontWeight: '400', padding: '10px 0' }}>나에게 맞는 제품 찾기</div>
            </RouteLink>
            <div style={{ fontSize: '16px', fontWeight: '400', color: '#666666' }}>
              40가지로 제품 정보를 분석해서 나에게 딱 맞는 제품을 찾기가 쉬워요.
            </div>
          </div>
          <div className="col-md-4 col-12" style={{ padding: '40px', wordBreak: 'keep-all' }}>
            <Image src={'/buttonIcons/chart.png'} width={38} height={38} alt={'compass'} />
            <RouteLink href={'/house/54'}>
              <div style={{ fontSize: '20px', fontWeight: '400', padding: '10px 0' }}>상세 자재 확인하기</div>
            </RouteLink>
            <div style={{ fontSize: '16px', fontWeight: '400', color: '#666666' }}>
              어떤 자재가 사용되었는지, 좋은 자재인지 일반인들이 알기 어려운 정보들을 분석해두었어요.
            </div>
          </div>
          <div className="col-md-4 col-12" style={{ padding: '40px', wordBreak: 'keep-all' }}>
            <Image src={'/buttonIcons/calculator.png'} width={38} height={38} alt={'compass'} />
            <RouteLink href={'/planning?house_id=54'}>
              <div style={{ fontSize: '20px', fontWeight: '400', padding: '10px 0' }}>내 집짓기 총 비용 계산해보기</div>
            </RouteLink>
            <div style={{ fontSize: '16px', fontWeight: '400', color: '#666666' }}>
              제품 비용이 전부가 아니에요. 내 집을 짓기 위해 드는 모든 비용을 한 번에 예측해보세요.
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: '60px 0', maxWidth: '1280px', width: '90%', margin: '0 auto' }}>
        <div style={{ fontSize: '28px', fontWeight: '500' }}>움집은 이 모든 것이 무료</div>
        <div style={{ fontSize: '18px', fontWeight: '400', color: '#666666' }}>
          혼자하면 어려운 시작, 움집과 함께하면 어렵지 않아요.
        </div>
        <div className="row">
          <div className="col-md-1 col-0"></div>
          <div className="col-md-5 col-12">
            <div
              style={{
                width: '100%',
                borderRadius: '20px',
                border: '1px solid #999999',
                padding: '20px',
                marginTop: '20px',
              }}
            >
              <div style={{ fontSize: '20px', fontWeight: '500', marginBottom: '20px' }}>혼자라면</div>

              <div>
                <div style={{ fontSize: '15px', fontWeight: '500', padding: '5px 10px' }}>
                  ✔️ 발품 팔아서 내 집 찾기
                </div>
                <div style={{ fontSize: '15px', fontWeight: '500', padding: '5px 10px' }}>✔️ 직접 업체 찾아다니기</div>
                <div style={{ fontSize: '15px', fontWeight: '500', padding: '5px 10px' }}>✔️ 어려운 계약과정</div>
              </div>

              <div
                style={{
                  fontSize: '20px',
                  fontWeight: '500',
                  paddingTop: '20px',
                  width: '100%',
                  textAlign: 'right',
                }}
              >
                ₩ 끝없이 오르는 비용
              </div>
            </div>
          </div>

          <div className="col-md-5 col-12">
            <div
              style={{
                width: '100%',
                borderRadius: '20px',
                border: '1px solid #314FC0',
                padding: '20px',
                marginTop: '20px',
                backgroundColor: '#F5F7FF',
              }}
            >
              <div style={{ fontSize: '20px', fontWeight: '500', marginBottom: '20px' }}>움집에선</div>

              <div>
                <div style={{ fontSize: '15px', fontWeight: '500', padding: '5px 10px' }}>
                  ✔️ 쉽고 빠른 나에게 딱 맞는 집 찾기
                </div>
                <div style={{ fontSize: '15px', fontWeight: '500', padding: '5px 10px' }}>✔️ 쉬운 업체 소통</div>
                <div style={{ fontSize: '15px', fontWeight: '500', padding: '5px 10px' }}>✔️ 믿을 수 있는 계약과정</div>
              </div>

              <div
                style={{
                  fontSize: '20px',
                  fontWeight: '500',
                  paddingTop: '20px',
                  width: '100%',
                  textAlign: 'right',
                }}
              >
                ₩ 무료
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '60px', position: 'relative' }}>
        <Image
          src={'/background2.webp'}
          width={1600}
          height={985}
          style={{ objectFit: 'cover', width: '100%', height: '500px', borderRadius: '15px' }}
          alt={'background2'}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '500px',
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
          <div className="row" style={{ width: '90%', maxWidth: '500px' }}>
            <div style={{ width: '30%' }}>
              <div>이름</div>
              <input style={{ border: 'none', borderRadius: '5px', width: '100%', opacity: '0.8' }}></input>
            </div>
            <div style={{ width: '70%' }}>
              <div>이메일 혹은 전화번호</div>
              <input style={{ border: 'none', borderRadius: '5px', width: '100%', opacity: '0.8' }}></input>
            </div>
            <div style={{ width: '100%' }}>
              <div>문의사항</div>
              <input
                style={{ border: 'none', borderRadius: '5px', width: '100%', height: '200px', opacity: '0.8' }}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
