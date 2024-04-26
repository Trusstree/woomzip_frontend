"use client"

import { getUserCookie } from "@/lib/cookieUtil";

export default function Test() {
  const userCookie = getUserCookie();

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