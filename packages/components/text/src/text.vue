<!--
 * @Description: 
 * @Author: liuxiaodan
 * @FilePath: \packages\components\text\src\text.vue
 * @Date: 2025-02-08 11:24:18
-->
<template>
    <el-text type="primary">
        <slot></slot>
    </el-text>
</template>
<script setup lang="ts" name="base-text">
import { useSlots, onMounted, ref, computed } from 'vue';
import { ElText } from 'element-plus';
</script>