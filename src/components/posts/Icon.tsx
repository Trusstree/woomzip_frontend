"use client"

import useQuery from "@/hooks/useQuery";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CSSProperties } from "react";

type IconProps = {
  src: string
  title: string
  width: number
  height: number
  param?: string
  className?: string
  style?: CSSProperties
}

export default function Icon(props: IconProps) {
  const router = useRouter();
  const { className, title, width, height, param, src, style } = props;
  const { createQueryString } = useQuery();

  return (
    <div className={`${className?className:""}`} style={{width:"70px"}}>
      <button type="button"
        style={{...style, color:"#101648"}}
        className={`btn rounded-lg fw-bold`}
        onClick={()=>{router.push(createQueryString('category', param));}}>
        <Image
          src={src}
          alt={`${title}`}
          width={width}
          height={height} />
      </button>
    </div>
    
  );
}