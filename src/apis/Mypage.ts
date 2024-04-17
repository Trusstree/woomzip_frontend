import { signedApiClient } from "@/configs/apiClient";

export const getLikeHouses = async (params: any, token: string) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await signedApiClient.get(`/apis/mypage/like-houses`, {
      params: params,
      headers: { Authorization: `Bearer ${token}` }
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [ data, error ];
};