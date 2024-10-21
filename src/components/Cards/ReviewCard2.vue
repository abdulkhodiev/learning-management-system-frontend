<script setup lang="ts">
import StarIcon from '@/assets/icons/StarIcon.vue';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

defineProps({
  review: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <Card
    class="flex w-full justify-between gap-[10px] rounded-2xl p-6 shadow-[0_0_8px_0_#3B82F61F]"
  >
    <CardHeader class="flex w-full p-0">
      <div class="flex items-center gap-3">
        <img
          :src="review.avatar"
          alt="profile"
          class="size-[60px] rounded-full"
        />
        <h3 class="text-[18px] font-semibold text-primary-foreground">
          {{ review.name }}
        </h3>
      </div>
    </CardHeader>
    <CardContent class="m-0 flex flex-col justify-between gap-1.5 p-0">
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-1">
          <StarIcon />
          <p class="text-[18px] font-semibold">{{ review.rating }}</p>
        </div>
        <p class="text-sm text-primary-foreground">
          Reviewed on 22nd March, 2024
        </p>
      </div>
      <p class="p-0 text-primary-foreground">
        {{ review.text }}
      </p>
    </CardContent>
  </Card>
</template>
