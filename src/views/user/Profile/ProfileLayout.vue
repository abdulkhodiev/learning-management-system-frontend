<script lang="ts" setup>
import { RouterView } from 'vue-router';
import SideBar from './components/SideBar.vue';
import BottomBar from './components/BottomBar.vue';
import { useUserStore } from '@/stores/userProfile';
import { onMounted } from 'vue';

const userStore = useUserStore();

onMounted(() => {
  userStore.getUserProfile();
});
</script>

<template>
  <div class="container flex flex-col gap-10 py-10 lg:flex-row">
    <SideBar class="hidden lg:block" />
    <RouterView />
  </div>
  <BottomBar class="lg:hidden" />
</template>
