"use server";

import { getAccessTokenServer } from "./cookie.server";

export const onPrivateServerRequest = async (request: any) => {
  const accessToken = getAccessTokenServer();
  if (accessToken) {
    request.headers["Authorization"] = `Bearer ${accessToken}}`;
  }
  return request;
};

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
};
