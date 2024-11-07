<script setup lang="ts">
import { topCategories } from '../data';
import CategoriesCard from '@/components/PublicCards/CategoriesCard.vue';
</script>

<template>
  <section class="container space-y-[24px]">
    <div class="flex items-center justify-between">
      <h2>Top Categories</h2>
      <RouterLink
        to="/categories"
        class="px-6 py-2.5 text-sm text-primary"
        >See all</RouterLink
      >
    </div>
    <div class="grid w-full grid-cols-2 gap-6 md:grid-cols-4">
      <CategoriesCard
        v-for="card in topCategories"
        :key="card.id"
        :card="card"
      />
    </div>
  </section>
</template>
