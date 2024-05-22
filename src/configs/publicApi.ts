import axios from "axios";
import { onPublicRequest, onPublicResponseError, onRequestError, onResponse } from "./interceptor";

// 인증이 필요없는 인스턴스
export const publicApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASEURL,
  timeout: 5000,
});
publicApi.interceptors.request.use(onPublicRequest, onRequestError);
publicApi.interceptors.response.use(onResponse, onPublicResponseError);
