/*
 * @Author: ylx
 * @Description:
 * @Date: 2023-07-21 15:08:26
 * @LastEditors: ylx
 * @LastEditTime: 2023-08-09 10:58:54
 * @FilePath: \zsTaskFlowManagementSystem\src\types\resource.ts
 */
// 资源参数
export interface ResourceParamType {
  name: string; // 名称
  remark: string; // 备注
  count: number; // 资源数量
  siteId: number; // 资源所在场地id
  id: string; // id
}

// 装备参数
export interface EquipmentParamType {
  name: string; // 装备名称
  serial: string; // 装备代号
  loadingCapacity: string; // 装载能力
  count: number; // 数量
  description: string; // 装备描述
  id: string; // id
}

// 人员参数
export interface UserInfoParamType {
  name: string; // 姓名
  jobNumber: string; // 工号
  job: string; // 岗位
  gender: string; // 性别
  count: number; // 数量
  id: string; // id
}

// 场地参数
export interface SiteParamType {
  name: string; // 场地名称
  serial: string; // 场地编号
  count: number; //数量
  location: string; // 场地位置
  description: string; // 场地描述
  id: string; // id
}

// 资源树 类型
export interface ResourceTreeType {
  name: string;
  id: string;
  children: ResourceParamType[] | EquipmentParamType[] | UserInfoParamType[] | SiteParamType[]
}
