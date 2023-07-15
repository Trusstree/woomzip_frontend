"use client"

import { useRouter } from "next/navigation";

type RouteButtonProps = {
  dir: string
  children: string
}

export default function RouteButton(props: RouteButtonProps) {
  const router = useRouter();
  const {dir, children} = props;
  return (
  <button type="button" className="px-4 py-2 btn btn-primary rounded-lg"
    onClick={()=>{router.push(dir);}}>
    {children}
  </button>
  );
}

 RouteButton;