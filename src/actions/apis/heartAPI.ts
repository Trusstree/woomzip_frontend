"use server";

import { privateApi } from "@/configs/axiosClient";

export const getHouseHeartUser = async (hid: number, params?: any) => {
  let [count, countError] = [undefined, undefined] as any;
  try {
    const result = await privateApi.get(`/house/detail/like/${hid}`, {
      params: params ?? {},
      headers: {},
    });
    count = result?.data;
  } catch (err) {
    countError = err;
  }
  return [count, countError];
};

export const postHouseHeart = async (pid: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await privateApi.post(`/house/find-my-house/detail/like`, { house_id: pid });
    data = result?.data;
  } catch (err) {
    error = err.response?.data;
  }
  return [data, error];
};

export const postHouseHeartRemove = async (hid: number) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await privateApi.post(`/house/find-my-house/detail/unlike`, { house_id: hid });
    data = result?.data;
  } catch (err) {
    error = err.response?.data;
  }

  return [data, error];
};

export const postPostHeart = async (pid: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await privateApi.post(`/community/post/like`, { post_id: pid });
    data = result?.data;
  } catch (err) {
    error = err.response?.data;
  }
  return [data, error];
};

export const postPostHeartRemove = async (pid: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await privateApi.post(`/community/post/unlike`, { post_id: pid });
    data = result?.data;
  } catch (err) {
    error = err.response?.data;
  }

  return [data, error];
};

export const getCommentHeartUser = async (cid: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await privateApi.get(`/community/comment/like`, {
      params: { cid: cid },
      headers: {},
    });
    data = result?.data;
  } catch (err) {
    error = err.response?.data;
  }

  return [data, error];
};

export const postCommentHeart = async (cid: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await privateApi.post(`/community/comment/like`, { comment_id: cid });
    data = result?.data;
  } catch (err) {
    error = err.response?.data;
  }

  return [data, error];
};

export const postCommentHeartRemove = async (cid: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await privateApi.post(`/community/comment/unlike`, { comment_id: cid });
    data = result?.data;
  } catch (err) {
    error = err.response?.data;
  }

  return [data, error];
};
