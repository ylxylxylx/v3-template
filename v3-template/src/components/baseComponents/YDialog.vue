<!--
 * @Author: ylx
 * @Description: 二次封装的弹窗组件
 * @Date: 2023-07-12 13:25:04
 * @LastEditors: ylx
 * @LastEditTime: 2023-08-09 11:26:28
 * @FilePath: \zsTaskFlowManagementSystem\src\components\baseComponents\YDialog.vue
-->
<script setup lang="ts">
import {ref, watch} from 'vue';

const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
    default: false,
  },
  title: {
    type: String,
    required: true,
  },
  width: {
    type: [String, Number],
    required: false,
    default: '30%',
  },
  isShowFooter: {
    type: Boolean,
    required: false,
    default: true,
  },
  okBtnText: {
    type: String,
    required: false,
    default: '确定',
  },
  cancleBtnText: {
    type: String,
    required: false,
    default: '取消',
  },
  addOrEditType: {
    type: Number, // 1- 新增 2- 编辑 3- 其它
    required: true,
  },
  formData: Object,
  formConfig: {
    type: Array as any,
    required: false,
  },
});

const emit = defineEmits(['handleOk', 'handleCancel', 'close']);

watch(
  () => props.visible,
  newData => {
    if (newData && props.formData) {
      form.value = JSON.parse(JSON.stringify(props.formData));
    }
  }
);

const form = ref<any>({});

const handleOk = () => {
  if (props.formConfig.length) {
    emit('handleOk', form.value);
  }
};

const handleCancel = () => {
  emit('handleCancel', false);
};

const handleClose = (done: () => void) => {
  emit('close', false);
  done();
};
</script>
<template>
  <div class="YDialog">
    <el-dialog v-model="props.visible" :title="props.addOrEditType == 1 ? '新增' + props.title : props.addOrEditType == 2 ? '编辑' + props.title : props.title" :width="props.width" :close-on-press-escape="false" destroy-on-close draggable :close-on-click-modal="false" :before-close="handleClose">
      <div class="mainBox">
        <!-- <slot></slot> -->
        <el-form v-if="props.addOrEditType !== 3" :model="form" label-width="120px">
          <el-form-item v-for="item in formConfig" :key="item" :label="item.label">
            <el-input v-if="item.type === 'text'" v-model="form[item.prop]" />
            <el-input v-if="item.type === 'number'" v-model.number="form[item.prop]" />
            <el-input v-if="item.type === 'textarea'" v-model="form[item.prop]" :autosize="{minRows: 2, maxRows: 4}" type="textarea" />
            <el-select v-if="item.type === 'select'" v-model="form[item.prop]">
              <el-option v-for="val in item.options" :key="val" :label="val.label" :value="val.value" />
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span v-if="props.isShowFooter" class="dialog-footer">
          <div @click="handleOk">{{ props.okBtnText }}</div>
          <div @click="handleCancel">{{ props.cancleBtnText }}</div>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<style lang="less" scoped>
.YDialog {
  :deep(.el-dialog) {
    background: url('@/assets/img/弹窗背景.png') no-repeat;
    background-color: rgba(255, 0, 0, 0);
    background-size: 100% 100%;
    border-radius: 0 !important;
    box-shadow: none !important;

    .el-dialog__header {
      background: url('@/assets/img/弹窗头部.png') no-repeat;
      background-size: 100% 100%;
      margin-right: 0;

      .el-dialog__title {
        color: #fff;
        font-weight: 800;
      }

      .el-dialog__headerbtn .el-dialog__close {
        color: #44d5ff;
        font-size: 24px;
      }
    }
    .el-dialog__body {
      border-top: 0 !important;
      background-color: rgba(255, 0, 0, 0);
      padding: 30px;
      color: #44d5ff;
      box-sizing: border-box;
      position: relative;

      .mainBox {
        max-height: 400px;
        width: 100%;

        .el-form-item__label {
          justify-content: center;
          align-items: center;
          color: #fff;
        }

        .el-input,
        .el-textarea {
          --el-input-text-color: #fff;
          --el-input-border-color: #446b8c;
          --el-input-bg-color: #1a3347;
          --el-input-hover-border-color: #446b8c;
          --el-input-focus-border-color: #446b8c;
        }

        .el-select {
          width: 100%;
          --el-select-border-color-hover: #446b8c;
        }
      }
    }
    .el-dialog__footer {
      //   background-color: rgba(255, 0, 0, 0);
      background: url('@/assets/img/弹窗底部.png') no-repeat;
      background-size: 100% 100%;
      padding: 15px;

      span {
        display: flex;
        justify-content: space-between;
        width: 250px;
        margin: 0 auto;
        div {
          width: 100px;
          height: 30px;
          background: url('@/assets/img/按钮.png') no-repeat;
          background-size: 100% 100%;
          text-align: center;
          line-height: 30px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
