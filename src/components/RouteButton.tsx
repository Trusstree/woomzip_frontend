"use client"

import { useRouter } from "next/navigation";

type RouteButtonProps = {
  url: string
  children: string
  className?:string
}

export default function RouteButton(props: RouteButtonProps) {
  const router = useRouter();
  const {className, url, children } = props;
  return (
  <button type="button" className={`${className?className:""} px-4 py-2 btn btn-primary rounded-lg`}
    onClick={()=>{router.push(url);}}>
    {children}
  </button>
  );
}
