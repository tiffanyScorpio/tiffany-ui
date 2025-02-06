<!--
 * @Description: 
 * @Author: liuxiaodan
 * @FilePath: \packages\docs\demo\button\Throttle.vue
 * @Date: 2025-02-06 14:37:08
-->
<script setup>
import { ElMessage } from "element-plus";
function handleBtnClick() {
  ElMessage.info("btn click");
}
</script>

<template>
  <p>
    <base-button @click="handleBtnClick"> with throttle</base-button>
    <base-button :use-throttle="false" @click="handleBtnClick"
      >without throttle</base-button
    >
  </p>
</template>
