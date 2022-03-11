<template>
  <div>
    <el-table :data="tableData" v-bind="$attrs">
      <template v-for="item in tableOptions" :key="item.prop">
        <el-table-column
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
        >
          <template #default="scope" v-if="item.slot">
            <slot v-if="item.slot" :scope="scope" :name="item.slot"></slot>
          </template>
        </el-table-column>
      </template>
      <!-- 操作栏列 -->
      <el-table-column
        v-if="actionOption"
        :prop="actionOption.prop"
        :label="actionOption.label"
        :width="actionOption.width"
      >
        <template #default="scope">
          <slot :scope="scope" name="action"></slot>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from "vue";
import { myTablelColmmnTypes } from "./myTableTypes";

let props = defineProps({
  columnOptions: {
    type: Array as PropType<myTablelColmmnTypes[]>,
    required: true,
  },
  tableData: {
    type: Array,
    required: true,
  },
});

// 将操作栏过滤出来，单独渲染
let tableOptions = computed(() => {
  return props.columnOptions.filter((item) => {
    return item.prop !== "action";
  });
});

let actionOption = computed(() => {
  return props.columnOptions.find((item) => {
    return item.prop === "action";
  });
});
</script>

<style lang="scss" scoped></style>
