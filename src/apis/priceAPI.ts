import { apiClient } from "@/configs/publicApi";

export const getPrice = async (house_id: number) => {
  let [count, countError] = [undefined, undefined] as any;
  try {
    const result = await apiClient.get(`/price`, {
      params: { house_id: house_id },
    });
    count = result?.data;
  } catch (err) {
    countError = err;
  }
  return [count, countError];
};

export const postPrice = async (Price: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.post(`/price`, Price);
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};

export const deletePrice = async (idx: number) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.delete(`/price`, {
      params: { idx: idx },
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};

export const putPrice = async (house_id: number) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.put(
      `/price`,
      { house_id: house_id },
      {
        params: {},
      }
    );
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};
