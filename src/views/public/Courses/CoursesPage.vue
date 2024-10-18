<script setup lang="ts">
import { topCourses } from '../Landing/data';
import CourseCard from '@/components/Cards/CourseCard.vue';
</script>

<template>
  <div class="container min-h-[calc(100vh-65px)] space-y-6 py-6">
    <h1 class="text-[40px] font-bold text-thirdary">All Courses</h1>
    <div class="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
      <CourseCard
        v-for="card in topCourses"
        :key="card.id"
        :card="card"
      />
    </div>
  </div>
</template>
