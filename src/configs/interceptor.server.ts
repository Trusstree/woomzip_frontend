import { getUserCookie, setUserCookie } from "@/lib/cookieUtil";
import { cookies } from 'next/headers';

export const onPrivateServerRequest = async (request: any) => {
  const userCookie = getUserCookie();
  const cookieStore = cookies();
  console.log(cookieStore.get("accessToken"));
  if (userCookie) {
    request.headers["Authorization"] = `Bearer ${userCookie.accessToken}`;
  }
  return request;
}

export const onPrivateServerResponseError = async (error: any) => {
  const status = error.response.data.status;
  const errorConfig = error.response.config;

  try {
    if (status == 401) {
      console.log(error);
      //refreshAccessToken(session.user.accessToken);
    }

    // Access Token 재발급해서 다시 신호 보내주는 작업
    if (status == 402) {

    }
  } catch (referenceError) {
    return Promise.reject(referenceError);
  }

  return Promise.reject(error);
}
