"use client"

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Comp2({id, container}:{id:string, container:any}){
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      gsap.to("#homeText1", {
        opacity:1,
        scrollTrigger: {
          trigger: "#homeText1",
          start: "50% 70%",
          end: "50% 50%",
          scrub:0.5,
          // markers: {
          //   startColor: 'yellow',
          //     endColor: 'black',
          //     fontSize: '4rem',
          //     indent: 200
          // },
        },
      });
      gsap.to("#homeText2", {
        opacity:1,
        scrollTrigger: {
          trigger: "#homeText2",
          start: "50% 70%",
          end: "50% 50%",
          scrub:0.5,
          // markers: {
          //   startColor: 'yellow',
          //     endColor: 'black',
          //     fontSize: '4rem',
          //     indent: 200
          // },
        },
      });
      gsap.to("#homeText3", {
        opacity:1,
        scrollTrigger: {
          trigger: "#homeText3",
          start: "50% 70%",
          end: "50% 50%",
          scrub:0.5,
          // markers: {
          //   startColor: 'yellow',
          //     endColor: 'black',
          //     fontSize: '4rem',
          //     indent: 200
          // },
        },
      });
      gsap.to("#homeText4", {
        opacity:1,
        scrollTrigger: {
          trigger: "#homeText4",
          start: "50% 70%",
          end: "50% 50%",
          scrub:0.5,
          // markers: {
          //   startColor: 'yellow',
          //     endColor: 'black',
          //     fontSize: '4rem',
          //     indent: 200
          // },
        },
      });
    },
    { scope: container.current }
  );

  return (
    <div
      id={id}
      style={{
        backgroundColor: 'black',
        width: '100%',
        aspectRatio: '32 / 17',
        minHeight: '600px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          fontSize: 'clamp(35px, 6vw, 55px)',
          fontWeight: '600',
          wordBreak: 'keep-all',
          width: '95%',
          margin: '50px auto',
          color: '#ffffff',
        }}
      >
        <span
          id={"homeText1"}
          style={{
            opacity:0,
          }}
        >
          어떤 집을 지어야 할지,
        </span>
        <br />
        
        <span
          id={"homeText2"}
          style={{
            opacity:0,
          }}
        >
          제작사를 믿을 수 있을지,
        </span>
        <br />
        <span
          id={"homeText3"}
          style={{
            opacity:0,
          }}
        >
          내 예산안에 가능할지 고민하시나요?
        </span>
        <br />
        <br />
        <span
          id={"homeText4"}
          style={{
            opacity:0,
          }}
        >
          그 모든 걱정, 움집에선 필요 없어요.
        </span>
      </div>
    </div>
  );
}