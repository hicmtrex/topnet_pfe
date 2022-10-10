import axios from 'axios';

export const baseUrl = process.env.REACT_APP_API_URL;

export const publicAxios = axios.create({
  baseURL: `${baseUrl}`,
});

const clientAxios = axios.create({
  baseURL: `${baseUrl}/api`,
});

export const clientProvider = (store) => {
  clientAxios.interceptors.request.use((config) => {
    const token = store.getState().stageLogin.userInfo.token;
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};

export default clientAxios;
