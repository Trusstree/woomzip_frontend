import Image from 'next/image';

export default function Template1({ imageData }) {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: 'black',
        height: 'calc(-61px + 100svh)',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      <div
        style={{ width: '100%', position: 'absolute', top: 0, left: 0, height: 'calc(-161px + 100svh)', zIndex: '0' }}
      >
        <Image fill src={imageData[2]} alt="pic2" style={{ objectFit: 'cover' }} />
      </div>
      <div
        style={{
          position: 'absolute',
          zIndex: '1',
          bottom: '100px',
          left: 0,
          width: '100%',
          height: '30%',
          background: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
        }}
      />
      <div
        style={{
          position: 'absolute',
          zIndex: '1',
          top: 0,
          left: 0,
          width: '100%',
          height: '20%',
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
        }}
      />
      <div
        style={{
          width: '90%',
          margin: '0 auto',
          zIndex: '2',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
          wordBreak: 'keep-all',
        }}
      >
        <div
          style={{
            color: '#ffffff',
            fontSize: 'clamp(23px, 4vw, 40px)',
            fontWeight: '700',
            marginTop: '20px',
            textAlign: 'center',
          }}
        >
          이 곳은 1번 템플릿의 제목이 들어가는 곳입니다. 한줄 추천합니다.
        </div>
        <div
          style={{
            color: '#ffffff',
            fontSize: 'clamp(14px, 3vw, 18px)',
            fontWeight: '350',
            marginBottom: '50px',
            maxWidth: '800px',
            margin: '50px auto',
            textAlign: 'center',
          }}
        >
          이 곳은 이 1번 템플릿의 설명란입니다. <br /> 제품을 한 번 멋들어지게 설명해보세요. 한 세줄 추천합니다. 빠진
          내용 없이, 만약 이곳에 거실 관련 설명 글이면 거실을 잘 설명해주시면 됩니다. 잘 아시겠죠?
        </div>
      </div>
    </div>
  );
}
