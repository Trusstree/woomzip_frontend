'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function HomeCategoryNav({
  container,
  category1,
  category2,
  category3,
}: {
  container: any;
  category1: any;
  category2: any;
  category3: any;
}) {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const scrollCategory1 = () => category1.current.scrollIntoView();
  const scrollCategory2 = () => category2.current.scrollIntoView();
  const scrollCategory3 = () => category3.current.scrollIntoView();

  useGSAP(
    () => {
      gsap.to('#category1Btn', {
        backgroundColor: '#666666',
        color: '#ffffff',
        scrollTrigger: {
          trigger: '#category1BG',
          start: 'top center',
          end: '70% center',
          toggleActions: 'play reverse play reverse',
        },
      });

      gsap.to('#category2Btn', {
        backgroundColor: '#666666',
        color: '#ffffff',
        scrollTrigger: {
          trigger: '#category2BG',
          start: 'top center',
          end: '70% center',
          toggleActions: 'play reverse play reverse',
        },
      });

      gsap.to('#category3Btn', {
        backgroundColor: '#666666',
        color: '#ffffff',
        scrollTrigger: {
          trigger: '#category3BG',
          start: 'top center',
          end: '70% center',
          toggleActions: 'play reverse play reverse',
        },
      });
    },
    { scope: container.current },
  );

  return (
    <div
      style={{
        position: 'absolute',
        top: '50px',
        left: 0,
        width: '100%',
        height: '70%',
      }}
    >
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          position: 'sticky',
          top: '80px',
          zIndex: '1',
        }}
      >
        <div
          style={{
            border: 'none',
            borderRadius: '25px',
            backgroundColor: '#444444',
            padding: '4px',
            opacity: '0.9',
          }}
        >
          <div
            id={'category1Btn'}
            className="btn"
            style={{
              border: 'none',
              borderRadius: '20px',
              color: '#999999',
              fontSize: '14px',
              fontWeight: '500',
              padding: '5px 15px',
            }}
            onClick={scrollCategory1}
          >
            농촌 체류형쉼터
          </div>
          <div
            id={'category2Btn'}
            className="btn"
            style={{
              border: 'none',
              borderRadius: '20px',
              color: '#999999',
              fontSize: '14px',
              fontWeight: '500',
              padding: '5px 15px',
            }}
            onClick={scrollCategory2}
          >
            일반 주택
          </div>
          <div
            id={'category3Btn'}
            className="btn"
            style={{
              border: 'none',
              borderRadius: '20px',
              color: '#999999',
              fontSize: '14px',
              fontWeight: '500',
              padding: '5px 15px',
            }}
            onClick={scrollCategory3}
          >
            농막
          </div>
        </div>
      </div>
    </div>
  );
}
