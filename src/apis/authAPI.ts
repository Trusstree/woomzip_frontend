import { publicApi } from "@/configs/publicApi";

export const getAccessToken = async (accessToken: string) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await publicApi.get(`/auth/access`, {
      headers: { "X-AUTH-TOKEN": accessToken },
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};

export const refreshAccessToken = async (accessToken: string) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await publicApi.get(`/users/test`);
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};
