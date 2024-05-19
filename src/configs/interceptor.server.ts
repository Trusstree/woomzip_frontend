"use server";

import { cookies } from "next/headers";
import { privateApiServer } from "./privateApiServer";

export const onPrivateServerRequest = async (request: any) => {
  const cookieStorage = cookies();
  const accessToken = cookieStorage.get("accessToken");
  if (accessToken) {
    request.headers["Authorization"] = `Bearer ${accessToken.value}`;
  }
  return request;
};

export const onPrivateServerResponseError = async (error: any) => {
  const status = error.response.data.status;
  const errorConfig = error.response.config;

  try {
    if (status == 401) {
      console.log("흠바리~");
      const cookieStorage = cookies();
      console.log(cookieStorage.get("accessToken"));
      cookieStorage.set("accessToken", error.response.data.data[0].access_token);
      errorConfig.headers["Authorization"] = `Bearer ${error.response.data.data[0].access_token}`;
      //console.log(error);
      //refreshAccessToken(session.user.accessToken);
    }

    // Access Token 재발급해서 다시 신호 보내주는 작업
    if (status == 402) {
      //console.log("훔훔바리");
      const cookieStorage = cookies();
      //cookieStorage.set("accessToken", error.response.data.data[0].access_token);
      errorConfig.headers["Authorization"] = `Bearer ${error.response.data.data[0].access_token}`;
      const res = await privateApiServer({
        method: errorConfig.method,
        url: errorConfig.url,
        data: errorConfig.data,
        headers: errorConfig.headers,
      });
      //console.log(res);
      if (res.status >= 400) throw res;
      else return res;
    }
  } catch (referenceError) {
    console.log(referenceError);
    return Promise.reject(referenceError);
  }

  return Promise.reject(error);
};
