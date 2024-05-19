"use server";

import axios from "axios";
import { onRequestError, onResponse } from "./interceptor";
import { onPrivateServerRequest, onPrivateServerResponseError } from "./interceptor.server";

// 서버 사이드에서 사용할 인스턴스
export const privateApiServer = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASEURL,
  timeout: 5000,
});

privateApiServer.interceptors.request.use(onPrivateServerRequest, onRequestError);
privateApiServer.interceptors.response.use(onResponse, onPrivateServerResponseError);
