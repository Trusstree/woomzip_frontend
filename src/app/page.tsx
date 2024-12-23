'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HomeTextComponent from './_comp/HomeTextComponent';
import HomeCategoryComponent from './_comp/HomeCategoryComponent';
import HomeServiceComponent from './_comp/HomeServiceComponent';
import HomePeopleComponent from './_comp/HomePeopleComponent';

export default function Home() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const container = useRef(null);

  return (
    <div id={'container'} ref={container}>
      <HomeTextComponent container={container} />
      <HomeCategoryComponent container={container} />
      <HomeServiceComponent container={container} />
      <HomePeopleComponent />
    </div>
  );
}
