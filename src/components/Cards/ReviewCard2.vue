<script setup lang="ts">
import StarIcon from '@/assets/icons/StarIcon.vue';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import type { ReviewData } from '@/types/reviews';

const props = defineProps<{
  review: ReviewData;
}>();
</script>

<template>
  <Card
    class="flex w-full justify-between gap-[10px] rounded-2xl p-6 shadow-[0_0_8px_0_#3B82F61F]"
  >
    <CardHeader class="flex w-full p-0">
      <div class="flex items-center gap-3">
        <img
          :src="props.review.profilePicture"
          alt="profile"
          class="size-[60px] rounded-full"
        />
        <h3 class="text-[18px] font-semibold text-primary-foreground">
          {{ props.review.firstName }} {{ props.review.lastName }}
        </h3>
      </div>
    </CardHeader>
    <CardContent class="m-0 flex flex-col justify-between gap-1.5 p-0">
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-1">
          <StarIcon />
          <p class="text-[18px] font-semibold">{{ props.review.rating }}</p>
        </div>
        <p class="text-sm text-primary-foreground">
          {{ props.review.date }}
        </p>
      </div>
      <p class="p-0 text-primary-foreground">
        {{ props.review.reviewText }}
      </p>
    </CardContent>
  </Card>
</template>
