/*
 * @Author: ylx
 * @Description:
 * @Date: 2023-07-13 14:17:20
 * @LastEditors: ylx
 * @LastEditTime: 2023-08-07 13:14:05
 * @FilePath: \zsTaskFlowManagementSystem\src\types\index.ts
 */
// 表格列
export interface ColumnType {
  prop: string;
  label: string;
  type?: string;
  options?: {label: string; value: string | number}[];
}

// 分页查询参数
export interface PagingParamType {
  pageNum: number;
  pageSize: number;
}
