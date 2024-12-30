'use client';

import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Inquiry from '@/components/Inquiry';

export default function InquiryComponent() {
  return (
    <div style={{ position: 'relative' }}>
      <Image
        src={'/background2.webp'}
        width={1600}
        height={985}
        style={{ objectFit: 'cover', width: '100%', height: '800px', borderRadius: '15px 15px 0 0' }}
        alt={'background2'}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '600px',
          borderRadius: '15px',
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))',
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
          top: '10%',
          left: '0',
        }}
      >
        <div
          style={{
            width: '100%',
            fontSize: '16px',
            fontWeight: '600',
            wordBreak: 'keep-all',
            textAlign: 'center',
          }}
        >
          Contact Us
          <div style={{ fontSize: '32px', wordBreak: 'keep-all', fontWeight: '700', margin: '30px 0' }}>
            무엇이든 물어보세요.
          </div>
        </div>

        <Inquiry />
      </div>
    </div>
  );
}
