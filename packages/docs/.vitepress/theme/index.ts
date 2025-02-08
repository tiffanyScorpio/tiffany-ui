import DefaultTheme from "vitepress/theme";
import { type App } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import TiffanyUI from "tiffany-ui";
import { ElementPlusContainer } from "@vitepress-demo-preview/component";

import "@vitepress-demo-preview/component/dist/style.css";
import "tiffany-ui/dist/index.css";

export default {
	...DefaultTheme,
	enhanceApp({ app }: { app: App }) {
		app.component("demo-preview", ElementPlusContainer);
		app.use(ElementPlus, {
			locale: { ...zhCn },
		});
		// app.use(TiffanyUI);
	},
};
