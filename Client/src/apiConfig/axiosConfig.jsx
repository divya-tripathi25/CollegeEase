import axios from 'axios';
import Cookies from 'js-cookie';
import toast from "react-hot-toast";

const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const queryParams = new URLSearchParams(window.location.search);
  const tokenFromQuery = queryParams.get('token');

  if (tokenFromQuery) {
    config.headers.Authorization = `Bearer ${tokenFromQuery}`;
  } else {
    const tokenFromCookies = Cookies.get('token');
    if (tokenFromCookies) {
      config.headers.Authorization = `Bearer ${tokenFromCookies}`;
    }
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});


axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      const allCookies = Cookies.get();
      Object.keys(allCookies).forEach(cookieName => {
        Cookies.remove(cookieName);
      });
      toast.error('Unauthorized Access!');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

export const commonRequest = async (method, url, body = {}, customHeaders = {}, responseType = 'json') => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data: body,
      headers: { ...customHeaders },
      responseType,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};