<template>
  <my-form ref="form" label-width="100px" :options="options">
    <template #action="scope">
      <el-button type="primary" @click="handleResetFields(scope.form)"
        >重置</el-button
      >
      <el-button type="primary" @click="handleSubmit(scope.form, scope.model)"
        >提交</el-button
      >
    </template>
  </my-form>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { FormItemOption } from "../../components/form/src/myFormTypes/types";
import { ElMessage } from "element-plus";
// json数据
let options: FormItemOption[] = [
  {
    type: "input",
    value: "",
    prop: "name",
    label: "用户名",
    rules: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
    attrs: {
      "label-width": "200px",
      clearable: true,
    },
  },
  {
    type: "input",
    value: "",
    prop: "password",
    label: "密码",
    rules: [
      { required: true, message: "密码不能为空", trigger: "blur" },
      { max: 10, min: 6, message: "密码长度为6-10", trigger: "blur" },
    ],
    attrs: {
      "label-width": "200px",
    },
  },
  {
    type: "select",
    value: "",
    prop: "position",
    label: "职位",
    rules: [{ required: true, message: "职位不能为空", trigger: "change" }],
    attrs: {
      "label-width": "200px",
      style: {
        width: "100%",
      },
    },
    children: [
      {
        type: "option",
        value: "1",
        label: "前端",
      },
      {
        type: "option",
        value: "2",
        label: "后端",
      },
      {
        type: "option",
        value: "3",
        label: "测试",
      },
    ],
  },
  {
    type: "checkbox-group",
    value: [],
    prop: "habit",
    label: "爱好",
    rules: [{ required: true, message: "爱好不能为空", trigger: "change" }],
    children: [
      {
        type: "checkbox",
        value: "1",
        label: "吃饭",
      },
      {
        type: "checkbox",
        value: "2",
        label: "健身",
      },
      {
        type: "checkbox",
        value: "3",
        label: "弹琴",
      },
    ],
  },
  {
    type: "radio-group",
    value: "",
    prop: "gender",
    label: "性别",
    rules: [{ required: true, message: "性别不能为空", trigger: "change" }],
    children: [
      {
        type: "radio",
        value: "1",
        label: "男",
      },
      {
        type: "radio",
        value: "2",
        label: "女",
      },
      {
        type: "radio",
        value: "3",
        label: "保密",
      },
    ],
  },
];

let form = ref();

const handleResetFields = () => {
  console.log(form.value, "handleResetFields");
  form.value.resetFormFields();
};

const handleSubmit = (form: any, model: FormItemOption) => {
  form.validate((valid: boolean) => {
    if (valid) {
      ElMessage.success("提交成功");
      console.log(model);
    } else {
      ElMessage.error("校验失败");
      console.log(model);
    }
  });
};
</script>

<style lang="scss" scoped></style>
