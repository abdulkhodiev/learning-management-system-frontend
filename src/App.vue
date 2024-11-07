<script setup lang="ts">
import { RouterView } from 'vue-router';
import { Navbar } from './components/Navbar';
import MobileSheet from './components/Navbar/MobileSheet.vue';
import { Toaster } from '@/components/ui/sonner';

import { useAuthStore } from './stores/auth';
import BottomBar from './views/user/Profile/components/BottomBar.vue';

const auth = useAuthStore();
const role = localStorage.getItem('role' as string);
</script>

<template>
  <div>
    <Navbar
      class="hidden md:block"
      :role="role || auth.role"
    />
    <MobileSheet
      class="md:hidden"
      :role="role || auth.role"
    />

    <RouterView class="mb-16 min-h-[calc(100vh-65px)] lg:mb-0" />
    <BottomBar class="lg:hidden" />
    <Toaster
      position="top-center"
      :richColors="true"
    />
  </div>
</template>
