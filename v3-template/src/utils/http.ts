/*
 * @Author: ylx
 * @Description:
 * @Date: 2023-07-12 09:48:53
 * @LastEditors: ylx
 * @LastEditTime: 2023-07-12 11:01:40
 * @FilePath: \zsTaskFlowManagementSystem\src\utils\http.ts
 */
import request from './request';

const http = {
  /**
   * methods: 请求
   * @param url 请求地址
   * @param params 请求参数
   */
  get(url: string, params?: object) {
    const config: any = {
      method: 'get',
      url: url,
    };
    if (params) config.params = params;
    return request(config);
  },
  post(url: string, params?: object, headers?: object) {
    const config: any = {
      method: 'post',
      url: url,
    };
    if (params) config.data = params;
    if (headers) config.headers = headers;
    return request(config);
  },
  put(url: string, params?: object, headers?: object) {
    const config: any = {
      method: 'put',
      url: url,
    };
    if (params) config.data = params;
    if (headers) config.headers = headers;
    return request(config);
  },
  delete(url: string, params?: object) {
    const config: any = {
      method: 'delete',
      url: url,
    };
    if (params) config.params = params;
    return request(config);
  },
};
//导出
export default http;
