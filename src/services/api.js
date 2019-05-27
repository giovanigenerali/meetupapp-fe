import axios from 'axios';
import store from '../store';

const api = axios.create({
  baseURL: process.env.HOST_API,
});

api.interceptors.request.use((config) => {
  const headers = { ...config.headers };
  const { token } = store.getState().auth;

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return { ...config, headers };
});

export default api;
