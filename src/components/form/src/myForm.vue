<template>
  <el-form
    ref="form"
    v-if="model"
    :model="model"
    v-bind="$attrs"
    :rules="rules"
    :validate-on-rule-change="false"
  >
    <template v-for="(item, index) in options" :key="index">
      <!-- 没有子元素 -->
      <el-form-item
        v-if="!item.children || item.children.length === 0"
        :label="item.label"
        :prop="item.prop"
        :rules="item.rules"
      >
        <component
          :is="`el-${item.type}`"
          v-bind="item.attrs"
          v-model="model[item.prop!]"
        ></component>
      </el-form-item>
      <!-- 有子元素 -->
      <el-form-item
        v-if="item.children && item.children.length > 0"
        :label="item.label"
        :prop="item.prop"
        :rules="item.rules"
      >
        <component
          :is="`el-${item.type}`"
          v-bind="item.attrs"
          v-model="model[item.prop!]"
        >
          <component
            v-for="(child, index) in item.children"
            :key="index"
            :is="`el-${child.type}`"
            :label="child.label"
            :value="child.value"
            v-bind="child.attrs"
          ></component>
        </component>
      </el-form-item>
    </template>
    <el-form-item>
      <slot name="action" :model="model" :form="form"></slot>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { PropType, ref, onMounted, watch } from "vue";
import { FormItemOption } from "./myFormTypes/types";
import cloneDeep from "lodash/cloneDeep";

// 定义props
let props = defineProps({
  options: {
    type: Array as PropType<FormItemOption[]>,
    required: true,
  },
});
console.log(props.options);

let model = ref<any>(null);
let rules = ref<any>(null);
let m: any = {};
let r: any = {};
function initModelAndRules() {
  if (props.options && props.options!.length) {
    props.options.forEach((item) => {
      m[item.prop!] = item.value;
      r[item.prop!] = item.rules;
    });
    console.log(rules.value);
    model.value = cloneDeep(m);
    rules.value = cloneDeep(r);
  }
}

let form = ref();

onMounted(initModelAndRules);

// 监听options，动态渲染表单
watch(
  () => props.options,
  () => {
    initModelAndRules();
  },
  { deep: true }
);

function resetFormFields() {
  form.value.resetFields();
  console.log("resetFormFields");
}

// 向父组件暴露属性
defineExpose({
  resetFormFields,
});
</script>

<style lang="scss" scoped></style>
