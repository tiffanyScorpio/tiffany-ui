/*
 * @Description: 
 * @Author: liuxiaodan
 * @FilePath: \packages\core\vite.es.config.ts
 * @Date: 2025-01-19 14:26:08
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue"
import dts from "vite-plugin-dts";

import { readdirSync, readdir } from "fs";
import { resolve } from "path";
import { defer, delay, filter, map, includes } from "lodash-es";

function getDirectoriesSync(basePath: string) {
  const entries = readdirSync(basePath, { withFileTypes: true });

  return map(
    filter(entries, (entry) => entry.isDirectory()),
    (entry) => entry.name
  );
}


export default defineConfig({
  plugins: [
    vue(),dts({
      tsconfigPath: "../../tsconfig.build.json",
      outDir: "dist/types",
    })
  ],
  build: {
    outDir: "dist/es",
    lib: {
      entry: resolve(__dirname, "./index.ts"),
      name: "CyriexUI",
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["vue","element-plus","@element-plus/icons-vue", "async-validator","@popperjs/core"],
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
        // es打包分包设置
        manualChunks(id) {
          // node_modules:第三方引用的库命名为vendor
          if (includes(id, "node_modules")) return "vendor";

          if (includes(id, "/packages/hooks")) return "hooks";

          if (
            includes(id, "/packages/utils") ||
            includes(id, "plugin-vue:export-helper")
          )
            return "utils";

          // 自定义组件的分包
          // 遍历自定义组件的名字，如果和/packages/components/中的文件夹名字相匹配，会生成同名文件
          for (const item of getDirectoriesSync("../components")) {
            if (includes(id, `/packages/components/${item}`)) return item;
          }
        },
      },
    },
  },
});
