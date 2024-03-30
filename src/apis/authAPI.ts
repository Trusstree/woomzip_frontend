import { apiClient } from "@/configs/apiClient";

export const postAccessToken = async (accessToken: string) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.get(`/apis/auth/access`, {
      headers: {'X-AUTH-TOKEN': accessToken} 
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
};