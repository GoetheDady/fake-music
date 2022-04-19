import Axios from 'axios';
import { message } from '../utils';

const request = Axios.create({
  baseURL: 'https://netease-cloud-music-api-bay-gamma.vercel.app/', // api 的 base_url
  timeout: 5000, // request timeout  设置请求超时时间
  responseType: 'json',
  withCredentials: true, // 是否允许带cookie这些
  crossDomain: true,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
});

request.interceptors.request.use((config) => {
  const conf = {
    ...config,
  };
  if (conf.method === 'GET') {
    const { data } = config;
    conf.data = JSON.stringify({
      realIP: '34.150.95.106',
      ...data,
    });
  }
  return conf;
});

request.interceptors.response.use(
  (res) => res.data, // 这里直接返回data, 即接口返回的所有数据
  (error) => {
    const { response: { data: { code, msg, message: sysMessage }, data } } = error;
    if (code === 301) {
      message({
        type: 'error',
        msg,
        message: sysMessage,
      });
    }
    return data;
  },
);

export default request;
