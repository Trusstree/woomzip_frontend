import axios from "axios";
import { useState, useCallback, useEffect } from "react";

export default function useKakaoSignin () {
    const [isLoading, setIsLoading] = useState(true);
  
    const handleLoadingToggle = (flag: boolean) => {
      setIsLoading(flag);
    };
  
    const handleGetProfile = useCallback(async () => {
      try {
        const response: any = await window.Kakao.API.request({
          url: '/v2/user/me',
        });
  
        // 위 response를 가지고 서비스에 알맞는 로직을 구성해주시면 됩니다.
        console.log(response);
      } catch (err) {
        setIsLoading(false);
      }
    }, []);
  
    const handleKakaoSignin = useCallback(
      async (code: string | string[]) => {
         const options:any = {
           method: 'POST',
           url: `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL}&code=${code}`,
           data : code
         } as any;
            
  
        const response = await axios(options).catch((err) => {
          console.error(err);
          setIsLoading(false);
        }) as any;
  
        if (response?.status !== 200) {
          setIsLoading(false);
          return;
        }
  
        window.Kakao.Auth.setAccessToken(response?.data?.access_token);
  
        handleGetProfile();
      },
      [],
    );
  
  
    useEffect(() => {
      const code = "";
  
      if (code) handleKakaoSignin(code);
    }, []);
  
    return { isLoading, onLoadingToggle: handleLoadingToggle};
  }