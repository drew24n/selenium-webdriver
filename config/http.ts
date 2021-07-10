import axios from 'axios';

export const http = axios.create({
  baseURL: process.env.JSONPLACEHOLDER,
  timeout: 2000,
  headers: {}
});
