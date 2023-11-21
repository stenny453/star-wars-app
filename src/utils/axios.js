import axios from 'axios';

const axiosUtil = axios.create({
  baseURL: process.env.VUE_APP_API,
});

axiosUtil.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'There is an error!'),
);

export default axiosUtil;
