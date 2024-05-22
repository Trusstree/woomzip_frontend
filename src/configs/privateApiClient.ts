import axios from "axios";
import { onRequestError, onResponse } from "./interceptor";
import { onPrivateClientRequest, onPrivateClientResponseError } from "./interceptor.client";

// 클라이언트 사이드에서 사용할 인스턴스
export const privateApiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASEURL,
  timeout: 5000,
});

privateApiClient.interceptors.request.use(onPrivateClientRequest, onRequestError);
privateApiClient.interceptors.response.use(onResponse, onPrivateClientResponseError);
