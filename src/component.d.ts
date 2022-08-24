import '@vue/runtime-core';
import {
  Demo,
  JsxDemo,
  PluginOptions,
} from 'my-custom-vue3-package';
import type { Plugin, VNode } from 'vue';

declare const MyPackageName: Plugin;
export default MyPackageName;

declare global {
  interface Window {
    MyPackageName?: MyPackageName;
  }
}

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $MyPackageName: (options?: PluginOptions) => void;
  }

  export interface GlobalComponents {
    Demo: typeof Demo;
    JsxDemo: typeof JsxDemo;
  }
}
