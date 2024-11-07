<script setup lang="ts">
import InstructorCard from '@/components/PublicCards/InstructorCard.vue';
import InstructorCardSkeleton from '@/components/PublicCardSkeletons/InstructorCardSkeleton.vue';
import { useInstructorStore } from '@/stores/instructors';
import { onMounted } from 'vue';

const instructoreStore = useInstructorStore();

onMounted(() => {
  instructoreStore.getAllTopInstructors();
});
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
    <div class="grid w-full grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
      <InstructorCard
        v-for="card in instructoreStore.instructors"
        :key="card.id"
        :card="card"
      />
    </div>
    <div
      class="grid w-full grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5"
      v-if="instructoreStore.isLoading"
    >
      <InstructorCardSkeleton
        v-for="i in 4"
        :key="i"
      />
    </div>
  </section>
</template>
