'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ServiceHomeComponent from '@/app/(about)/service/_components/ServiceHomeComponent';
import ServiceExplanationComponent from '@/app/(about)/service/_components/ServiceExplanationComponent';
import ServiceSequenceComponent from '@/app/(about)/service/_components/ServiceSequenceComponent';
import ServiceStrongPointComponent from '@/app/(about)/service/_components/ServiceStrongPointComponent';
import InquiryComponent from '@/components/InquiryComponent';

export default function Service() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const container = useRef(null);

  return (
    <div id={'container'} ref={container}>
      <div style={{ width: '100%', height: '61px', backgroundColor: 'black' }}></div>
      <ServiceHomeComponent container={container} />
      <ServiceExplanationComponent container={container} />
      <ServiceSequenceComponent container={container} />
      <ServiceStrongPointComponent container={container} />
      <InquiryComponent />
    </div>
  );
}
