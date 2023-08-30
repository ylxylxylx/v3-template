/*
 * @Author: ylx
 * @Description:
 * @Date: 2023-07-12 09:48:53
 * @LastEditors: ylx
 * @LastEditTime: 2023-07-28 14:28:06
 * @FilePath: \zsTaskFlowManagementSystem\src\main.ts
 */
import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
// import {store} from '@/pinia/index';
import {createPinia} from 'pinia';
import ElementPlus from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import 'element-plus/dist/index.css';
import './assets/css/global.css';
import './assets/icons/iconfont/iconfont.css';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import BaseComponents from './components/baseComponents';

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(router).use(createPinia()).use(ElementPlus, {locale: zhCn}).mount('#app');
BaseComponents(app);
