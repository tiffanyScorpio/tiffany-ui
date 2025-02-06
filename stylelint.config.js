/*
 * @Description:stylelint配置
 * @Author: liuxiaodan
 * @FilePath: \stylelint.config.js
 * @Date: 2025-01-13 13:43:13
 */
/** @type {import('stylelint').Config} */
export default {
	extends: [
		"stylelint-config-standard",
		"stylelint-config-html/vue", // 配置 vue 中 template 样式格式化
		"stylelint-config-recommended-scss",// 配置stylelint scss插件
		"stylelint-config-recommended-vue", // 配置 vue 中 scss 样式格式化
		"stylelint-config-recess-order", // 配置stylelint css属性书写顺序插件,
		"stylelint-config-tailwindcss", // 使用了tailwindcss
		// "stylelint-config-prettier", // 从Stylelint v15开始，所有与样式相关的规则都已弃用，这个插件就不再必要了。
	],
	overrides: [
		{
			files: ["**/*.(scss|css)"],
			customSyntax: "postcss-scss",
		},
		{
			// 扫描 .vue/html 文件中的 <style> 标签内的样式
			files: ["**/*.(html|vue)"],
			customSyntax: "postcss-html",
		},
	],
	ignoreFiles: ["**/*.js", "**/*.jsx", "**/*.tsx", "**/*.ts", "**/*.json", "**/*.md", "**/*.yaml", "node_modules/", "dist/"],
	/**
	 * null  => 关闭该规则
	 * always => 必须
	 */
	rules: {
		"at-rule-no-unknown":null,
		"value-keyword-case": null, // 在 css 中使用 v-bind，不报错
		"no-descending-specificity": null, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
		"function-url-quotes": "always", // 要求或禁止 URL 的引号 "always(必须加上引号)"|"never(没有引号)"
		'scss/at-rule-no-unknown': [
			true,
			{
			  ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
			},
		  ],
		  "selector-pseudo-class-no-unknown": [
			// 不允许未知的选择器
			true,
			{
				ignorePseudoClasses: ["global", "v-deep", "deep"], // 忽略属性，修改element默认样式的时候能使用到
			},
		],

	},
};
