<template>
  <div>
    <el-dialog v-bind="$attrs" v-model="dialogVisible">
      <slot></slot>
      <template #footer>
        <slot name="footer"></slot>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
let props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});

let dialogVisible = ref<boolean>(props.visible);
console.log("dialogVisible", dialogVisible);

watch(
  () => props.visible,
  () => {
    dialogVisible.value = props.visible;
  }
);

const emits = defineEmits(["update:visible"]);

watch(dialogVisible, (val) => {
  emits("update:visible", val);
});
</script>

<style lang="scss" scoped></style>
