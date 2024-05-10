import { apiClient, signedApiClient } from "@/configs/apiClient";

export const getLivings = async (params?: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.get(`/pavilion/living`, {
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
    const result = await apiClient.get(`/pavilion/living/${livingNum}`, {
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
    const result = await apiClient.get(`/pavilion/living/review/${livingNum}`, {
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
    const result = await signedApiClient.post(`/review/pavilion/create`, body);
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};

export const postReservation = async (body: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await signedApiClient.post(`/pavilion/reservation/apply/1`, body);
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};

export const getReservation = async (reservationNum: number) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await signedApiClient.get(`/pavilion/reservation/${reservationNum}`, {
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
    const result = await apiClient.get(`/pavilion/reservation/unavailable/${reservationNum}`, {
      params: {},
      headers: {},
    });

    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};
