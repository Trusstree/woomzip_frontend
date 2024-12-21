"use client"

import Comp1 from '@/app/_comp/Comp1';
import Comp2 from '@/app/_comp/Comp2';
import Comp3 from '@/app/_comp/Comp3';
import Comp4 from '@/app/_comp/Comp4';
import Comp5 from '@/app/_comp/Comp5';
import Comp6 from '@/app/_comp/Comp6';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const container=useRef(null);

  useGSAP(
    () => {
      gsap.to("#comp2", {
        scrollTrigger: {
          trigger: "#comp2",
          start: "top 61",
          pin: true, 
          scrub: 0.5,
          pinSpacing: false,
        },
      });
      // gsap.to("#comp3", {
      //   scrollTrigger: {
      //     trigger: "#comp3",
      //     start: "top 61",
      //     pin: true, 
      //     scrub: 0.5,
      //     pinSpacing: false,
      //   },
      // });
      gsap.to("#comp4", {
        scrollTrigger: {
          trigger: "#comp4",
          start: "top 61",
          pin: true, 
          scrub: 3,
          pinSpacing: false,
        },
      });
      gsap.to("#comp5", {
        // scale: 1.5,
        duration:0.5,
        alpha:1,
        //transformOrigin: "center center",
        scrollTrigger: {
          trigger: "#comp5",
          start: "top 61",
          end: "bottom 61",
          pin: true, 
          scrub: 0.5,
          pinSpacing: false,
        },
      });
      // gsap.to("#comp6", {
      //   scrollTrigger: {
      //     trigger: "#comp6",
      //     start: "top 61",
      //     end: "top top",
      //     //pin: true, 
      //     scrub: 0.5,
      //     pinSpacing: true,
      //   },
      // });
    },
    { scope: container.current }
  );
  
  return (
    <div id={"container"} ref={container}>
      <Comp1 id={'comp1'} />
      <Comp2 id={'comp2'} container={container} />
      <Comp3 id={'comp3'} />
      <Comp4 id={'comp4'} />
      <Comp5 id={'comp5'} />
      <Comp6 id={'comp6'} />
    </div>
  );
}
