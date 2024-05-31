type accessTokenOptionType = {
  path: string;
  secure: boolean;
  httpOnly: boolean;
  sameSite: boolean | "lax" | "strict" | "none";
  domain?: string;
  expires?: Date;
};

export const accessTokenOption: accessTokenOptionType = {
  //expires?: Date;
  //domain: ".buildintruss.com",
  path: "/",
  secure: true,
  httpOnly: true,
  sameSite: "lax",
};
