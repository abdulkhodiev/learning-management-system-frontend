<script setup lang="ts">
import StarsIcon from '@/assets/icons/StarsIcon.vue';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import type { CourseData } from '@/types/course';
import { useRouter } from 'vue-router';
import { useCartStore } from '@/stores/cartStore';

const router = useRouter();

const props = defineProps<{
  card: CourseData;
}>();

const cartStore = useCartStore();

const removeCourse = () => {
  cartStore.removeCourse(props.card.id);
};
</script>

<template>
  <Card
    class="flex w-full flex-col items-start justify-between gap-4 p-4 md:flex-row"
  >
    <CardHeader class="p-0">
      <img
        :src="card.coverImage"
        alt="course Image"
        class="h-[108px] w-full object-cover"
      />
    </CardHeader>
    <CardContent class="flex flex-col justify-between gap-1 p-0">
      <h5 class="text-lg font-semibold">
        {{ card.title }}
      </h5>
      <p class="text-sm text-primary-foreground">
        By {{ card.instructor.firstName }} {{ card.instructor.lastName }}
      </p>
      <div class="flex flex-wrap gap-2 text-sm">
        {{ card.rating }}
        <StarsIcon :rating="card.rating" />
        <p class="border-r-2 pr-2">( {{ card.numberOfRatings }} rating )</p>
        <p>{{ card.duration }} Total Hours.</p>
        <p>{{ card.lectures }} Lectures</p>
        <p>All Levels</p>
      </div>
      <div>
        <button
          @click="router.push(`/course/${card.id}`)"
          class="border-r-2 bg-transparent pr-2 text-sm font-normal text-primary"
        >
          See Details
        </button>
        <button
          class="bg-transparent pl-2 text-sm font-normal text-red-500"
          @click="removeCourse"
        >
          Remove
        </button>
      </div>
    </CardContent>
    <CardFooter class="p-0 text-2xl font-bold"> ${{ card.price }} </CardFooter>
  </Card>
</template>
