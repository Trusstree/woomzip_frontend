'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HomeTextComponent from '@/app/_components/HomeTextComponent';
import HomeCategoryComponent from '@/app/_components/HomeCategoryComponent';
import HomeServiceComponent from '@/app/_components/HomeServiceComponent';
import HomePeopleComponent from '@/app/_components/HomePeopleComponent';
import HomeExpertComponent from '@/app/_components/HomeExpertComponent';

export default function Home() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const container = useRef(null);

  return (
    <div id={'container'} ref={container}>
      <HomeTextComponent container={container} />
      <HomeCategoryComponent container={container} />
      <HomeServiceComponent container={container} />
      <HomeExpertComponent />
      <HomePeopleComponent />
    </div>
  );
}
