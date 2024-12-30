'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Comp1 from '@/app/(about)/about/_components/Comp1';
import Comp2 from '@/app/(about)/about/_components/Comp2';
import Comp3 from '@/app/(about)/about/_components/Comp3';
import Comp4 from '@/app/(about)/about/_components/Comp4';
import InquiryComponent from '@/app/(about)/about/_components/InquiryComponent';

export default function About() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const container = useRef(null);

  return (
    <div id={'container'} ref={container}>
      <Comp1 container={container} />
      <Comp2 container={container} />
      <Comp3 container={container} />
      <Comp4 container={container} />
      <InquiryComponent />
    </div>
  );
}
