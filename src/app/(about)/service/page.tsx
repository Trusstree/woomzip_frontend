'use client';

import Image from 'next/image';
import Inquiry from '@/components/Inquiry';
import { useRef } from 'react';
import Comp1 from '@/app/(about)/service/_components/Comp1';
import Comp2 from '@/app/(about)/service/_components/Comp2';
import Comp3 from '@/app/(about)/service/_components/Comp3';
import Comp4 from '@/app/(about)/service/_components/Comp4';
import InquiryComponent from '@/app/(about)/service/_components/InquiryComponent';

export default function Service() {
  const inquiryRef = useRef(null);
  return (
    <>
      <Comp1 inquiryRef={inquiryRef} />
      <Comp2 />
      <Comp3 />
      <Comp4 />
      <InquiryComponent />
    </>
  );
}
