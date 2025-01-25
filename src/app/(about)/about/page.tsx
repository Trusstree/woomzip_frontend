'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import AboutHomeComponent from '@/app/(about)/about/_components/AboutHomeComponent';
import AboutExplanationComponent from '@/app/(about)/about/_components/AboutExplanationComponent';
import AboutHistoryComponent from '@/app/(about)/about/_components/AboutHistoryComponent';
import AboutTeamCompoment from '@/app/(about)/about/_components/AboutTeamCompoment';
import InquiryComponent from '@/components/InquiryComponent';

export default function About() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const container = useRef(null);

  return (
    <div id={'container'} ref={container}>
      <div style={{ width: '100%', height: '61px', backgroundColor: 'black' }}></div>
      <AboutHomeComponent container={container} />
      <AboutExplanationComponent container={container} />
      <AboutHistoryComponent container={container} />
      <AboutTeamCompoment container={container} />
      <InquiryComponent />
    </div>
  );
}
