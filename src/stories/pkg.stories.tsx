// import { Demo } from 'my-custom-vue3-package';
import { JsxDemo as CountDemo } from 'my-custom-vue3-package';

export default {
  title: 'UsePkg',
};

export const Pkg = () => (
  <div>
    <CountDemo count={6} />
  </div>
);
