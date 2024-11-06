p
<script setup lang="ts">
import CourseCard from '@/components/Cards/CourseCard.vue';
import { courses } from '@/data';
import { userCourseStore } from '@/stores/courses';
import { onMounted } from 'vue';

const courseStore = userCourseStore();

onMounted(() => {
  courseStore.getAllCourses();
});
</script>

<template>
  <div class="container min-h-[calc(100vh-65px)] space-y-6 py-6">
    <h1 class="text-xl font-bold text-thirdary md:text-[40px]">All Courses</h1>
    <div
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <!-- <CourseCard
        v-for="card in courseStore.courses"
        :key="card.id"
        :card="card"
      /> -->
      <CourseCard
        v-for="card in courses"
        :key="card.id"
        :card="card"
      />
    </div>
  </div>
</template>
