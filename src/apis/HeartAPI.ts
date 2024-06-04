"use server";

import { privateApi } from "@/configs/axiosClient";

export const getHousesHeartUser = async (hid: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await privateApi.get(`/community/comment/like`, {
      params: { hid: hid },
      headers: {},
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};

export const getHousesHeart = async (params: any) => {
  let [count, countError] = [undefined, undefined] as any;
  try {
    const result = await privateApi.get(`/house/find-my-house/detail/like`, {
      params: params,
      headers: {},
    });
    count = result?.data;
  } catch (err) {
    countError = err;
  }
  return [count, countError];
};

export const getHousesHeartRemove = async (params: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await privateApi.get(`/house/find-my-house/detail/unlike`, {
      params: params,
      headers: {},
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};

export const getPostHeartUser = async (pid: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await privateApi.get(`/community/comment/like`, {
      params: { pid: pid },
      headers: {},
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};

export const getPostHeart = async (pid: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await privateApi.get(`/house/find-my-house/detail/like`, {
      params: { pid: pid },
      headers: {},
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};

export const getPostHeartRemove = async (pid: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await privateApi.get(`/house/find-my-house/detail/unlike`, {
      params: { pid: pid },
      headers: {},
    });
    data = result?.data;
  } catch (err) {
    error = err;
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
    error = err;
  }

  return [data, error];
};

export const getCommentHeart = async (cid: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await privateApi.get(`/community/comment/like`, {
      params: { cid: cid },
      headers: {},
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};

export const getCommentHeartRemove = async (cid: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await privateApi.get(`/community/comment/unlike`, {
      params: { cid: cid },
      headers: {},
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};
