import cryptoJs from 'crypto-js';

const secretKey = process.env.secretKey;
const iv = process.env.iv;

// 암호화
export const encrypt = (text: string) => {
  const cipher = cryptoJs.AES.encrypt(text, cryptoJs.enc.Utf8.parse(secretKey), {
    iv: cryptoJs.enc.Utf8.parse(iv),
    padding: cryptoJs.pad.Pkcs7,
    mode: cryptoJs.mode.CBC
  });

  return cipher.toString();
};

// 복호화
export const decrypt = (encryptedText: string) => {
  const decipher = cryptoJs.AES.decrypt(encryptedText, cryptoJs.enc.Utf8.parse(secretKey), {
    iv: cryptoJs.enc.Utf8.parse(iv),
    padding: cryptoJs.pad.Pkcs7,
    mode: cryptoJs.mode.CBC
  });

  return decipher.toString(cryptoJs.enc.Utf8);
};

//base 64를 디코딩한 후에 parse 과정을 통해 json화 하는 함수
//jwt-decode 안 쓰고, 맛깔나는 커스텀 함수를 통해 decode작업을 진행할 예정
export const getUserdataByToken = (data: any) => {
  const result = JSON.parse(Buffer.from(data.accessToken.split('.')[1], 'base64').toString());
  return {
    ...result,
    accessToken: data.accessToken,
    refreshToken: data.refreshToken
  };
};
