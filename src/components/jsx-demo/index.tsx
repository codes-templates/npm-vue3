import { DefineComponent, defineComponent } from 'vue';

export interface Props {
  count?: number;
}

const test = null;

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
    const b = '5'.padStart(2, '1');
    const c = test ?? 'hello';
    const d = {} as Record<string, any>;

    return () => (
      <div class="test">
        <p>count in jsx component: {props.count}</p>
        <p>{b}</p>
        <p>{c}</p>
        <p>{d?.name}</p>
      </div>
    );
  },
}) as DefineComponent<Props>;
