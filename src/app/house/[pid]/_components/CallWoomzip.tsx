'use client';

import Inquiry from '@/components/Inquiry';
import Image from 'next/image';

export default function CallWoomzip({ pid, houseData }) {
  return (
    <div style={{ marginTop: '60px', position: 'relative' }}>
      <Image
        src={'/background2.webp'}
        width={1600}
        height={985}
        style={{ objectFit: 'cover', width: '100%', height: '600px', borderRadius: '15px 15px 0 0' }}
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
          {houseData['house_name']}에 대해 궁금증이 있으시거나,
          <br />
          구매를 원하시면 움집에서 답해드리겠습니다.
        </div>

        <div style={{ fontSize: '32px', fontWeight: '700', textAlign: 'center', padding: '20px 0 30px 0' }}>
          무엇이든 물어보세요.
        </div>
        <Inquiry id={pid} />
      </div>
    </div>
  );
}
