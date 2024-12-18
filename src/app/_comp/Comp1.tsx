"use client"

import Image from 'next/image';

export default function Comp1({id}:{id:string}){
  return (
    <div
      id={id}
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
      />

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
  );
}