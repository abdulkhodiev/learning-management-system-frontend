<script setup lang="ts">
import StarsIcon from '@/assets/icons/StarsIcon.vue';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const courseCard = defineProps({
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  numberOfRatings: {
    type: Number,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <Card
    class="flex h-[338px] w-full flex-col gap-[10px] rounded-2xl p-4 shadow-[0_0_8px_0_#3B82F61F]"
  >
    <CardHeader class="p-0">
      <img
        :src="courseCard.img"
        alt="img"
      />
    </CardHeader>
    <CardContent class="flex h-full flex-col justify-between p-0">
      <h3 class="font-semibold text-primary-foreground">
        {{ courseCard.title }}
      </h3>
      <p class="text-sm text-primary-foreground">{{ courseCard.author }}</p>
      <div class="flex items-center gap-2">
        <StarsIcon :rating="courseCard.rating" />
        <p class="text-sm text-primary-foreground">
          ({{ courseCard.numberOfRatings }} Ratings)
        </p>
      </div>
      <p class="text-sm text-primary-foreground">{{ courseCard.duration }}</p>
      <h3 class="text-[20px] text-primary-foreground">
        ${{ courseCard.price }}
      </h3>
    </CardContent>
  </Card>
</template>
