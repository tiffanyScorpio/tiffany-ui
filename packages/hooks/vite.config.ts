/*
 * @Description:
 * @Author: liuxiaodan
 * @FilePath: \packages\hooks\vite.config.ts
 * @Date: 2025-02-06 17:11:25
 */
import { resolve } from "path";
import { defineConfig } from "vite";
import { each, isFunction, last, split, first, includes } from "lodash-es";
import shell from "shelljs";
import dts from "vite-plugin-dts";

const hooksPlugin = ({ rmFiles = [], afterBuild, beforeBuild }: { beforeBuild?: Function; afterBuild?: Function; rmFiles?: string[] }) => {
	return {
		name: "custom-hooks-plugin",
		buildStart() {
			each(rmFiles, (fName) => shell.rm("-rf", fName));
			isFunction(beforeBuild) && beforeBuild();
		},
		buildEnd(err?: Error) {
			!err && isFunction(afterBuild) && afterBuild();
		},
	};
};

export default defineConfig({
	plugins: [
		dts({
			include: ["./**/*.ts"],
			exclude: ["./vite.config.ts"],
		}),
		hooksPlugin({
			rmFiles: ["./dist"],
		}),
	],
	build: {
		minify: false,
		lib: {
			entry: resolve(__dirname, "./index.ts"),
			name: "hooks",
			fileName: "index",
			formats: ["es"],
		},
		rollupOptions: {
			external: ["vue", "lodash-es", "vue3-i18n"],
			output: {
				manualChunks(id) {
					if (includes(id, "/packages/hooks/use")) return first(split(last(split(id, "/")), "."));
				},
			},
		},
	},
});
