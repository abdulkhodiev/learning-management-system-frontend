<script lang="ts" setup>
import { RouterView } from 'vue-router';
import SideBar from './components/SideBar.vue';
import BottomBar from './components/BottomBar.vue';
</script>

<template>
  <div class="container flex flex-col gap-10 py-10 lg:flex-row">
    <SideBar class="hidden lg:block" />
    <RouterView />
  </div>
  <BottomBar class="lg:hidden" />
</template>
