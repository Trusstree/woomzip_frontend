import { AxiosError } from "axios";

export const onPublicRequest = async (request: any) => {
  return request;
};

export const onRequestError = (error: AxiosError) => {
  Promise.reject(error);
};

export const onResponse = async (response: any) => {
  return response;
};

export const onPublicResponseError = async (error: any) => {
  return Promise.reject(error);
};
