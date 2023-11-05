"use client"

import { Children } from "@/types/props";
import { useRouter } from "next/navigation";
import { CSSProperties } from "react";

type MainPagePostProps = {
  url: string
  src: string
  children: Children
  className?: string
  style?: CSSProperties
}

export default function MainPagePost(props: MainPagePostProps) {
  const router = useRouter();
  const { url, src, children, className, style } = props;

  return (
    <div className="d-flex flex-column align-items-center">
      <button type="button"
      style={{...style, color:"#101648"}}
      className={`${className?className:""} px-4 py-2 btn rounded-lg fw-bold`}
      onClick={()=>{router.push(url);}}>
        <img
          className="rounded-4"
          src={`${src}`}
          width={250} height={250}/>
      </button>
      <div className="w-100 text-left px-4">
        {children}
      </div>
    </div>
    
  );
}