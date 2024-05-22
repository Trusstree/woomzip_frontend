import { apiClient } from "@/configs/publicApi";

export const getImage = async (house_id: number) => {
  let [count, countError] = [undefined, undefined] as any;
  try {
    const result = await apiClient.get(`/image`, {
      params: { house_id: house_id },
    });
    count = result?.data;
  } catch (err) {
    countError = err;
  }
  return [count, countError];
};

export const postImage = async (Image: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.post(`/image`, Image);
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};

export const deleteImage = async (url: number) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.delete(`/image`, {
      params: { url: url },
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};

export const putImage = async (house_id: number) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.put(
      `/image`,
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
