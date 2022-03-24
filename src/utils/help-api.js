import axios from 'axios';

export const roleCheck = (u) => {
  if (u.coordinator === true) {
    return 'Coordinator';
  } else if (u.service_rh === true) {
    return 'Service Rh';
  } else if (u.encadrant === true) {
    return 'Encadrant ';
  }
};

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
  admin: 'sarapfe-admin-token',
};

export default adminAxios;
