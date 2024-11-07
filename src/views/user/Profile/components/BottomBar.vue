<script lang="ts" setup>
import {
  BookOpenIcon,
  HomeIcon,
  MessageCircle,
  StarIcon,
  UserIcon,
  Users2Icon,
} from 'lucide-vue-next';

const links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Profile',
    path: '/user/profile/account',
  },
  {
    name: 'My Courses',
    path: '/user/profile/my-courses',
  },
  {
    name: 'Teachers',
    path: '/user/profile/teachers',
  },
  {
    name: 'Messages',
    path: '/user/profile/messages',
  },
  {
    name: 'My Reviews',
    path: '/user/profile/my-reviews',
  },
];
</script>

<template>
  <div
    class="fixed bottom-0 h-max w-full space-y-6 rounded-t-2xl bg-thirdary-foreground"
  >
    <div class="flex w-full items-center justify-between gap-2 p-2">
      <RouterLink
        v-for="link in links"
        :key="link.name"
        class="w-full items-center justify-center"
        :to="link.path"
        ><div
          v-if="link.name === 'Home'"
          class="flex w-full items-center justify-center rounded-xl p-2 transition-all duration-300 hover:bg-thirdary hover:text-white"
          :class="$route.path === link.path ? 'bg-thirdary text-white' : ''"
        >
          <HomeIcon />
        </div>
        <div
          v-if="link.name === 'Profile'"
          class="flex w-full items-center justify-center rounded-xl p-2 transition-all duration-300 hover:bg-thirdary hover:text-white"
          :class="$route.path === link.path ? 'bg-thirdary text-white' : ''"
        >
          <UserIcon />
        </div>
        <div
          v-if="link.name === 'My Courses'"
          class="flex w-full items-center justify-center rounded-xl p-2 transition-all duration-300 hover:bg-thirdary hover:text-white"
          :class="$route.path === link.path ? 'bg-thirdary text-white' : ''"
        >
          <BookOpenIcon />
        </div>
        <div
          v-if="link.name === 'Teachers'"
          class="flex items-center justify-center rounded-xl p-2 transition-all duration-300 hover:bg-thirdary hover:text-white"
          :class="$route.path === link.path ? 'bg-thirdary text-white' : ''"
        >
          <Users2Icon />
        </div>
        <div
          v-if="link.name === 'Messages'"
          class="flex items-center justify-center rounded-xl p-2 transition-all duration-300 hover:bg-thirdary hover:text-white"
          :class="$route.path === link.path ? 'bg-thirdary text-white' : ''"
        >
          <MessageCircle />
        </div>
        <div
          v-if="link.name === 'My Reviews'"
          class="flex items-center justify-center rounded-xl p-2 transition-all duration-300 hover:bg-thirdary hover:text-white"
          :class="$route.path === link.path ? 'bg-thirdary text-white' : ''"
        >
          <StarIcon />
        </div>
      </RouterLink>
    </div>
  </div>
</template>
