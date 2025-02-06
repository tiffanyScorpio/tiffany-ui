/*
 * @Description: eslint配置
 * @Author: liuxiaodan
 * @FilePath: \eslint.config.js
 * @Date: 2025-01-17 16:49:47
 */
import globals from "globals";// 导入了 `globals`全局变量的库模块，该模块提供了一组预定义的全局变量（如 window、document 等），这些变量通常在不同的环境（如浏览器、Node.js）中可用。在 ESLint 配置中，你可以使用这个模块来指定代码所运行的环境，从而定义全局变量。
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";// 导入 `typescript-eslint` 插件（ `typescript-eslint/parser` 和 `typescript-eslint/eslint-plugin`）。提供了对 TypeScript 的支持，包括 TS 的解析器和推荐的规则集，用于在 TypeScript 文件中进行 lint 检查。

import eslintPluginVue from "eslint-plugin-vue";// 导入 `eslint-plugin-vue` 插件，提供了 Vue.js 特有 ESLint 规则。确保 Vue 文件（`.vue` 文件）中的代码符合 Vue.js 的最佳实践和代码风格指南
import vueParser from "vue-eslint-parser";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ files: ["**/*.{js,mjs,cjs,ts,vue}"] },
	{
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
			parserOptions: {
				/** typescript项目需要用到这个 */
				parser: tseslint.parser,
			},
		},
	},
	// @eslint/js 扩展插件
	pluginJs.configs.recommended,
	// typescript-eslint 扩展插件
	...tseslint.configs.recommended,
	/** vue推荐配置 */
	...eslintPluginVue.configs["flat/essential"],
	/** prettier 配置 */
	eslintPluginPrettierRecommended,
	{
		// 忽略文件
		ignores: [
			"**/*.sh",
			"**/node_modules",
			"**/lib",
			"**/*.md",
			"**/*.scss",
			"**/*.woff",
			"**/*.ttf",
			"**/.vscode",
			"**/.idea",
			"**/dist",
			"**/mock",
			"**/public",
			"**/bin",
			"**/build",
			"**/config",
			"**/index.html",
		],
	},
	//javascript 规则
	{
		files: ["**/*.{js,mjs,cjs,vue,ts}"],
		rules: {
			"no-console": "off",
			"no-debugger": "error",
			"eol-last": "error",
			"no-trailing-spaces": "error",
			"comma-style": ["error", "last"],
			"comma-dangle": ["error", "always-multiline"],
			quotes: ["error", "single", { avoidEscape: true, allowTemplateLiterals: true }],
			camelcase: 0,
			semi: ["error", "never"],
			// indent: ['error', 4, { SwitchCase: 1 }],
			"object-curly-spacing": ["error", "always"],
			"arrow-parens": ["error", "as-needed"],
			"quote-props": ["error", "as-needed"],
			"prefer-template": "error",
		},
	},
	// typescript 规则
	{
		files: ["**/*.ts"],
		rules: {
			"@typescript-eslint/no-explicit-any": "off", // any
			"@typescript-eslint/explicit-module-boundary-types": "off", // setup()
			"@typescript-eslint/ban-types": "off",
			"@typescript-eslint/ban-ts-comment": "off",
			"@typescript-eslint/no-empty-function": "off",
			"@typescript-eslint/no-non-null-assertion": "off",
			"@typescript-eslint/member-delimiter-style": [
				"error",
				{
					multiline: {
						delimiter: "none",
						requireLast: false,
					},
					singleline: {
						delimiter: "semi",
						requireLast: false,
					},
				},
			],
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					argsIgnorePattern: "^_",
					varsIgnorePattern: "^_",
				},
			],
			"no-unused-vars": [
				"error",
				{
					argsIgnorePattern: "^_",
					varsIgnorePattern: "^_",
				},
			],
		},
	},
	// vue 规则
	{
		files: ["**/*.vue"],
		languageOptions: {
			parser: vueParser,
			globals: { ...globals.browser, ...globals.node },
			parserOptions: {
				ecmaVersion: "latest",
				/** 允许在.vue 文件中使用 JSX */
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		rules: {
			"vue/no-v-html": "off",
			"vue/singleline-html-element-content-newline": "off",
			"vue/html-indent": ["error", 4],
			"vue/require-default-prop": "off",
			"vue/require-explicit-emits": "off",
			"vue/multi-word-component-names": "off",
			"vue/one-component-per-file": "off",
			"vue/max-attributes-per-line": [
				"error",
				{
					singleline: 5,
					multiline: 1,
				},
			],
			"vue/html-closing-bracket-spacing": "error",
			"vue/no-mutating-props": "off",
			"vue/v-on-event-hyphenation": "off",
			"vue/html-self-closing": [
				"error",
				{
					html: {
						void: "always",
						normal: "never",
						component: "never",
					},
					svg: "always",
					math: "always",
				},
			],
		},
	},
	{
		rules: {
			"prettier/prettier": [
				"error",
				{},
				{
					// 启动prettier/prettier规则
					usePrettierrc: true,
				},
			],
		},
	},
];
