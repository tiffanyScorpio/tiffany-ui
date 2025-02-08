/*
 * @Description:
 * @Author: liuxiaodan
 * @FilePath: \packages\core\index.ts
 * @Date: 2025-01-19 10:12:35
 */
import makeInstaller from "./makeInstaller";
import components from "./components";
import "@tiffany-ui/theme/index.css";

const installer = makeInstaller(components);

// export * from "@tiffany-ui/components";
export * from "../components";
export default installer;
