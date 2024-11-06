<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { reviews } from '@/data';
import ReviewsCard from '../../../../components/Cards/ReviewsCard.vue';
import { useReviewStore } from '@/stores/reviews';
import { onMounted } from 'vue';

const reviewsStore = useReviewStore();

onMounted(() => {
  reviewsStore.getAllReviews();
});
</script>

<template>
  <section
    class="flex w-full items-center justify-center bg-thirdary-foreground py-10 md:h-[512px] md:p-0"
  >
    <div class="container relative">
      <Carousel class="flex flex-col gap-6">
        <div
          class="relative flex flex-col items-center justify-center md:flex-row md:justify-between"
        >
          <h2
            class="mb-10 w-full text-center text-thirdary md:m-0 md:w-[308px] md:text-start"
          >
            What Our Customer Say About Us
          </h2>

          <div class="w- relative flex w-[136px] justify-between gap-6">
            <CarouselPrevious
              class="left-0 h-[40px] w-[58px] rounded-[8px] bg-[#94A3B8] text-white"
            />
            <CarouselNext
              class="right-0 h-[40px] w-[58px] rounded-[8px] bg-[#94A3B8] text-white"
            />
          </div>
        </div>
        <div>
          <CarouselContent class="w-full pt-10 md:p-0">
            <CarouselItem
              v-for="testemonial in reviews"
              :key="testemonial.id"
              class="basis-2/2 md:basis-1/2 lg:basis-1/3"
            >
              <ReviewsCard :review="testemonial" />
            </CarouselItem>
          </CarouselContent>
        </div>
      </Carousel>
    </div>
  </section>
</template>
