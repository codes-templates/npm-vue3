# Installation

## Requirements

`vue` version >=`3.2.0`

## Installation


:::code-group
```bash [Npm]
npm install --save my-custom-vue3-package
```

```bash [Yarn]
yarn add my-custom-vue3-package
```
:::

## Global config

see: demo --> `main.js`

## demo

::: details For sandbox
https://vitepress-sandbox.js-bridge.com
:::

::: sandbox
```vue App.vue
<template>
  <div>{{ hello }}</div>
</template>

<script setup>
import { ref } from 'vue';

const hello = ref('Hello World!');
</script>
```

```js /src/main.js [active]
import App from './App.vue';
import { createApp } from 'vue';

createApp(App).mount('#app');
```
:::
