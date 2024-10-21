import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/public/Landing/HomePage.vue';
import LoginPage from '@/views/public/Auth/LoginPage.vue';
import SignUpPage from '@/views/public/Auth/SignUpPage.vue';
import { Categories, Category } from '@/views/public/Categories';
import { Courses, Course } from '@/views/public/Courses';
import PublicPage from '@/views/public/PublicPage.vue';
import UserPage from '@/views/user/UserPage.vue';
import AdminPage from '@/views/admin/AdminPage.vue';

// UserRoutes
import { Cart } from '@/views/user/Cart';
import { Checkout } from '@/views/user/Checkout';

const publicRoutes = [
  {
    path: '/',
    name: 'home',
    component: PublicPage,
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
      {
        path: 'categories',
        name: 'categories',
        component: Categories,
      },
      {
        path: 'categories/:categoryId',
        name: 'category',
        component: Category,
      },
      {
        path: 'courses',
        name: 'courses',
        component: Courses,
      },
      {
        path: 'courses/:courseId',
        name: 'course',
        component: Course,
      },
    ],
  },
];

const adminRoutes = [
  {
    path: '/admin',
    name: 'admin',
    component: AdminPage,
  },
];

const userRoutes = [
  {
    path: '/user',
    name: 'user',
    component: UserPage,
    children: [
      {
        path: 'cart',
        name: 'cart',
        component: Cart,
      },
      {
        path: 'checkout',
        name: 'checkout',
        component: Checkout,
      },
    ],
  },
];

const routes = [...publicRoutes, ...adminRoutes, ...userRoutes];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
