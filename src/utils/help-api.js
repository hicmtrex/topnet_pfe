import axios from 'axios';

export const setError = (error) => {
  const message =
    (error.response && error.response.data && error.response.data.message) ||
    error.message ||
    error.toString();

  return message;
};

const adminAxios = axios.create({
  baseURL: '/api',
});

export const authorizationProvider = (store) => {
  adminAxios.interceptors.request.use((config) => {
    const token = store.getState().userLogin.userInfo.token;
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};

export const LOCAL_STORAGE = {
  auth: 'sarapfe-auth-token',
};

export default adminAxios;
