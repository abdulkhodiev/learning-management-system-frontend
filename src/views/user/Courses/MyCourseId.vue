<script setup lang="ts">
import VideoPlayerAccrodion from '@/components/VideoPlayerAccrodion.vue';
import { Button } from '@/components/ui/button';
import { Divider } from '@/components/Divider';
import InstructorInformation from '@/components/Course/InstructorInformation.vue';
import { instructorInfo } from '@/views/public/Landing/data';
import { topCourses, review2 } from '@/views/public/Landing/data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import CourseCard from '@/components/Cards/CourseCard.vue';
import ReviewsModal from '@/components/Course/ReviewsModal.vue';
import ReviewCard2 from '@/components/Cards/ReviewCard2.vue';
import StarsIcon from '@/assets/icons/StarsIcon.vue';
import StarIcon from '@/assets/icons/StarIcon.vue';

const reviews = [5, 4, 3, 2, 1];
</script>

<template>
  <div class="container min-h-[calc(100vh-65px)] py-10">
    <h2>Introduction to User Experience Design</h2>
    <VideoPlayerAccrodion />

    <div class="space-y-6 md:max-w-[840px]">
      <div class="space-x-6">
        <Button
          variant="outline"
          class="h-14 w-[148px] text-sm font-normal"
          >Description</Button
        >
        <Button
          variant="outline"
          class="h-14 w-[148px] text-sm font-normal"
          >Instructor</Button
        >
        <Button
          variant="outline"
          class="h-14 w-[148px] text-sm font-normal"
          >Syllabus</Button
        >
        <Button
          variant="outline"
          class="h-14 w-[148px] text-sm font-normal"
          >Reviews</Button
        >
      </div>
      <Divider />

      <div class="space-y-1">
        <h3>Course Overview</h3>
        <p class="text-sm">
          Embark on a transformative journey into the dynamic world of User
          Experience (UX) Design with our comprehensive course, "Introduction to
          User Experience Design." This course is meticulously crafted to
          provide you with a foundational understanding of the principles,
          methodologies, and tools that drive exceptional user experiences in
          the digital landscape.
        </p>
      </div>
      <div class="space-y-1">
        <h3>Key Learning Objectives</h3>
        <ul class="list-inside list-disc gap-1">
          <li>
            Gain a clear understanding of what User Experience (UX) Design
            entails and its importance in today's digital world.
          </li>
          <li>
            Gain a clear understanding of what User Experience (UX) Design
            entails and its importance in today's digital world.
          </li>
          <li>
            Gain a clear understanding of what User Experience (UX) Design
            entails and its importance in today's digital world.
          </li>
          <li>
            Gain a clear understanding of what User Experience (UX) Design
            entails and its importance in today's digital world.
          </li>
        </ul>
      </div>

      <InstructorInformation :instructor="instructorInfo" />
    </div>
  </div>
  <div class="my-10 bg-thirdary-foreground py-10">
    <div class="container relative">
      <Carousel class="flex flex-col gap-6">
        <div
          class="relative flex flex-col items-center justify-center md:flex-row md:justify-between"
        >
          <h2 class="w-[308px] text-thirdary">
            More Courses by <span class="text-primary">Ronald Richards</span>
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
              v-for="card in topCourses"
              :key="card.id"
              class="md:basis-1/4 lg:basis-1/4"
            >
              <CourseCard :card="card" />
            </CarouselItem>
          </CarouselContent>
        </div>
      </Carousel>
    </div>
  </div>

  <div class="container space-y-6">
    <h4 class="text-xl font-semibold text-primary-foreground">
      Learner Reviews
    </h4>

    <div class="flex justify-between gap-[140px]">
      <div class="flex flex-col gap-4">
        <div class="flex items-end gap-2">
          <h2 class="flex items-center gap-1 text-xl font-semibold">
            <StarIcon /> 4.6
          </h2>
          <p class="text-sm text-primary-foreground">146,951 reviews</p>
        </div>
        <div class="flex flex-col gap-1">
          <StarsIcon
            v-for="item in reviews"
            :key="item"
            :rating="item"
          />
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <ReviewCard2
          v-for="review in review2"
          :key="review.id"
          :review="review"
        />
        <ReviewsModal :allReviews="review2" />
      </div>
    </div>
  </div>
</template>
