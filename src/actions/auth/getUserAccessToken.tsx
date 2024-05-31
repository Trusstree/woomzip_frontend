"use server";

import { cookies } from "next/headers";

export const getUserAccessToken = async () => {
  const cookieStorage = cookies();
  return cookieStorage.get("accessToken");
};
