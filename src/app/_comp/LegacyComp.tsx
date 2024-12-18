import Image from 'next/image';
import RouteLink from '@/app/_components/RouteLink';
import Inquiry from '@/components/Inquiry';
import SafeServiceNotice from '@/app/_components/SafeServiceNotice';

export default function LegacyComp(){
  return (
    <><div style={{ backgroundColor: '#FAFBFF' }}>
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
    </div><SafeServiceNotice /><div style={{ position: 'relative' }}>
        <Image
          src={'/background2.webp'}
          width={1600}
          height={985}
          style={{ objectFit: 'cover', width: '100%', height: '600px', borderRadius: '15px' }}
          alt={'background2'} />
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
      </div>
    </>
  );
}