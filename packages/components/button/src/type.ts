/*
 * @Description:button 类型
 * @Author: liuxiaodan
 * @FilePath: \packages\components\button\src\type.ts
 * @Date: 2025-01-16 22:06:30
 */
import { type Component, type ComputedRef, type Ref } from "vue";
import type { ButtonProps as ElButtonProps } from "element-plus";
import { useSizeProp } from "@tiffany-ui/hooks";
import { iconPropType } from "@tiffany-ui/utils";

export const ButtonTypes = ["default", "primary", "success", "warning", "info", "danger", "text", ""] as const;
export const SizeType = ["default", "small", "mini", ""];
export const ButtonNativeTypes = ["button", "submit", "reset"] as const;

export const buttonProps = {
	tag: {
		// type: String | Component,
		type: String,
		default: "button",
	},
	nativeType: {
		type: String,
		values: ButtonNativeTypes,
		default: "button",
	},
	/** 大小 */
	size: useSizeProp,
	/** 类型 */
	type: {
		type: String,
		values: ButtonTypes,
		default: "",
	},
	/** 是否显示 文字按钮  */
	text: Boolean,
	/** 是否显示 朴素按钮  */
	plain: Boolean,
	/** 是否显示 圆角按钮  */
	round: Boolean,
	/** 是否显示 圆形按钮 */
	circle: Boolean,
	icon: {
		type: iconPropType,
	},
	/** 是否为加载状态 */
	loading: Boolean,
	/** 是否禁用 */
	disabled: {
		type: Boolean,
		default: false,
	},
	/** link */
	link: Boolean,
	autofocus: {
		type: Boolean,
		default: false,
	},
	loadingIcon: String,
	useThrottle: Boolean,
	throttleDuration: Number,
	formDialogRef: Boolean,
};
export const buttonEmits = {
	click: (evt: MouseEvent) => evt instanceof MouseEvent,
};
export type ButtonProps = ExtractPropTypes<Partial<ElButtonProps & typeof buttonProps>>;
export type ButtonType = ButtonProps["type"];
export type ButtonEmits = typeof buttonEmits;

export interface ButtonInstance {
	ref: Ref<HTMLButtonElement | void>;
	disabled: ComputedRef<boolean>;
	size: ComputedRef<string>;
	type: ComputedRef<string>;
}
