<template>
  <myDialog v-model:visible="visible" width="50%">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <el-button class="button" type="text">Operation button</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ "List item " + o }}
      </div>
    </el-card>
    <template #footer>
      <el-button type="primary">取消</el-button>
      <el-button type="primary">提交</el-button>
    </template>
  </myDialog>
  <el-button type="primary" @click="handleOpenDialog">open</el-button>
</template>

<script lang="ts" setup>
import { ref } from "vue";

let visible = ref(false);
const handleOpenDialog = () => {
  visible.value = true;
};
</script>

<style lang="scss" scoped></style>
