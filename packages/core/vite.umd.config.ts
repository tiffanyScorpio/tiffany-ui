/*
 * @Description: 
 * @Author: liuxiaodan
 * @FilePath: \packages\core\vite.umd.config.ts
 * @Date: 2025-01-19 14:26:08
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue"
import { readFile } from "fs";
import { resolve } from "path";


export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    outDir: "dist/umd",
    lib: {
      entry: resolve(__dirname, "./index.ts"),
      name: "CyriexUI",
      fileName: "index",
      formats: ["umd"],
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
        },
        // 设置静态资源文件的命名模式
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === "style.css") {
            return "index.css";
          }
          return chunkInfo.name as string;
        },
      },
    },
  },
});
