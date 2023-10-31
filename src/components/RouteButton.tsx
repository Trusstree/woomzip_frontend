"use client"

import { Children } from "@/types/props";
import { usePathname, useRouter } from "next/navigation";
import { CSSProperties } from "react";

type RouteButtonProps = {
  url: string
  children: Children
  className?: string
  style?: CSSProperties
}

export default function RouteButton(props: RouteButtonProps) {
  const router = useRouter();
  const pathname = usePathname();
  
  const { className, url, children, style } = props;
  
  return (
  <button type="button"
    style={{...style, color:"#101648"}}
    className={`${className?className:""} px-4 py-2 btn rounded-lg ${url==pathname?"fw-bold":""} align-self-end`}
    onClick={()=>{router.push(url);}}>
    {children}
  </button>
  );
}
