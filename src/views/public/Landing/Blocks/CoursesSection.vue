<script setup lang="ts">
import CourseCard from '@/components/Cards/CourseCard.vue';
import { topCourses } from '../data';
</script>

<template>
  <section class="container space-y-[24px]">
    <div class="flex items-center justify-between">
      <h2>Top Courses</h2>
      <RouterLink
        to="/"
        class="px-6 py-2.5 text-sm text-primary"
        >See all</RouterLink
      >
    </div>
    <div class="flex w-full gap-6">
      <CourseCard
        v-for="card in topCourses"
        :key="card.id"
        :card="card"
      />
    </div>
  </section>
</template>
