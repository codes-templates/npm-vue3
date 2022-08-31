# Installation

## Requirements

`vue` version >=`3.2.0`

## Installation


:::code-group
```bash  [Npm]
npm install --save my-custom-vue3-package
```

```bash  [Yarn]
yarn add my-custom-vue3-package
```
:::

## Global config

see: demo --> `main.js`

## demo

::: details For sandbox
https://sandpack-vue3.netlify.app/
:::

::: sandbox
```vue App.vue
<template>
  <div>{{ hello }}</div>
</template>

<script>
import { ref } from 'vue';

export default {
   name: "App",
   setup() {
    const hello = ref('Hello World!');
    return { hello };
   }
};
</script>
```

```js /src/main.js [active]
import App from './App.vue';
import { createApp } from 'vue';

createApp(App).mount('#app');
```
:::
