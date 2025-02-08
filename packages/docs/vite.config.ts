/*
 * @Description:
 * @Author: liuxiaodan
 * @FilePath: \packages\docs\vite.config.ts
 * @Date: 2025-02-08 16:45:49
 */
import { defineConfig } from "vite";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"tiffany-ui/": `${path.resolve(__dirname, "../core")}/`,
		},
	},
});
