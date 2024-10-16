<script setup lang="ts">
import SearchInput from '../SearchInput.vue';
import CartIcon from '@/assets/icons/CartIcon.vue';
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
        <SearchInput />
        <RouterLink
          to="/teach-on-byway"
          class="text-sm text-primary-foreground"
          >Teach on Byway</RouterLink
        >
      </div>
      <div class="flex items-center gap-5">
        <RouterLink
          to="/cart"
          class="text-sm text-primary-foreground"
        >
          <CartIcon />
        </RouterLink>

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
