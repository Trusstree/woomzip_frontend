'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Comp1 from '@/app/(about)/service/_components/Comp1';
import Comp2 from '@/app/(about)/service/_components/Comp2';
import Comp3 from '@/app/(about)/service/_components/Comp3';
import Comp4 from '@/app/(about)/service/_components/Comp4';
import InquiryComponent from '@/app/(about)/service/_components/InquiryComponent';

export default function Service() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const inquiryRef = useRef(null);
  const container = useRef(null);

  return (
    <div id={'container'} ref={container}>
      <Comp1 container={container} inquiryRef={inquiryRef} />
      <Comp2 container={container} />
      <Comp3 container={container} />
      <Comp4 container={container} />
      <InquiryComponent />
    </div>
  );
}
