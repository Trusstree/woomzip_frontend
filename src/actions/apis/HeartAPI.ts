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
    error = err.response?.data;
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
    error = err.response?.data;
  }

  return [data, error];
};

export const getPostHeartUser = async (pid: any) => {
  let [data, error] = [undefined, undefined] as any[];

  try {
    const result = await privateApi.get(`/community/detail/like/${pid}`, {
      params: { pid: pid },
      headers: {},
    });
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
