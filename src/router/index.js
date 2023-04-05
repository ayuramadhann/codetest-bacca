import { createRouter, createWebHistory } from 'vue-router';

import LandingPage from '../views/LandingPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/landingpage',
      name: 'landingpage',
      component: LandingPage,
    },
    {
      path: '/adminpanel',
      name: 'adminpanel',
      component: () => import('../views/AdminPanel.vue'),
    },
  ],
});

export default router;
