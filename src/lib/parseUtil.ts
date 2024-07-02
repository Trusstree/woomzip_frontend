// { default?: Array<string>; etc?: string }
export const parseSpecificationInfo = (data: any) => {
  if (!data) return undefined;
  const def = data.default ? data.default.join(", ") : "";
  const etc = data.etc ? data.etc : "";
  return def ? def + (etc ? `, ${etc}` : "") : etc ? etc : "";
};

//base 64를 디코딩한 후에 parse 과정을 통해 json화 하는 함수
//jwt-decode 안 쓰고, 맛깔나는 커스텀 함수를 통해 decode작업을 진행할 예정
export const getUserdataByToken = (accessToken: string) => {
  if (!accessToken) return undefined;
  return JSON.parse(Buffer.from(accessToken.split(".")[1], "base64").toString());
};
