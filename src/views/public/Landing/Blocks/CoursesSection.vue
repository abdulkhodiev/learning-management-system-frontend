<script setup lang="ts">
import CourseCard from '@/components/Cards/CourseCard.vue';
import { courses } from '@/data';
</script>

<template>
  <section class="container space-y-[24px]">
    <div class="flex items-center justify-between">
      <h2>Top Courses</h2>
      <RouterLink
        to="/courses"
        class="px-6 py-2.5 text-sm text-primary"
        >See all</RouterLink
      >
    </div>
    <div class="flex w-full gap-6">
      <CourseCard
        v-for="card in courses.length > 4 ? courses.slice(0, 4) : courses"
        :key="card.id"
        :card="card"
      />
    </div>
  </section>
</template>
