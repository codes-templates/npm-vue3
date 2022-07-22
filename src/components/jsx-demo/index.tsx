import { DefineComponent, defineComponent } from 'vue';

export interface Props {
  count?: number;
}

/**
 * JsxDemo.
 */
export const JsxDemo = defineComponent({
  name: 'FileTabs',
  inheritAttrs: true,
  props: {
    count: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  setup(props: Props) {
    return () => (
      <div>count in jsx component: {props.count}</div>
    );
  },
}) as DefineComponent<Props>;
