import { cookies } from "next/headers";
import { privateApiServer } from "./privateApiServer";

export const onPrivateServerRequest = async (request: any) => {
  const cookieStorage = cookies();
  const accessToken = cookieStorage.get("accessToken")?.value;
  if (accessToken) {
    request.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return request;
};

export const onPrivateServerResponseError = async (error: any) => {
  //error 타입이 AxiosError 인데, 타입 지정 다시 해줘야할 듯
  const status = error.response.data.status;
  const errorConfig = error.response.config;

  try {
    if (status == 401) {
      console.log("access token이 유효하지 않습니다");
    }

    // Access Token 재발급해서 다시 신호 보내주는 작업
    if (status == 402) {
      console.log("혹시라도 이 노랠 듣게 된다면");
      const prevRequest = errorConfig;
      const cookieStorage = cookies();
      cookieStorage.set("accessToken", error.response.data.data[0].access_token);
      console.log(cookieStorage.get("accessToken"));
      prevRequest.headers["Authorization"] = `Bearer ${error.response.data.data[0].access_token}`;
      return privateApiServer(errorConfig);
    }
  } catch (referenceError) {
    console.log(referenceError);
    return Promise.reject(referenceError);
  }
  return Promise.reject(error);
};
