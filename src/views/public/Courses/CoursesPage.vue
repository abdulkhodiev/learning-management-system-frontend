<script setup lang="ts">
import CourseCard from '@/components/PublicCards/CourseCard.vue';
import CourseCardSkeleton from '@/components/PublicCardSkeletons/CourseCardSkeleton.vue';
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
      v-if="courseStore.isLoading"
    >
      <CourseCardSkeleton
        v-for="i in 12"
        :key="i"
      />
    </div>
    <div
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      v-else
    >
      <CourseCard
        v-for="card in courses"
        :key="card.id"
        :card="card"
      />
    </div>
  </div>
</template>
