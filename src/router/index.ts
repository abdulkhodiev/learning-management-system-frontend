import { createRouter, createWebHistory } from 'vue-router';
import App from '@/App.vue';
import MainPage from '@/views/public/MainPage.vue';
import HomePage from '@/views/public/Landing/HomePage.vue';
import LoginPage from '@/views/public/Auth/LoginPage.vue';
import SignUpPage from '@/views/public/Auth/SignUpPage.vue';

const publicRoutes = [
  {
    path: '/',
    name: 'home',
    component: MainPage,
    children: [
      {
        path: '',
        name: 'landingPage',
        component: HomePage,
      },
      {
        path: 'auth/login',
        name: 'login',
        component: LoginPage,
      },
      {
        path: 'auth/signup',
        name: 'signup',
        component: SignUpPage,
      },
    ],
  },
];

const adminRoutes = [
  {
    path: '/admin',
    name: 'admin',
    component: App,
  },
];

const userRoutes = [
  {
    path: '/user',
    name: 'user',
    component: App,
  },
];

const routes = [...publicRoutes, ...adminRoutes, ...userRoutes];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
