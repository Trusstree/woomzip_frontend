"use client"

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SigninButton(){
  const { data: session } = useSession();
  const router = useRouter();

  return (
    (session===undefined)?undefined:
      (session===null)?
        <button type="button"
          style={{color:"#101648"}}
          className={`px-4 py-2 btn rounded-lg fw-bold align-self-end`}
          onClick={()=>{router.push("/signin");}}
          > 로그인/회원가입
        </button>
        :
        <button type="button"
          style={{color:"#101648"}}
          className={`px-4 py-2 btn rounded-lg fw-bold align-self-end`}
          onClick={()=>{router.push(`/mypage/${session.user.id}`);}}
          > 마이페이지
        </button>
  )
}