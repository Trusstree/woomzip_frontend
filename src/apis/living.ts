"use server";

import { privateApi, publicApi } from "@/configs/axiosClient";

export const getLivings = async (params?: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await publicApi.get(`/pavilion/living`, {
      params: params || {},
      headers: {},
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};

export const getLiving = async (livingNum: number) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await publicApi.get(`/pavilion/living/${livingNum}`, {
      params: {},
      headers: {},
    });

    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};

export const getLivingReviews = async (livingNum: number) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await publicApi.get(`/pavilion/living/review/${livingNum}`, {
      params: {},
      headers: {},
    });

    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};

export const postPavilionReview = async (body: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await privateApi.post(`/review/pavilion/create`, body);
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};

export const postReservation = async (body: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await privateApi.post(`/pavilion/reservation/apply/1`, body);
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};

export const getReservation = async (params: "pending" | "confirmed" | "rejected") => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await privateApi.get(`/pavilion/reservation/check-apply/${params}`, {
      params: {},
      headers: {},
    });

    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};

export const getReservationConfirm = async (pid: number, params: 1 | 0) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await privateApi.get(`/pavilion/reservation/confirm/${pid}/${params}`, {
      params: {},
      headers: {},
    });

    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};

export const getReservationUnavailable = async (reservationNum: number) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await publicApi.get(`/pavilion/reservation/unavailable/${reservationNum}`, {
      params: {},
      headers: {},
    });

    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};
