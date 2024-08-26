import { publicApi } from '@/configs/axiosClient';

export const getImage = async (house_id: number) => {
  let [data, error] = [undefined, undefined] as any;
  try {
    const result = await publicApi.get(`/image`, {
      params: { house_id: house_id },
    });
    data = result?.data;
  } catch (err) {
    error = err.response?.data;
    if (!error) error = err;
  }
  return [data, error];
};

export const postImage = async (Image: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await publicApi.post(`/image`, Image);
    data = result?.data;
  } catch (err) {
    error = err.response?.data;
    if (!error) error = err;
  }

  return [data, error];
};

export const deleteImage = async (url: number) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await publicApi.delete(`/image`, {
      params: { url: url },
    });
    data = result?.data;
  } catch (err) {
    error = err.response?.data;
    if (!error) error = err;
  }

  return [data, error];
};

export const putImage = async (house_id: number) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await publicApi.put(
      `/image`,
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
