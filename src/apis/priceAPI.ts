import { apiClient } from "@/configs/apiClient";

export const getPrices = async (house_id:number) => {
  let [count, countError] = [undefined, undefined] as any;
  try {
    const result = await apiClient.get(`/apis/price`, {
      params: {house_id: house_id},
      headers: {}
    });
    count = result?.data;
  } catch (err) {
    countError = err;
  }
  return [ count, countError ];
}

export const postPrice = async (Price: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.post(`/apis/price`, Price, { headers: {} });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [ data, error ];
};

export const deletePrice = async (idx: number) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.delete(`/apis/price`, {
      params: {idx: idx},
      headers: {}
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [ data, error ];
}

export const putPrice = async (house_id:number) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.put(`/apis/price`, { house_id: house_id } , {
        params: {},
        headers: {}
      });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [ data, error ];
}