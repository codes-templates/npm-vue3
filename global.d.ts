import '@vue/runtime-core';
import {
  Demo,
  JsxDemo,
} from 'my-custom-vue3-package';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Demo: typeof Demo;
    JsxDemo: typeof JsxDemo;
  }
}

export {};
