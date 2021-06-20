import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

class ApiConfig {
  api: AxiosInstance;

  constructor(options: AxiosRequestConfig) {
    this.api = axios.create(options);
  }
}

export const jsonPlaceholder = new ApiConfig({
  baseURL: process.env.JSONPLACEHOLDER,
});
