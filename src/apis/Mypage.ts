import { signedApiClient } from "@/configs/apiClient";

export const getLikeHouses = async (params: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await signedApiClient.get(`/mypage/like-houses`, {
      params: params,
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};
