<!--
 * @Author: ylx
 * @Description: 封装的表格组件
 * @Date: 2023-07-12 13:25:04
 * @LastEditors: ylx
 * @LastEditTime: 2023-07-25 14:55:46
 * @FilePath: \zsTaskFlowManagementSystem\src\components\baseComponents\YTable.vue
-->
<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {ColumnType} from '@/types/index';

const props = defineProps({
  column: {
    // 表格列标题
    type: Array as () => ColumnType[],
    required: true,
  },
  paginationTotal: {
    // 数据总条数
    type: Number,
    required: true,
  },
  tableData: {
    // 当前页的表格数据
    type: Array as any,
    required: true,
  },
});

onMounted(() => {
  console.log(props.column, props.tableData, '--------1111');
});

const emit = defineEmits(['addData', 'currentChange']);

// 当前是第几页
const currentPage = ref(1);

const add = () => {
  emit('addData');
};

// 上一页/下一页/点击页码
const currentChange = () => {
  emit('currentChange', currentPage.value);
};
</script>
<template>
  <div class="tableBox">
    <div class="tableContainer">
      <el-row class="tableTitle">
        <el-col v-for="item in props.column" :key="item" :span="Math.floor(20 / props.column.length)">{{ item.label }}</el-col>
        <el-col :span="4">操作</el-col>
      </el-row>
      <div class="listBox">
        <el-row v-for="(item, index) in props.tableData" :key="index" class="list">
          <el-col v-for="val in props.column" :key="val" :span="Math.floor(20 / props.column.length)">
            {{ item[val.prop] }}
          </el-col>
          <el-col :span="4" class="operation">
            <slot :data="item"></slot>
          </el-col>
        </el-row>
      </div>
      <el-row class="add">
        <div class="addBox" @click="add">
          <span class="addText">添加</span>
          <div class="addIcon" />
        </div>
      </el-row>
    </div>
    <div class="pagination">
      <el-pagination v-model:current-page="currentPage" small background layout="prev, pager, next" :total="props.paginationTotal" class="mt-4" @prev-click="currentChange" @next-click="currentChange" @current-change="currentChange" />
    </div>
  </div>
</template>
<style lang="less" scoped>
.tableBox {
  width: 100%;
  height: 100%;
  background: url('@/assets/img/列表背景.png') no-repeat;
  background-size: 100% 100%;
  padding: 50px 20px 20px 20px;

  .tableContainer {
    width: 100%;
    height: 90%;

    :deep(.el-col) {
      text-align: center;
    }

    .tableTitle {
      height: 5%;
      padding: 5px 0;
    }

    .listBox {
      height: 90%;
      overflow-y: auto;

      .list {
        background: url('@/assets/img/列表.png') no-repeat;
        background-size: 100% 100%;
        padding: 10px 0;
        margin-top: 15px;

        .operation {
          display: flex;
          justify-content: space-evenly;

          :deep(.el-icon) {
            cursor: pointer;
          }
        }
      }
    }

    .add {
      height: 5%;
      background: url('@/assets/img/添加背景.png') no-repeat;
      display: flex;
      justify-content: center;
      align-items: center;

      .addBox {
        display: flex;
        cursor: pointer;

        .addText {
          font-size: 14px;
        }

        .addIcon {
          background: url('@/assets/img/添加icon.png') no-repeat;
          background-size: 100% 100%;
          width: 20px;
          height: 20px;
          margin-left: 10px;
        }
      }
    }
  }

  .pagination {
    width: 100%;
    height: 8%;
    margin-top: 1%;
    display: flex;
    align-items: center;
    :deep(.el-pagination) {
      --el-pagination-button-bg-color: #284b61;
      --el-pagination-button-color: #8ac4ea;

      .el-pager li.is-active {
        color: #000;
        background-color: #18a9d6;
      }

      .btn-prev:disabled {
        color: #86c6ec;
        background-color: #274b63;
      }

      .btn-next:disabled {
        color: #86c6ec;
        background-color: #274b63;
      }
    }
  }
}
</style>
