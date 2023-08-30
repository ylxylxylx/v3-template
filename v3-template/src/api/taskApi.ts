/*
 * @Author: ylx
 * @Description:
 * @Date: 2023-08-07 13:13:54
 * @LastEditors: ylx
 * @LastEditTime: 2023-08-09 11:19:21
 * @FilePath: \zsTaskFlowManagementSystem\src\api\taskApi.ts
 */
import {PagingParamType} from '@/types';
import {TaskParamType} from '@/types/task';
import http from '@/utils/http';

// ? ------------------------- 任务 ---------------------------------

/**
 * @description: 任务列表
 * @param {PagingParamType} params
 * @return {*}
 */
export const getTaskList = (params: PagingParamType) => {
  return http.post(`/api/taskFlow/list`, params);
};

/**
 * @description: 新增任务
 * @param {ResourceParamType} params
 * @return {*}
 */
export const addTask = (params: TaskParamType) => {
  return http.post(`/api/taskFlow`, params);
};

/**
 * @description: 更新任务
 * @param {string} id
 * @param {TaskParamType} params
 * @return {*}
 */
export const updateTask = (id: string, params: TaskParamType) => {
  return http.put(`/api/taskFlow/${id}`, params);
};

/**
 * @description: 删除任务
 * @param {string} id
 * @return {*}
 */
export const deleteTask = (id: string) => {
  return http.delete(`/api/taskFlow/${id}`);
};
