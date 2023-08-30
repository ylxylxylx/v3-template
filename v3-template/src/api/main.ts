import http from '@/utils/http';

/**
 * @description:获取xxx信息
 * @param {Object} params
 * @return {*}
 */
export const getFn = (id: string | number) => {
  return http.get(`/api/xx/${id}`);
};
