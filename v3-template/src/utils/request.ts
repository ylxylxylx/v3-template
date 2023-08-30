/*
 * @Author: ylx
 * @Description:
 * @Date: 2023-07-12 09:48:53
 * @LastEditors: ylx
 * @LastEditTime: 2023-07-21 16:48:00
 * @FilePath: \zsTaskFlowManagementSystem\src\utils\request.ts
 */
import axios, {AxiosInstance, AxiosRequestConfig, AxiosError} from 'axios'; // 引入axios
import {ElMessage} from 'element-plus';

// declare let configUrl: ConfigUrlType;
const {baseURL} = configUrl;
const service: AxiosInstance = axios.create({
  baseURL,
  timeout: 3000,
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    // config.headers = {
    //   'Content-Type': 'application/json',
    //   // 'x-token': userStore.token,
    //   ...config.headers,
    // };
    // switch (config.urlType) {
    //   // 如果项目需拓展多个后端地址,添加case,并在public/config/config.js中添加配置项
    //   case 'api':
    //     config.url = controlURL + config.url;
    //     break;
    //   // 默认后端环境
    //   default:
    //     config.url = baseURL + config.url;
    //     break;
    // }
    return config;
  },
  error => {
    ElMessage.error(error.message);
    return Promise.reject(error);
  }
);

// http response 拦截器
// 3.响应拦截器
service.interceptors.response.use(
  response => {
    //接收到响应数据并成功后的一些共有的处理，关闭loading等
    return response;
  },
  error => {
    /***** 接收到异常响应的处理开始 *****/
    if (error && error.response) {
      // 1.公共错误处理
      // 2.根据响应码具体处理
      console.log(error.response.status, 'error.response.status');

      switch (error.response.status) {
        case 400:
          error.message = error.response.data.msg;
          break;
        case 401:
          error.message = '未授权，请重新登录';
          break;
        case 403:
          error.message = '拒绝访问';
          break;
        case 404:
          error.message = '请求错误,未找到该资源';
          break;
        case 405:
          error.message = '请求方法未允许';
          break;
        case 408:
          error.message = '请求超时';
          break;
        case 500:
          error.message = '服务器端出错';
          break;
        case 501:
          error.message = '网络未实现';
          break;
        case 502:
          error.message = '网络错误';
          break;
        case 503:
          error.message = '服务不可用';
          break;
        case 504:
          error.message = '网络超时';
          break;
        case 505:
          error.message = 'http版本不支持该请求';
          break;
        default:
          error.message = `连接错误${error.response.status}`;
      }
    } else {
      // 超时处理
      if (JSON.stringify(error).includes('timeout')) {
        ElMessage.closeAll();
        ElMessage({
          message: '服务器响应超时，请刷新当前页',
          type: 'error',
        });
      }
      error.message = '连接服务器失败';
    }
    ElMessage.closeAll();
    ElMessage({
      message: error.message,
      type: 'error',
    });
    /***** 处理结束 *****/
    //如果不需要错误处理，以上的处理过程都可省略
    return Promise.resolve(error.response);
  }
);
export default service;
