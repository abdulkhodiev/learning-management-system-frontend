<script lang="ts" setup>
import ShaereIcon from '@/assets/icons/ShaereIcon.vue';
import { Button } from '@/components/ui/button';
import { useUserStore } from '@/stores/userProfile';

const userStore = useUserStore();

const links = [
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
    class="sticky top-20 h-max min-w-[290px] space-y-6 overflow-hidden rounded-2xl bg-thirdary-foreground"
  >
    <div class="flex flex-col items-center justify-center gap-4 p-10 pb-0">
      <img
        :src="userStore.user.profilePicture"
        alt="avatar"
        class="w-full rounded-full object-cover"
      />
      <h2>{{ userStore.user.firstName }} {{ userStore.user.lastName }}</h2>
      <Button
        variant="outline"
        class="h-12 w-full text-sm"
        >Share Profile <ShaereIcon class="ml-2 text-white"
      /></Button>
    </div>

    <div>
      <RouterLink
        v-for="link in links"
        :key="link.name"
        :to="link.path"
        ><p
          class="border-t p-4 transition-all duration-300 hover:bg-thirdary hover:text-white"
          :class="$route.path === link.path ? 'bg-thirdary text-white' : ''"
        >
          {{ link.name }}
        </p>
      </RouterLink>
    </div>
  </div>
</template>
