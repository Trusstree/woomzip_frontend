"use client"

import { signIn, signOut, useSession } from "next-auth/react";

export default function SigninButton(){
  const { data: session } = useSession();
  
  return (
    <>
      {(session===undefined)?undefined:
        (session===null)?
          <button type="button"
            style={{color:"#101648"}}
            className={`px-4 py-2 btn rounded-lg fw-bold align-self-end`}
            onClick={()=>{signIn()}}
            > 로그인/회원가입
          </button>
          :
          <button type="button"
            style={{color:"#101648"}}
            className={`px-4 py-2 btn rounded-lg fw-bold align-self-end`}
            onClick={()=>{signOut()}}
            > 로그아웃
          </button>
      }
    </>
  )
}