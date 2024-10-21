<script setup lang="ts">
import { RouterView } from 'vue-router';
import FooterSection from '../public/Landing/Blocks/FooterSection.vue';
</script>

<template>
  <div>
    <RouterView class="min-h-[calc(100vh-65px)]" />
    <FooterSection />
  </div>
</template>
