import { CookieSetOptions } from 'universal-cookie';
import { cookies, userInfoKey } from '../configs/cookie';

const setCookie = (name: string, value: any, option?: CookieSetOptions) => {
  return cookies.set(name, value, { ...option });
};

const getCookie = (name: string) => {
  return cookies.get(name);
};

const removeCookie = (name: string, option?: CookieSetOptions) => {
  return cookies.remove(name, { ...option });
};

export const setUserCookie = (value: any, option?: any) => setCookie(userInfoKey, value, { ...option });
export const getUserCookie = () => getCookie(userInfoKey);
export const removeUserCookie = (option?: any) => removeCookie(userInfoKey, { ...option });

