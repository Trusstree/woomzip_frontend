import { signedApiClient } from "@/configs/apiClient";

export const getHeart = async (params: any) => {
  let [count, countError] = [undefined, undefined] as any;
  try {
    const result = await signedApiClient.get(`/heart`, {
      params: params,
      headers: {},
    });
    count = result?.data;
  } catch (err) {
    countError = err;
  }
  return [count, countError];
};

export const getHeartHouses = async (params: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await signedApiClient.get(`/heart/houses`, {
      params: params,
      headers: {},
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};

export const getHeartCount = async (house_id: number) => {
  let [count, countError] = [undefined, undefined] as any;
  try {
    const result = await signedApiClient.get(`/heart/count`, {
      params: { house_id: house_id },
      headers: {},
    });
    count = result?.data;
  } catch (err) {
    countError = err;
  }
  return [count, countError];
};

export const postHeart = async (heart: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await signedApiClient.post(`/house/find-my-house/detail/like`, heart);
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};

export const deleteHeart = async (heart: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await signedApiClient.post(`/house/find-my-house/detail/unlike`, heart);
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};
