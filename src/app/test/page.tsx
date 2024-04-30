"use client"

import { getUserCookie } from "@/lib/cookieUtil";
import { useEffect, useState } from "react";

export default function Test() {
  const userCookie = getUserCookie();

  const [phoneNumber, setPhoneNumber]=useState("");

  const handlePhoneNumber = (e) => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(e.target.value)) setPhoneNumber(e.target.value);
  };

  useEffect(()=>{
    if (phoneNumber.length === 10) setPhoneNumber(phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    if (phoneNumber.length === 13) setPhoneNumber(phoneNumber.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
  },[phoneNumber]);
  
  const testFunc=(e)=>{
    console.log(e);
  }
  
  return (
    <div>
      <div>
        <input
          type={"text"}
          value={phoneNumber}
          onChange={handlePhoneNumber}/>
      </div>
			<div className={"btn"} onClick={testFunc} >
        테스트 버튼
      </div>
    </div>
  );
}