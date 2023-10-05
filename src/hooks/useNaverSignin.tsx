// "use client"

// import axios from "axios";
// import { useState, useCallback, useEffect } from "react";

// export default function useNaverSignin() { 
//     const [isLoading, setIsLoading] = useState(true);
  
//     const handleLoadingToggle = (flag: boolean) => {
//       setIsLoading(flag);
//     };
  
//     const handleNaverLogin = useCallback(
//       async (token: string) => {
//         try{
//           // response를 가지고 서비스에 알맞는 로직을 구성해주시면 됩니다
//           const response = await axios.get('/v1/nid/me',{
//             headers :{
//               Authorization : `Bearer ${token}`
//             }
//            }
//            )

//            console.log(response);
//          }catch(error){
//             console.error(error)
//             setIsLoading(false)
//          }
  
//     }, [])
  
//     useEffect(()=>{
//       const token = window.location.href.split('#')[1].split("&").find((e)=>(e.includes("access_token"))).split("=")[1];
//       console.log(token);
//       // 네이버 아이디 로그인이 query에 accesstoken으로 넘겨주는 값을 추출해옵니다.
  
//       if(token) handleNaverLogin(token);
  
//     },[])
  
//     return {isLoading, onLoadingToggle : handleLoadingToggle}
//   }