"use client"

import { useRouter } from "next/navigation";

type RouteButtonProps = {
  url: string
  children: string
  className?:string
}

export default function RouteButton(props: RouteButtonProps) {
  const router = useRouter();
  const { className, url, children } = props;
  return (
  <button type="button"
    style={{backgroundColor:"#101648"}}
    className={`${className?className:""} px-4 py-2 btn text-white rounded-lg fw-bold fs-5`}
    onClick={()=>{router.push(url);}}>
    {children}
  </button>
  );
}
