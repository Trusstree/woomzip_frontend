"use client"

import { useRouter } from "next/navigation";
import { CSSProperties } from "react";

type IconProps = {
  url: string
  src: string
  children: string
  className?: string
  style?: CSSProperties
}

export default function Icon(props: IconProps) {
  const router = useRouter();
  const { className, children, url, src, style } = props;

  return (
    <div className="d-flex flex-column align-items-center">
      <button type="button"
      style={{...style, color:"#101648"}}
      className={`${className?className:""} px-4 py-2 btn rounded-lg fw-bold`}
      onClick={()=>{router.push(url);}}>
        <img
          className=""
          src={src}
          width={80} height={80}/>
      </button>
      <div>
        {children}
      </div>
    </div>
    
  );
}