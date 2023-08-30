/*
 * @Author: ylx
 * @Description:
 * @Date: 2023-07-12 14:52:18
 * @LastEditors: ylx
 * @LastEditTime: 2023-08-08 13:12:03
 * @FilePath: \zsTaskFlowManagementSystem\src\utils\publicFun.ts
 */

/**
 * @description: 获取当前日期和时间
 * @return {*}
 */
export const formatDate = () => {
  const date = new Date();

  const YY = date.getFullYear();
  const MM = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
  const DD = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  const hh = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  const mm = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  const ss = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  const weekDay = '星期' + '日一二三四五六'.charAt(date.getDay());
  return {
    time: hh + ':' + mm + ':' + ss,
    date: YY + '年' + MM + '月' + DD + '日',
    week: weekDay,
  };
};

/**
 * @description: 深拷贝
 * @param {*} T
 * @return {*}
 */
export const deepClone = <T>(data: T): T => {
  return JSON.parse(JSON.stringify(data));
};

