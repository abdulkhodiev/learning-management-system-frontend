p
<script setup lang="ts">
import InstructorCard from '@/components/PublicCards/InstructorCard.vue';
import { onMounted } from 'vue';
import { useInstructorStore } from '@/stores/instructors';
import { useRouter } from 'vue-router';
import InstructorCardSkeleton from '@/components/PublicCardSkeletons/InstructorCardSkeleton.vue';

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
    <div
      class="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5"
      v-if="instructorStore.isLoading"
    >
      <InstructorCardSkeleton
        v-for="card in 5"
        :key="card"
      />
    </div>
    <div
      class="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5"
      v-else
    >
      <InstructorCard
        v-for="card in instructorStore.instructors"
        :key="card.id"
        :card="card"
        @click="router.push(`/mentor/${card.id}`)"
      />
    </div>
  </div>
</template>
