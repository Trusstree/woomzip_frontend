"use server";

import { cookies } from "next/headers";

export const signout = async () => {
  const cookieStorage = cookies();
  cookieStorage.delete("accessToken");
};
