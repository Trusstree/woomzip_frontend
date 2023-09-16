"use client"

import { Children } from "@/type/props";
import { useRouter } from "next/navigation";
import { CSSProperties } from "react";

type RouteButtonProps = {
  url: string
  children: Children
  className?: string
  style?: CSSProperties
}

export default function RouteButton(props: RouteButtonProps) {
  const router = useRouter();
  const { className, url, children, style } = props;
  return (
  <button type="button"
    style={{...style, color:"#101648"}}
    className={`${className?className:""} px-4 py-2 btn rounded-lg fw-bold`}
    onClick={()=>{router.push(url);}}>
    {children}
  </button>
  );
}
