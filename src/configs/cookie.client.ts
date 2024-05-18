import Cookies from "universal-cookie";

export const cookies = new Cookies();
// export const userInfoKey = "userInfo";

import { CookieSetOptions } from "universal-cookie";

// 쿠키 옵션은 이런 게 있어요~
// export interface CookieSetOptions {
//   path?: string;
//   expires?: Date;
//   maxAge?: number;
//   domain?: string;
//   secure?: boolean;
//   httpOnly?: boolean;
//   sameSite?: boolean | 'none' | 'lax' | 'strict';
// }

const setCookieClient = (name: string, value: any, option?: CookieSetOptions) => {
  return cookies.set(name, value, { ...option });
};

const getCookieClient = (name: string) => {
  return cookies.get(name);
};

const removeCookieClient = (name: string, option?: CookieSetOptions) => {
  return cookies.remove(name, { ...option });
};

const accessTokenOption: CookieSetOptions = {
  //expires?: Date;
  domain: ".buildintruss.com",
  maxAge: 6000,
  secure: false,
  httpOnly: false,
  sameSite: false,
};

export const getAccessTokenClient = () => getCookieClient("accessToken");
export const setAccessTokenClient = (value: string) => setCookieClient("accessToken", value, accessTokenOption);
export const removeAccessTokenClient = () => removeCookieClient("accessToken", accessTokenOption);
