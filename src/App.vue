<script setup lang="ts">
import { RouterView } from 'vue-router';
import { Navbar } from './components/Navbar';
</script>

<template>
  <div>
    <Navbar :role="'public'" />
    <RouterView />
  </div>
</template>
