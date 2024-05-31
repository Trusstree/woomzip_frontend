"use server";

import { encrypt } from "@/lib/security";

export const encryptPW = async (pw: string) => {
  return encrypt(pw);
};
