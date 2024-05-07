import axios from "axios";
import { AxiosInterceptorSetup } from "./interceptor";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASEURL,
  timeout: 5000,
});

export const signedApiClient = (() => {
  const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASEURL,
    timeout: 5000,
  });
  AxiosInterceptorSetup(client);
  return client;
})();

export const imageApiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_S3URL,
  timeout: 5000,
});
