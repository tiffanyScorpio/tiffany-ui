/*
 * @Description:
 * @Author: liuxiaodan
 * @FilePath: \vitest.config.ts
 * @Date: 2025-01-19 13:13:28
 */
/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vueSetupExtend from "vite-plugin-vue-setup-extend";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		vueJsx(),
		vueSetupExtend(), // setup语法糖增强插件
		AutoImport({
			imports: ["vue"], // 自动导入的依赖库数组
			dts: resolve(__dirname, "./auto-imports.d.ts"), // 自动导入类型定义文件路径
			resolvers: [ElementPlusResolver()],
		}),
		Components({
			resolvers: [ElementPlusResolver()],
		}),
	],
	define: {
		PROD: JSON.stringify(false),
		DEV: JSON.stringify(false),
		TEST: JSON.stringify(true),
	},
	test: {
		globals: true,
		environment: "jsdom",
		// setupFiles:[resolve(__dirname, './vitest.setup.ts')]
	},
});
