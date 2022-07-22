<template>
  <div>count: {{ count }}</div>
</template>

<script setup lang="ts">
import { VueDemo } from '../../types';
import { onMounted } from 'vue';

const a = {
  id: '2',
} as VueDemo;

defineProps({
  count: {
    type: Number,
    default: 0,
  },
});

onMounted(() => {
  console.log(a);
});
</script>
