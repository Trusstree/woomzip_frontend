'use client';

import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Comp2() {
  return (
    <div
      style={{
        width: '100%',
        aspectRatio: '32 / 17',
        minHeight: '600px',
        maxHeight: '1200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: 'auto',
          fontSize: 'clamp(20px, 5vw, 32px)',
          wordBreak: 'keep-all',
          fontWeight: '700',
          marginTop: '100px',
          maxWidth: '90%',
          textAlign: 'center',
        }}
      >
        움집에서는 누구나 쉽고 빠르게 자연 속 삶을 시작할 수 있습니다.
      </div>
    </div>
  );
}
