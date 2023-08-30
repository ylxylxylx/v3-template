/*
 * @Author: ylx
 * @Description:
 * @Date: 2023-07-12 13:24:41
 * @LastEditors: ylx
 * @LastEditTime: 2023-07-12 14:17:14
 * @FilePath: \zsTaskFlowManagementSystem\src\components\baseComponents\index.ts
 */
import {App} from 'vue';
import type {Component} from 'vue';
import YDialog from './YDialog.vue';
import YTable from './YTable.vue';

interface ComponentsType {
  [key: string]: Component;
}
const components: ComponentsType = {
  YDialog,
  YTable,
};

const BaseComponents = (app: App<Element>) => {
  Object.keys(components).forEach(key => {
    app.component(`${key}`, components[key]);
  });
};

export default BaseComponents;
