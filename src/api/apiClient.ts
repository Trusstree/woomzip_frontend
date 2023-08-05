import axios from 'axios';

export const ApiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  timeout: 5000
});