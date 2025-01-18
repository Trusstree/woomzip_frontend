import Image from 'next/image';
import Link from 'next/link';

export default function Tazan({ pid }) {
  //
  return (
    <div
      style={{
        width: '90%',
        margin: '0 auto',
        padding: '100px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        wordBreak: 'keep-all',
        maxWidth: '900px',
      }}
    >
      <div
        style={{
          fontSize: 'clamp(20px, 4vw, 30px)',
          fontWeight: '700',
          marginTop: '20px',
          textAlign: 'center',
        }}
      >
        빠른 견적 예상
      </div>
      <div style={{ margin: '50px 0', fontWeight: '400', fontSize: 'clamp(13px, 2vw, 15px)', textAlign: 'center' }}>
        모듈러 주택을 구매한다고 끝나는게 아니에요.
        <br />
        허가, 토지 공사, 세금 등 지금 보고 있는 금액에서 평균적으로 25%~35% 정도 추가돼요.
        <br />
        이런 비용을 예상하지 못하고 있다가 갑자기 지출하게 된다면 계획에 차질이 생길 수 밖에 없어요.
        <br />꼭 내 예상견적을 계산해보고 시작하세요!
      </div>
      <Image width={400} height={350} src={'/10.webp'} alt={'pic'} style={{ width: '90%', maxWidth: '400px' }} />
      <Link href={`/inquire/product/?product_id=${pid}`}>
        <button
          className="btn text-white d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: '#314FC0',
            height: '60px',
            width: '200px',
            marginTop: '50px',
            borderRadius: '40px',
          }}
        >
          <span style={{ wordBreak: 'keep-all', fontSize: '15px' }}>
            20초만에 내 예상 견적
            <br />
            자가진단 하기
          </span>
        </button>
      </Link>
    </div>
  );
}
