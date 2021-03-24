import axios from 'axios';
import { apiService } from './env';

export const instance = axios.create({
  baseURL: `${apiService}`
});
