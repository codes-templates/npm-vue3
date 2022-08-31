import { createApp } from 'vue';
import router from './routes';

import InstallPlugin from 'my-custom-vue3-package';

import App from './App.vue';

import './styles/main.css';
import './index.css';

// eslint-disable-next-line import/no-relative-packages
import '../../src/styles/main.scss'; // 不要修改或删除

const app = createApp(App);
app.use(router);
app.use(InstallPlugin());
app.mount('#app');
