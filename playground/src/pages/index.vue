<script setup lang="ts">
import { ref } from 'vue';
// import { JsxDemo as CountDemo, Demo } from 'my-custom-vue3-package';
import { JsxDemo as CountDemo } from 'my-custom-vue3-package';

const count = ref(0);

function changeCount() {
  count.value += 1;
}
</script>

<template>
  <div style="padding: 0 24px 22px; margin: 0 auto; max-width: 1192px;">
    <div class="py-2 px-6">
      <button class="mybtn" @click="changeCount">change count value</button>
    </div>

    <!-- <Demo :count="count" /> -->

    <div style="display: flex;">
      <CountDemo :count="count" />
    </div>
  </div>
</template>

<style lang="scss">
.mybtn {
  outline: none;
  border-width: 1px;
  border-radius: 0.375rem;
  border-color: rgba(253, 253, 253, 1);
  margin-right: 1.25rem;
  padding: 0.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(16, 185, 129, 1);
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
</style>
