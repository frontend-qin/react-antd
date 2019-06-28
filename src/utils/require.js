import axios from 'axios';
import { getToken } from '@/utils/token';

// 创建 axios 实例
const instance = axios.create({
  baseURL: process.env.REACT_APP_URL,
  timeout: 5000
});

// 请求拦截
instance.interceptors.request.use(
  config => {
    // 将token 配置到 请求头
    // 假设一个token
    const token = true;
    if (token) {
      config.headers['X-Token'] = getToken();
    }
    return config;
  },
  error => {
    console.log(error);
    // 返回错误
    return Promise.reject(error);
  }
);
// 响应拦截
instance.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.code === 200) {
      return res;
    } else {
      console.log('有问题');
      // 判断状态码
    }
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
