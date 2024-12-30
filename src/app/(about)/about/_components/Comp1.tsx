import Image from 'next/image';

export default function Comp1() {
  return (
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
        src="/4.webp"
        width={1600}
        height={1300}
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
          top: 0,
          left: 0,
          width: '100%',
          aspectRatio: '8 / 1',
          minHeight: '200px',
          maxHeight: '500px',
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          aspectRatio: '16 / 1',
          minHeight: '50px',
          maxHeight: '200px',
          background: 'linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: 0,
          width: '100%',
          fontSize: '16px',
          fontWeight: '600',
          wordBreak: 'keep-all',
          textAlign: 'center',
        }}
      >
        ABOUT US
        <div
          style={{ fontSize: 'clamp(20px, 5vw, 32px)', wordBreak: 'keep-all', fontWeight: '700', marginTop: '30px' }}
        >
          움집은 누구나 쉽게 자연 속 삶을
          <br />
          선택할 수 있도록 돕습니다.
        </div>
      </div>
    </div>
  );
}
