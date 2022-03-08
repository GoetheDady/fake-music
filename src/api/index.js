import Axios from 'axios';

const request = Axios.create({
  baseURL: 'http://localhost:4000/', // api 的 base_url
  timeout: 5000, // request timeout  设置请求超时时间
  responseType: 'json',
  withCredentials: true, // 是否允许带cookie这些
  crossDomain: true,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
});

request.interceptors.response.use(
  (res) => res.data, // 这里直接返回data, 即接口返回的所有数据
  (error) => (error),
);

export default request;
