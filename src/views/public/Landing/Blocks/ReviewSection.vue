<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { testimonials } from '../data';
import ReviewsCard from '../../../../components/Cards/ReviewsCard.vue';
</script>

<template>
  <section
    class="flex h-[512px] w-full items-center justify-center bg-thirdary-foreground"
  >
    <div class="container relative">
      <Carousel class="flex flex-col gap-6">
        <div
          class="relative flex flex-col items-center justify-center md:flex-row md:justify-between"
        >
          <h2 class="w-[308px] text-thirdary">
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
          <CarouselContent>
            <CarouselItem
              v-for="testemonial in testimonials"
              :key="testemonial.id"
              class="md:basis-1/2 lg:basis-1/3"
            >
              <ReviewsCard
                :text="testemonial.text"
                :author="testemonial.name"
                :profile-img="testemonial.avatar"
                :authors-profession="testemonial.profession"
              />
            </CarouselItem>
          </CarouselContent>
        </div>
      </Carousel>
    </div>
  </section>
</template>
