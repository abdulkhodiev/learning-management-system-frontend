p
<script setup lang="ts">
import InstructorCard from '@/components/Cards/InstructorCard.vue';
import { onMounted } from 'vue';
import { useInstructorStore } from '@/stores/instructors';
import { instructors } from '@/data';
import { useRouter } from 'vue-router';

const router = useRouter();

const instructorStore = useInstructorStore();

onMounted(() => {
  instructorStore.getAllInstructors();
});

onMounted(() => {});
</script>

<template>
  <div class="container min-h-[calc(100vh-65px)] space-y-6 py-6">
    <h1 class="text-xl font-bold text-thirdary md:text-[40px]">
      All Instructors
    </h1>
    <div class="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
      <!-- <CourseCard
        v-for="card in courseStore.courses"
        :key="card.id"
        :card="card"
      /> -->
      <InstructorCard
        v-for="card in instructors"
        :key="card.id"
        :card="card"
        @click="router.push(`/mentor/${card.id}`)"
      />
    </div>
  </div>
</template>
