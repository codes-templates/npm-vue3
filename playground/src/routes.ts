import Index from './pages/index.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: Index },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
