<script lang="ts" setup>
import { RouterView } from 'vue-router';
import SideBar from './components/SideBar.vue';
</script>

<template>
  <div class="container flex gap-10 py-10">
    <SideBar />
    <RouterView />
  </div>
</template>
