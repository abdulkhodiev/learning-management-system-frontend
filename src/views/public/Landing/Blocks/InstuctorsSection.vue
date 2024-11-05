<script setup lang="ts">
import InstructorCard from '@/components/Cards/InstructorCard.vue';
import { instructors } from '@/data';
</script>

<template>
  <section class="container space-y-[24px]">
    <div class="flex items-center justify-between">
      <h2>Top Instructors</h2>
      <RouterLink
        to="/mentors"
        class="px-6 py-2.5 text-sm text-primary"
        >See all</RouterLink
      >
    </div>
    <div class="flex w-full gap-6">
      <InstructorCard
        v-for="card in instructors.length > 4
          ? instructors.slice(0, 4)
          : instructors"
        :key="card.id"
        :card="card"
      />
    </div>
  </section>
</template>
