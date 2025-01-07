import Image from 'next/image';

export default function Service() {
  return (
    <div
      style={{
        width: '100%',
        padding: '100px 0',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          width: '90%',
          aspectRatio: '1',
          maxWidth: '1100px',
          maxHeight: '550px',
          borderRadius: '15px',
          padding: '20px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div style={{ zIndex: '1', color: '#ffffff', position: 'absolute', top: '30px', left: '35px', width: '90%' }}>
          <div className="col-md-7 col-12" style={{ fontSize: 'clamp(20px, 4vw, 25px)', fontWeight: '600' }}>
            다양한 안심 서비스
          </div>
          <div
            className="col-md-7 col-12"
            style={{ fontSize: 'clamp(13px, 2vw, 15px)', fontWeight: '350', marginTop: '10px' }}
          >
            모듈러 주택을 구매한다고 끝나는게 아니에요.
            <br />
            허가, 토지 공사, 세금 등 지금 보고 있는 금액에서 평균적으로 25%~35% 정도 추가돼요. 이런 비용을 예상하지
            못하고 있다가 갑자기 지출하게 된다면 계획에 차질이 생길 수 밖에 없어요.
            <br />꼭 내 예상견적을 계산해보고 시작하세요!
          </div>
        </div>
        <Image
          src={'/background2.webp'}
          fill
          style={{
            objectFit: 'cover',
            width: '100%',
            borderRadius: '15px',
            zIndex: '0',
          }}
          alt={'background2'}
        />
      </div>
    </div>
  );
}
