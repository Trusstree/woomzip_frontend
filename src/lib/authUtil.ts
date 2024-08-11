import { SHA256 } from 'crypto-js';

//암호화
export const encryptPW = (pw: string) => {
  return SHA256(pw).toString();
};
