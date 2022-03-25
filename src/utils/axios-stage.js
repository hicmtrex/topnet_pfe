import axios from 'axios';

const clientAxios = axios.create({
  baseURL: '/api',
});

export const clientProvider = (store) => {
  clientAxios.interceptors.request.use((config) => {
    const token = store.getState().stageLogin.userInfo.token;
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};

export default clientAxios;
