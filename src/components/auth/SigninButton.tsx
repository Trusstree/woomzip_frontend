"use client"

import { UserContext, useUser } from "@/app/ContextSession";
import { getUserCookie } from "@/lib/cookieUtil";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

export default function SigninButton(){
  // const { data: session } = useSession();
  const router = useRouter();
  const userCookie = getUserCookie();
  const { userContext, setUserContext } = useUser();

  useEffect(()=>{
    setUserContext(userCookie.userData);
  },[]);

  return (
    (userContext==undefined)?
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
        onClick={()=>{router.push(`/mypage/${userContext.uid}`);}}
        > 마이페이지
      </button>
  )
}