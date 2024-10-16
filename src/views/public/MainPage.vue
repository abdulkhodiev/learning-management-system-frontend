<script setup lang="ts">
import { Navbar } from '@/components/Navbar';
import { RouterView } from 'vue-router';
import FooterSection from './Landing/Blocks/FooterSection.vue';
</script>

<template>
  <div>
    <Navbar />
    <RouterView />
    <FooterSection />
  </div>
</template>
