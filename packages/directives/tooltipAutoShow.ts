/*
 * @Description: 控制ElTooltip的显示和隐藏
 * @Author: liuxiaodan
 * @FilePath: \packages\directives\tooltipAutoShow.ts
 * @Date: 2025-01-19 19:20:00
 */
import type {
	DirectiveBinding,
	ObjectDirective,
	VNode
  } from 'vue'
import { getStyle } from '@cyriex-ui/utils';
/**
 * show-overflow-tooltip for text
 * 当text没有被折叠时，不显示tooltip
 */
 const tooltipAutoShow:ObjectDirective = {
	created(el: HTMLElement, binding: DirectiveBinding, vnode:VNode) {
		let tooltipNode = vnode.children.find((childrenCmpt) => childrenCmpt.component?.type.name == 'ElTooltip');
		console.log('tooltipAutoShow',tooltipNode)
		if (tooltipNode) {
			el.addEventListener('mouseenter', (e) => {
				tooltipNode.component.props.disabled = true;
				const range = document.createRange();
				range.setStart(el, 0);
				range.setEnd(el, el.childNodes.length);
				const rangeWidth = Math.round(range.getBoundingClientRect().width);
				const padding = (parseInt(getStyle(el, 'paddingLeft'), 10) || 0) + (parseInt(getStyle(el, 'paddingRight'), 10) || 0);
				if (rangeWidth + padding > el.offsetWidth || el.scrollWidth > el.offsetWidth) {
					tooltipNode.component.props.disabled = false;
				}
			});
		}
	},
};

export default tooltipAutoShow;