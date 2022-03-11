<template>
  <my-table :tableData="data" :columnOptions="columnOptions" border>
    <template #action="{ scope }">
      <el-button size="small" type="primary" @click="handleDetail(scope)"
        >详情</el-button
      >
    </template>

    <template #tag="{ scope }">
      <el-tag>{{ scope.row.slot }}</el-tag>
    </template>
  </my-table>
</template>

<script lang="ts" setup>
import {} from "vue";
import { myTablelColmmnTypes } from "../../components/table/src/myTableTypes";

let columnOptions: myTablelColmmnTypes[] = [
  { prop: "name", label: "用户名" },
  { prop: "gender", label: "性别" },
  { prop: "age", label: "年龄" },
  { prop: "tag", label: "标签", slot: "tag", align: "center" },
  { prop: "action", label: "操作栏" },
];
let data = [
  { name: "frank", gender: "男", age: 26, slot: "tag1" },
  { name: "frank1", gender: "男", age: 27, slot: "tag2" },
  { name: "frank2", gender: "男", age: 27, slot: "tag3" },
];

const handleDetail = (scope: any) => {
  console.log(scope, "scope");
};
</script>

<style lang="scss" scoped></style>
