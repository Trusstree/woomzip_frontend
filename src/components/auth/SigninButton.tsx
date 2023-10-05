"use client"

import { signIn, signOut, useSession } from "next-auth/react";

export default function SigninButton(){
  const { data: session } = useSession();
  
  return (
    <div>
      {session?.user?.email}
      {session?
        <div
          className="button"
          onClick={()=>{signOut()}}
          > sign out
        </div>
        :
        <div
          className="button"
          onClick={()=>{signIn()}}
          > sign in
        </div>
      }
    </div>
  )
}