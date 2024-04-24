"use client"

import { getUserCookie } from "@/lib/cookieUtil";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect } from "react";

export default function Test() {
  const userCookie = getUserCookie();
	// const { data: session } = useSession();
  // useEffect(()=>{
  //   console.log(session); // 로그인 정보 확인용
  // },[session])

  const testFunc=()=>{
  }
  
  return userCookie?.userData?(
    <div>
			<div className={"btn"} onClick={(e)=>{testFunc();}}>
        테스트 버튼
      </div>
    </div>
  ):(
    <div>
      유저 정보가 없습니다~
    </div>
  )
}