import { publicApi } from '@/configs/axiosClient';

export const getPrice = async (house_id: number) => {
  let [data, error] = [undefined, undefined] as any;
  try {
    const result = await publicApi.get(`/price`, {
      params: { house_id: house_id },
    });
    data = result?.data;
  } catch (err) {
    error = err.response?.data;
    if (!error) error = err;
  }
  return [data, error];
};

export const postPrice = async (Price: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await publicApi.post(`/price`, Price);
    data = result?.data;
  } catch (err) {
    error = err.response?.data;
    if (!error) error = err;
  }

  return [data, error];
};

export const deletePrice = async (idx: number) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await publicApi.delete(`/price`, {
      params: { idx: idx },
    });
    data = result?.data;
  } catch (err) {
    error = err.response?.data;
    if (!error) error = err;
  }

  return [data, error];
};

export const putPrice = async (house_id: number) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await publicApi.put(
      `/price`,
      { house_id: house_id },
      {
        params: {},
      },
    );
    data = result?.data;
  } catch (err) {
    error = err.response?.data;
    if (!error) error = err;
  }

  return [data, error];
};
