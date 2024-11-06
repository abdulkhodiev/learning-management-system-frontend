<script setup lang="ts">
import { RouterView } from 'vue-router';
import { Navbar } from './components/Navbar';
import MobileSheet from './components/Navbar/MobileSheet.vue';
</script>

<template>
  <div>
    <Navbar
      class="hidden md:block"
      :role="'user'"
    />
    <MobileSheet
      class="md:hidden"
      :role="'public'"
    />

    <RouterView />
  </div>
</template>
