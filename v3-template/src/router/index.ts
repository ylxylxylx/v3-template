/*
 * @Author: ylx
 * @Description: 路由
 * @Date: 2023-07-12 09:48:53
 * @LastEditors: ylx
 * @LastEditTime: 2023-08-30 10:39:41
 * @FilePath: \zsTaskFlowManagementSystem\src\router\index.ts
 */

import {createRouter, createWebHistory} from 'vue-router';

const routes = [
  {
    path: '/',
    name: '',
    redirect: '/resourceManagement/resource',
  },
  {
    path: '/taskFlowManagement', // 任务流程管理
    name: 'taskFlowManagement',
    component: () => import('@/views/TaskFlowManagement.vue'),
  },
//   {
//     path: '/resourceManagement', // 资源管理
//     name: 'resourceManagement',
//     component: () => import('@/views/resourceManagement/index.vue'),
//     children: [
//       {
//         path: '/resourceManagement/resource', // 资源
//         name: 'resource',
//         component: () => import('@/views/resourceManagement/Resource.vue'),
//       },
//     ],
//   },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
