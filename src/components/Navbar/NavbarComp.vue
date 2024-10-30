<script setup lang="ts">
import HeartIcon from '@/assets/icons/HeartIcon.vue';
import SearchInput from '../SearchInput.vue';
import CartIcon from '@/assets/icons/CartIcon.vue';
import BellIcon from '@/assets/icons/BellIcon.vue';
import { User2 } from 'lucide-vue-next';

defineProps({
  role: {
    type: String,
    default: 'public',
  },
});
</script>

<template>
  <nav class="sticky top-0 z-50 border-b-[1px] bg-white">
    <div class="container flex h-[65px] items-center justify-between">
      <div class="flex items-center gap-2 text-primary-foreground">
        <img
          src="@/assets/logo/logo.png"
          alt=""
        />
        <RouterLink to="/">Byway</RouterLink>
      </div>
      <div class="flex items-center gap-10">
        <RouterLink
          to="/categories"
          class="text-sm text-primary-foreground"
          >Categories</RouterLink
        >
        <SearchInput class="md:w-[622px]" />
        <RouterLink
          to="/teach-on-byway"
          class="text-sm text-primary-foreground"
          >Teach on Byway</RouterLink
        >
      </div>

      <!-- admin -->
      <div
        class="flex items-center gap-5"
        v-if="role === 'admin'"
      >
        <RouterLink
          to="/admin/dashboard"
          class="text-sm text-primary-foreground"
          >Dashboard</RouterLink
        >
      </div>

      <!-- user -->
      <div
        class="flex items-center gap-5"
        v-if="role === 'user'"
      >
        <RouterLink
          to="/user/wishlist"
          class="text-sm text-primary-foreground"
        >
          <HeartIcon />
        </RouterLink>
        <RouterLink
          to="/user/cart"
          class="text-sm text-primary-foreground"
        >
          <CartIcon />
        </RouterLink>
        <RouterLink
          to="/user/notification"
          class="text-sm text-primary-foreground"
        >
          <BellIcon />
        </RouterLink>
        <RouterLink
          to="/user/profile/account"
          class="text-sm text-primary-foreground"
        >
          <User2 />
        </RouterLink>
      </div>

      <!-- public -->
      <div
        class="flex items-center gap-5"
        v-if="role === 'public'"
      >
        <RouterLink
          to="/auth/login"
          class="flex h-10 w-16 items-center justify-center border-[1px] border-primary-foreground text-sm text-primary-foreground"
          >Log In</RouterLink
        >
        <RouterLink
          to="/auth/signup"
          class="flex h-10 w-20 items-center justify-center border-[1px] border-primary-foreground bg-primary-foreground p-3 text-sm text-primary-foreground text-white"
          >Sign Up</RouterLink
        >
      </div>
    </div>
  </nav>
</template>
