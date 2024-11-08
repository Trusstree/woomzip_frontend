import { postDiscordWebhook } from '@/actions/apis/alarmAPI';
import { publicApi } from '@/configs/axiosClient';

export const getRequestions = async () => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await publicApi.get(`/requestion`, {
      params: {},
    });
    data = result?.data;
  } catch (err) {
    error = err.response?.data;
    if (!error) error = err;
  }

  return { data, error };
};

export const getRequestion = async (requestionNum: number) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await publicApi.get(`/requestion/${requestionNum}`, {
      params: {},
    });
    data = result?.data;
  } catch (err) {
    error = err.response?.data;
    if (!error) error = err;
  }

  return { data, error };
};

export const postRequestion = async (requestion: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await publicApi.post(`/requestion/`, requestion);
    postDiscordWebhook();
    data = result?.data;
  } catch (err) {
    error = err.response?.data;
    if (!error) error = err;
  }

  return { data, error };
};
