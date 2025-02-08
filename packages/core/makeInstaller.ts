/*
 * @Description:
 * @Author: liuxiaodan
 * @FilePath: \packages\core\makeInstaller.ts
 * @Date: 2025-01-19 10:23:37
 */
import type { App, Plugin } from "vue";
// import { INSTALLED_KEY } from "@tiffany-ui/constants";
import { each, get, set } from "lodash-es";
// import {
//   provideGlobalConfig,
//   type ConfigProviderProps,
// } from "@tiffany-ui/components";

// export default function makeInstaller(components: Plugin[]) {
//   const install = (app: App, options?: ConfigProviderProps) => {
//     if (get(app, INSTALLED_KEY)) return;
//     set(app, INSTALLED_KEY, true);

//     each(components, (c) => {
//       app.use(c);
//     });

//     if (options) provideGlobalConfig(options, app, true);
//   };

//   return install;
// }

export default function makeInstaller(components: Plugin[]) {
	const install = (app: App) =>
		each(components, (c) => {
			app.use(c);
		});
	return install;
}
