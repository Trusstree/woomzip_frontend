"use client"

import { signOut } from "next-auth/react";

export default function Profile() {
  return (
    <>
      <button
        type="button"
        style={{color:"#101648"}}
        onClick={()=>signOut()}>
        로그아웃
      </button>
    </>
  );
}