import axios from 'axios';

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASEURL,
  timeout: 5000
});

export const signedApiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASEURL,
  timeout: 5000
});

export const imageApiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_S3URL,
  timeout: 5000
});