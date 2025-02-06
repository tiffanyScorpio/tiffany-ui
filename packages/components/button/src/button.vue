<!--
 * @Description el-button 二次封装
 * @Author SAILUNTIRE\xiaodan.liu
 * @FilePath: \packages\components\button\src\button.vue
 * @Date 2024-03-14 14:07:43
-->
<template>
    <el-button @click="(e: MouseEvent) => useThrottle ? handleClickThrottle(e) : handleClick(e)" v-bind="props"
        :formDialogRef="formDialogRef" class="base-button base-button-base" :class="{
            [`base-button--${type}`]: type,
            [`base-button-${size}`]: size,
            'is-plain': plain,
            'is-round': round,
            'is-circle': circle,
            'is-disabled': disabled,
            'is-loading': loading
        }">
        <span v-if="$slots && $slots.default" v-tooltip-auto-show>
            <el-tooltip class="box-item" :content="btnText" effect="dark" placement="top">
                <slot></slot>
            </el-tooltip>
        </span>
    </el-button>
</template>

<script setup lang="ts" name="base-button">
import { useSlots, onMounted, ref, computed } from 'vue';
import type { VNode } from 'vue';
import { ElButton, ElTooltip } from 'element-plus';
import { type ButtonInstance, buttonEmits, buttonProps } from './type'
import { throttle } from 'lodash-es'
import { tooltipAutoShow } from "@cyriex-ui/directives"
import { useThrottle } from '@vueuse/core';
// const slots = defineSlots();
const slots = useSlots();
const props = defineProps(buttonProps)
const emits = defineEmits(buttonEmits)
const _ref = ref<HTMLButtonElement>();
const defaultSlot = slots?.default ? [...(slots?.default as () => Array<VNode>)()] : [];
defineOptions({
    name: "BaseButton",
    directives: {
        tooltipAutoShow
    }
});

const size = computed(() => props.size ?? "");
const type = computed(() => props.type ?? "");
const disabled = computed(
    () => props.disabled || false
);
const btnText: any = defaultSlot
    .map((item) => {
        return item?.children;
    })
    .join(' ');

const handleClick = (evt: MouseEvent) => {
    if (props.disabled || props.loading) {
        evt.stopPropagation()
        return
    }
    emits('click', evt)
}
const handleClickThrottle = throttle(handleClick, props.throttleDuration, { trailing: false })
defineExpose<ButtonInstance>({
    ref: _ref,
    disabled,
    size,
    type,
});
</script>
<style lang="scss" coped>
@use "./button"
</style>
