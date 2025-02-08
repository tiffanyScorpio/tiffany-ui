/*
 * @Description:
 * @Author: liuxiaodan
 * @FilePath: \packages\docs\.vitepress\config.ts
 * @Date: 2025-01-19 11:13:05
 */
import { defineConfig } from "vitepress";
import { containerPreview, componentPreview } from "@vitepress-demo-preview/plugin";
// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Tiffany UI",
	description: "tiffany 私有组件库",
	base: "/tiffany-ui/", // 是github上项目的名字，用于github加载样式文件
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "Home", link: "/" },
			{ text: "文档", link: "/get-started" },
			{ text: "Examples", link: "/markdown-examples" },
		],
		search: {
			provider: "local",
		},
		sidebar: [
			{
				text: "指南",
				collapsed: false,
				items: [{ text: "快速开始", link: "/get-started" }],
			},
			{
				text: "基础组件",
				collapsed: false,
				items: [{ text: "Button 按钮", link: "components/button" }],
			},
			{
				text: "反馈组件",
				collapsed: false,
				items: [],
			},
			{
				text: "表单组件",
				collapsed: false,
				items: [],
			},
			{
				text: "Examples",
				items: [
					{ text: "Markdown Examples", link: "/markdown-examples" },
					{ text: "Runtime API Examples", link: "/api-examples" },
				],
			},
		],

		socialLinks: [{ icon: "github", link: "https://github.com/tiffanyScorpio/tiffany-ui" }],
	},
	markdown: {
		config(md) {
			md.use(containerPreview);
			md.use(componentPreview);
		},
	},
});
