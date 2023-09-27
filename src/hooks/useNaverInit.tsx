"use client"

import { useCallback, useEffect } from "react";

export default function useNaverInit(){
  const handleNaverInit = useCallback(()=>{
    const naver = window.naver;
    
    const naverLogin = new naver.LoginWithNaverId({
      clientId:  process.env.NEXT_PUBLIC_NAVER_CLIENT_ID, //ClientID
      callbackUrl: process.env.NEXT_PUBLIC_NAVER_CALLBACK_URL, // Callback URL
      callbackHandle: true,
      isPopup: false, // 팝업 형태로 인증 여부
      loginButton: {
        color: 'green', // 색상
        type: 3, // 버튼 크기
        height: '80', // 버튼 높이
      }, // 로그인 버튼 설정
    })

    naverLogin.init();
  },[])
  
  useEffect(()=>{
    handleNaverInit()
  },[])
}