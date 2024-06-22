"use server";

import { cookies } from "next/headers";

export const getUserAccessToken = async () => {
  const cookieStorage = cookies();
  return cookieStorage.get("accessToken");
};

export const signout = async () => {
  const cookieStorage = cookies();
  cookieStorage.delete("accessToken");
};
