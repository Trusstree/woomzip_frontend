import { privateApiClient } from "@/configs/privateApiClient";
import { privateApiServer } from "@/configs/privateApiServer";
import { publicApi } from "@/configs/publicApi";

export const getUser = async (uid: string | number) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await privateApiClient.get(`/users/profile`, {
      params: { uid: uid },
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};

export const postUser = async (user: any, token: string) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await publicApi.post(`/users/enroll`, user);
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
};

export const putUser = async (user: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await privateApiClient.post(`/users/update`, user);
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};

export const signinUser = async (user: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await publicApi.post(`/auth/sign-in`, user);
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};

export const signupUser = async (user: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await publicApi.post(`/auth/sign-up`, user);
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};

export const validateID = async (user_id: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await publicApi.get(`/auth/exist/id`, {
      params: { id: user_id },
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};

export const validateName = async (nickname: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await publicApi.get(`/auth/exist/nickname`, {
      params: { nickname: nickname },
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};
