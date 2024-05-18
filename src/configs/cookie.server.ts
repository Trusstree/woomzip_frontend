"use server";

import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

const cookieStore = cookies();

const getCookieServer = (name: string) => cookieStore.get(name);
const setCookieServer = (name: string, value: string, option?: ResponseCookie) => cookieStore.set(name, value, option);
const removeCookieServer = (name: string) => cookieStore.delete(name);

const accessTokenOption = {
  //expires?: Date;
  maxAge: 6000,
  secure: true,
  httpOnly: true,
  sameSite: true,
};

export const getAccessTokenServer = () => getCookieServer("accessToken");
export const setAccessTokenServer = (value: string) => setCookieServer("accessToken", value);
export const removeAccessTokenServer = () => removeCookieServer("accessToken");
