<script setup lang="ts">
import CategoriesCard from '@/components/Cards/CategoriesCard.vue';
import { topCategories } from '../Landing/data';
</script>

<template>
  <div class="container min-h-[calc(100vh-65px)] space-y-6 py-6">
    <h1 class="text-[40px] font-bold text-thirdary">All Categories</h1>
    <div class="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
      <CategoriesCard
        v-for="card in topCategories"
        :key="card.id"
        :card="card"
      />
    </div>
  </div>
</template>
