import { defineComponent } from "vue";
import { isFunction } from "lodash-es";

export const RenderVnode = defineComponent({
  props: {
    vNode: {
      type: [String, Object, Function],
      required: true,
    },
  },
  setup(props) {
    return () => (isFunction(props.vNode) ? props.vNode() : props.vNode);
  },
});

export const typeIconMap = new Map([
  ["info", "circle-info"],
  ["success", "check-circle"],
  ["warning", "circle-exclamation"],
  ["danger", "circle-xmark"],
  ["error", "circle-xmark"],
]);

export * from "./vue/install";
export * from "./dom/style";
export * from "./error";
export * from "./browser";
export * from "./strings";
export * from "./icon";
export * from "./type";
