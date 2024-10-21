<script setup lang="ts">
import StarsIcon from '@/assets/icons/StarsIcon.vue';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';

defineProps({
  card: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <Card class="flex w-full items-start justify-between gap-4 p-4">
    <CardHeader class="p-0">
      <img
        :src="card.img"
        alt="course Image"
        class="h-[108px] w-full object-cover"
      />
    </CardHeader>
    <CardContent class="flex flex-col justify-between gap-1 p-0">
      <h5 class="text-lg font-semibold">
        {{ card.title }}
      </h5>
      <p class="text-sm text-primary-foreground">By {{ card.author }}</p>
      <div class="flex flex-wrap gap-2 text-sm">
        {{ card.rating }}
        <StarsIcon :rating="card.rating" />
        <p class="border-r-2 pr-2">( {{ card.numberOfReviews }} rating )</p>
        <p>{{ card.duration }} Total Hours.</p>
        <p>{{ card.lectures }} Lectures</p>
        <p>{{ card.levels }} Levels</p>
      </div>
      <div>
        <span
          class="border-r-2 bg-transparent pr-2 text-sm font-normal text-primary"
        >
          Save for later</span
        >
        <span class="bg-transparent pl-2 text-sm font-normal text-red-500"
          >Remove</span
        >
      </div>
    </CardContent>
    <CardFooter class="p-0 text-2xl font-bold"> ${{ card.price }} </CardFooter>
  </Card>
</template>
