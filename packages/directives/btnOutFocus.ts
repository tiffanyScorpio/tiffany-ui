/*
 * @Description: 
 * @Author: liuxiaodan
 * @FilePath: \packages\directives\btnFocus.ts
 * @Date: 2025-01-19 19:22:02
 */
import type { App } from 'vue';
// 为了解决按钮点击后无法自动失焦问题，用法
export function elBtnDirective(app: App) {
	const fun = (evt: any) => {
		let target = evt.target;
		if (target.nodeName == 'SPAN') {
			target = evt.target.parentNode;
		}
		target.blur();
	};
	app.directive('elBtn', {
		mounted(el) {
			el.addEventListener('focus', fun);
		},
		unmounted(el) {
			el.removeEventListener('focus', fun);
		},
	});
}
