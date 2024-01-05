"use client"

import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Test() {
	const { data: session } = useSession();
  useEffect(()=>{
    console.log(session); // 로그인 정보 확인용
  },[session])
  
  return session?.user?(
    <div>
			<div>
        {session.expires}
        </div>
			<div>
        {session.user.email}
        </div>
			<div>
        <img src={`${session.user.image}`} alt={`유저 이미지`}></img>
      </div>
			<div>{session.user.name}
      </div>
    </div>
  ):(
    <div>
      유저 정보가 없습니다~
    </div>
  )
}