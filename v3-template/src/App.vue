<!--
 * @Author: ylx
 * @Description:
 * @Date: 2023-07-12 09:48:53
 * @LastEditors: ylx
 * @LastEditTime: 2023-07-27 17:54:45
 * @FilePath: \zsTaskFlowManagementSystem\src\App.vue
-->
<script setup lang="ts">
import Header from '@/components/Header.vue';
</script>

<template>
  <div class="contentBox">
    <Header />
    <router-view />
  </div>
</template>

<style lang="less" scoped>
.contentBox {
  width: 100vw;
  height: 100vh;
  background: url('@/assets/img/背景.png') no-repeat;
  background-size: 100% 100%;
}
</style>
