import { apiClient } from "@/configs/apiClient";

export const getHeart = async (params:any) => {
  let [count, countError] = [undefined, undefined] as any;
  try {
    const result = await apiClient.get(`/apis/heart`, {
      params: params,
      headers: {}
    });
    count = result?.data;
  } catch (err) {
    countError = err;
  }
  return [ count, countError ];
}

export const getHeartHouses = async (params: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.get(`/apis/heart/houses`, {
      params: params,
      headers: {}
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [ data, error ];
};

export const getHeartCount = async (house_id: number) => {
  let [count, countError] = [undefined, undefined] as any;
  try {
    const result = await apiClient.get(`/apis/heart/count`, {
      params: {house_id: house_id},
      headers: {}
    });
    count = result?.data;
  } catch (err) {
    countError = err;
  }
  return [ count, countError ];
}

export const postHeart = async (heart: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.post(`/apis/heart`, heart, { headers: {} });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [ data, error ];
};

export const deleteHeart = async (params: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.delete(`/apis/heart`, {
      params: params,
      headers: {}
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [ data, error ];
}