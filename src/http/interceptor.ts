import { getItem } from '@/helpers/localStorage';
import type { CreateAxiosDefaults } from 'axios';
import axios from 'axios';

export const API_URL = import.meta.env.API_URL;

const options: CreateAxiosDefaults = {
  baseURL: API_URL,
  withCredentials: true,
};

const $api = axios.create(options);
const $apiAuth = axios.create({
  baseURL: API_URL,
});

$api.interceptors.request.use(config => {
  const accessToken = getItem('accessToken');
  if (config.headers && accessToken) {
    config.headers.Authorization = 'Bearer ' + accessToken;
  }
  return config;
});

$api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._isRetry
    ) {
      originalRequest._isRetry = true;
    }
    throw error;
  }
);

export { $api, $apiAuth };
