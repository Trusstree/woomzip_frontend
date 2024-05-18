import { getAccessTokenClient, setAccessTokenClient } from "./cookie.client";
import { privateApiClient } from "./privateApiClient";

export const onPrivateClientRequest = async (request: any) => {
  const accessToken = getAccessTokenClient();
  if (accessToken) {
    request.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return request;
};

export const onPrivateClientResponseError = async (error: any) => {
  const status = error.response.data.status;
  const errorConfig = error.response.config;

  try {
    if (status == 401) {
      console.log(error);
      //refreshAccessToken(session.user.accessToken);
    }

    // Access Token 재발급해서 다시 신호 보내주는 작업
    if (status == 402) {
      setAccessTokenClient(error.response.data.data[0].access_token);
      errorConfig.headers["Authorization"] = `Bearer ${error.response.data.data[0].access_token}`;

      const res = await privateApiClient({
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
};
