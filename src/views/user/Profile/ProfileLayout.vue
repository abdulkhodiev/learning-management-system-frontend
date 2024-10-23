<script lang="ts" setup>
import SideBar from './components/SideBar.vue';
</script>

<template>
  <div class="container flex justify-between gap-10 py-10">
    <SideBar />
    <RouterView />
  </div>
</template>
