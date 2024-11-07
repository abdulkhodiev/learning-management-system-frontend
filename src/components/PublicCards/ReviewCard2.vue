<script setup lang="ts">
import StarIcon from '@/assets/icons/StarIcon.vue';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import type { ReviewData } from '@/types/reviews';
import { computed } from 'vue';

const props = defineProps<{
  review: ReviewData;
}>();

const date = computed(() => {
  const date = props.review.date;
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
});
</script>

<template>
  <Card
    class="w-full justify-between gap-10 rounded-2xl p-6 shadow-[0_0_8px_0_#3B82F61F] md:flex md:gap-[10px]"
  >
    <CardHeader class="flex w-full p-0">
      <div class="mb-5 flex items-center gap-3 md:mb-0">
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
          {{ date }}
        </p>
      </div>
      <p class="p-0 text-primary-foreground">
        {{ props.review.reviewText }}
      </p>
    </CardContent>
  </Card>
</template>
