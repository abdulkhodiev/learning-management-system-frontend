<script lang="ts" setup>
import PaginationComponent from '@/components/PaginationComponent.vue';
import ReviewsCardSkeleton from '@/components/PublicCardSkeletons/ReviewsCardSkeleton.vue';
import ReviewsCard from '@/components/UserProfileCards/ReviewsCard.vue';
import { useUserStore } from '@/stores/userProfile';

const userStore = useUserStore();

const length = (userStore.user.reviews || []).length;
</script>

<template>
  <div class="w-full space-y-4">
    <h2>Reviews</h2>
    <div
      class="space-y-4"
      v-if="userStore.isLoading"
    >
      <ReviewsCardSkeleton
        v-for="i in 3"
        :key="i"
      />
    </div>
    <div
      class="space-y-4"
      v-else
    >
      <ReviewsCard
        v-for="review in userStore.user.reviews"
        :key="review.id"
        :review="review"
      />
    </div>
    <div class="flex justify-center">
      <PaginationComponent
        :total="length"
        :sibling-count="1"
      />
    </div>
  </div>
</template>
