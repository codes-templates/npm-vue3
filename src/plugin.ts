// import { JsxDemo, Demo } from './components';
import { JsxDemo } from './components';
import type { Plugin } from 'vue';

export function InstallPlugin(): Plugin {
  return {
    install(app) {
      // app.component('Demo', Demo);
      app.component('JsxDemo', JsxDemo);
    },
  };
}
