'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HomeTextComponent from '@/app/_comp/HomeTextComponent';
import HomeCategoryComponent from '@/app/_comp/HomeCategoryComponent';
import HomeServiceComponent from '@/app/_comp/HomeServiceComponent';
import HomePeopleComponent from '@/app/_comp/HomePeopleComponent';
import CompExpert from '@/app/_comp/CompExpert';

export default function Home() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const container = useRef(null);

  return (
    <div id={'container'} ref={container}>
      <HomeTextComponent container={container} />
      <HomeCategoryComponent container={container} />
      <HomeServiceComponent container={container} />
      <CompExpert />
      <HomePeopleComponent />
    </div>
  );
}
