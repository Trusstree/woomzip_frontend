export const parseSpecificationInfo = (data: string): {} => {
  if (!data) return {};
  return Object.fromEntries(
    Object.entries(JSON.parse(data)).map(([key, value]) => [
      key,
      value["default"]
        ? `${value["default"].join(", ")}${value["etc"] ? `, ${value["etc"]}` : ""}`
        : value["etc"]
          ? value["etc"]
          : value,
    ])
  );
};

//base 64를 디코딩한 후에 parse 과정을 통해 json화 하는 함수
//jwt-decode 안 쓰고, 맛깔나는 커스텀 함수를 통해 decode작업을 진행할 예정
export const getUserdataByToken = (accessToken: string) => {
  if (!accessToken) return undefined;
  return JSON.parse(Buffer.from(accessToken.split(".")[1], "base64").toString());
};
