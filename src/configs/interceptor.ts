import { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { signedApiClient } from "./apiClient";
import { getUserCookie, setUserCookie } from "@/lib/cookieUtil";
import { useUser } from "@/components/app/ContextSession";

// // 백엔드 연동을 위해 액시오스를 사용함
// // 이때 액시오스는 인터셉터를 불러와서 백엔드 응답을 전처리 해주는데 그에 대한 코드
// const interceptResponse = async (value: any) => {
//   let error: any;
//   try {
//     console.log(value);
//   } catch (err) {
//     error = err;
//   }
//   if (error) return await interceptError(error);
//   return value;
// };

// // 인터셉터 처리 중 에러가 발생하면 실행되는 함수
// // 꼭 에러응답을 처리할 때 사용되는 건 아니고 인터셉터 내에서 에러가 나도 실행됨
// const interceptError = async (error: AxiosError) => {
//   const response = error?.response as AxiosResponse;

//   if (!response) console.error('error response does not exist.');
//   else if (!response.data) console.error('error response exists, but response data does not exist.');
//   else {
//     if (response.status === 401) {
//       console.log('error 401');
//       //갱신을 위한 부분. 해당 부분도 백엔드와 통신하므로 마찬가지로 인터셉터를 호출함(이 부분을 주의해서 개발하셔야 합니다 ㅠㅠ)
//       console.log(response)
//     }
//   }

//   const message = response?.data?.message || error.message;
//   return Promise.reject(error);
// };

// 실제로 액시오스로부터 인터셉터를 불러오는 함수
// 이 부분은 App 컴포넌트에서 호출함 (훅이 아님을 주의!)
export const AxiosInterceptorSetup = (client: AxiosInstance) => {
  // 요청 전 실행
  client.interceptors.request.use(
    async (request: any) => {
      const userCookie = getUserCookie();

      if (userCookie) {
        request.headers["Authorization"] = `Bearer ${userCookie.accessToken}`;
      }
      return request;
    },
    (error: AxiosError) => {
      console.log(error);
      Promise.reject(error);
    }
  );

  // 응답 전 실행
  client.interceptors.response.use(
    async (response: any) => {
      return response;
    },
    async (error: any) => {
      const status = error.response.data.status;
      const errorConfig = error.response.config;

      try {
        if (status == 401) {
          console.log(error);
          //refreshAccessToken(session.user.accessToken);
        }

        // Access Token 재발급해서 다시 신호 보내주는 작업
        if (status == 402) {
          const userCookie = getUserCookie();
          setUserCookie({
            accessToken: error.response.data.data[0].access_token,
            userData: userCookie.userData,
          });

          errorConfig.headers["Authorization"] = `Bearer ${error.response.data.data[0].access_token}`;

          const res = await signedApiClient({
            method: errorConfig.method,
            url: errorConfig.url,
            data: errorConfig.data,
            headers: errorConfig.headers,
          });
          console.log(res);
          if (res.status >= 400) throw res;
          else return res;
        }
      } catch (referenceError) {
        return Promise.reject(referenceError);
      }

      return Promise.reject(error);
    }
  );
};
