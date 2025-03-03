'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRouter } from 'next/navigation';
import ServiceHomeComponent from '@/app/(about)/service/_components/ServiceHomeComponent';
import ServiceExplanationComponent from '@/app/(about)/service/_components/ServiceExplanationComponent';
import ServiceSequenceComponent from '@/app/(about)/service/_components/ServiceSequenceComponent';
import ServiceStrongPointComponent from '@/app/(about)/service/_components/ServiceStrongPointComponent';

export default function Service() {
  const router = useRouter();
  const inquiryScrollIntoView = () => router.push('inquire');
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const container = useRef(null);

  return (
    <div>
      <div id={'container'} ref={container}>
        <div style={{ width: '100%', height: '61px', backgroundColor: 'black' }}></div>
        <ServiceHomeComponent container={container} />
        <ServiceExplanationComponent container={container} />
        <ServiceSequenceComponent container={container} />
        <ServiceStrongPointComponent container={container} />
      </div>
      <div
        style={{
          position: 'sticky',
          width: '100%',
          display: 'flex',
          marginBottom: '50px',
          bottom: '50px',
          left: '0',
          zIndex: '10',
        }}
      >
        <div
          className="btn"
          style={{
            border: 'none',
            borderRadius: '20px',
            backgroundColor: '#4067F8',
            color: '#ffffff',
            fontSize: '14px',
            fontWeight: '500',
            padding: '10px 70px',
            margin: '0 auto',
          }}
          onClick={inquiryScrollIntoView}
        >
          문의하기
        </div>
      </div>
    </div>
  );
}
