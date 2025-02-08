/*
 * @Description:
 * @Author: liuxiaodan
 * @FilePath: \packages\components\text\index.ts
 * @Date: 2025-02-08 11:24:04
 */
import Text from "./src/text.vue";
import { withInstall } from "@tiffany-ui/utils";

export const BaseText = withInstall(Text);

export default [BaseText] as Plugin[];
