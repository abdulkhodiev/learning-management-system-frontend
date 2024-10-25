<script lang="ts" setup>
import PaginationComponent from '@/components/PaginationComponent.vue';
import ReviewsCard from '@/components/Cards/UserProfileCards/ReviewsCard.vue';
import { review2 } from '@/views/public/Landing/data';
</script>

<template>
  <div class="w-full space-y-4">
    <h2>Reviews</h2>
    <div class="space-y-4">
      <ReviewsCard
        v-for="review in review2"
        :key="review.id"
        :review="review"
      />
    </div>
    <div class="flex justify-center">
      <PaginationComponent />
    </div>
  </div>
</template>
