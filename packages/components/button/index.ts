/*
 * @Description:
 * @Author: liuxiaodan
 * @FilePath: \packages\components\Button\index.ts
 * @Date: 2025-01-16 22:05:08
 */
import Button from "./src/button.vue";
import {withInstall} from "@tiffany-ui/utils"

export const BaseButton = withInstall(Button);

export default [BaseButton] as Plugin[];
