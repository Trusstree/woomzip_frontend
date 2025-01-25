'use server';

import { postDiscordWebhook } from '@/actions/apis/alarmAPI';
import { privateApi, publicApi } from '@/configs/axiosClient';

export const getHouses = async (params: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await publicApi.get(`/house/find-my-house`, {
      params: params,
      headers: {},
    });
    data = result?.data;
  } catch (err) {
    error = err.response?.data;
    if (!error) error = err;
  }

  return [data, error];
};

export const postPlanning = async (house: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await privateApi.post(`/planning/v3/apply`, house);
    postDiscordWebhook({
      houseId: house.house_id,
      name: house.name,
      contact: house.contact,
      inquiry: "알람문구 지정해주세요. (계획하기 부분)"
    });
    data = result?.data;
  } catch (err) {
    error = err.response?.data;
    if (!error) error = err;
  }

  return [data, error];
};

export const getPlanning = async () => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await privateApi.get(`/planning/admin/pending`);
    data = result?.data;
  } catch (err) {
    error = err.response?.data;
    if (!error) error = err;
  }

  return [data, error];
};

export const patchPlanningConfirm = async (pid: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await privateApi.patch(`/planning/admin/deliver`, { planningId: pid });
    data = result?.data;
  } catch (err) {
    error = err.response?.data;
    if (!error) error = err;
  }

  return [data, error];
};
