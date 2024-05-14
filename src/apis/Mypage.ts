import { privateApiClient } from "@/configs/privateApiClient";

export const getLikeHouses = async (params: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await privateApiClient.get(`/mypage/like-houses`, {
      params: params,
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};
