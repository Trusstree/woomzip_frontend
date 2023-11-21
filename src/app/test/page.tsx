"use client"

import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Test() {
	const { data: session } = useSession();
  useEffect(()=>{
    console.log(session); // 로그인 정보 확인용
  },[])
  return (
    <div>
			{session?.expires}
			{session?.user?.email}
			<img src={`${session?.user?.image}`} alt={`${session?.user?.image}`}></img>
			{session?.user?.name}
    </div>
  )
}