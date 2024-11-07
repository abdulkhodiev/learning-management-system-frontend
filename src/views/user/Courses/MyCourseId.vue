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
import CourseCard from '@/components/PublicCards/CourseCard.vue';
import ReviewsModal from '@/components/Course/ReviewsModal.vue';
import ReviewCard2 from '@/components/PublicCards/ReviewCard2.vue';
import StarsIcon from '@/assets/icons/StarsIcon.vue';
import StarIcon from '@/assets/icons/StarIcon.vue';

import { userCourseStore } from '@/stores/courses';
import { useInstructorStore } from '@/stores/instructors';
import { useReviewStore } from '@/stores/reviews';
import { computed, onMounted, ref } from 'vue';

const courseStore = userCourseStore();
const instructorStore = useInstructorStore();
const reviewStore = useReviewStore();

courseStore.getCourseById('1');
courseStore.getAllTopCourses();
instructorStore.getInstructorById('0');
reviewStore.getTopReviews();

const selectedRating = ref(0);
const selectRating = (rating: number) => {
  selectedRating.value = rating;
};
const filteredReviews = computed(() => {
  return reviewStore.reviews.filter(
    review => review.rating >= selectedRating.value
  );
});

const stars = [5, 4, 3, 2, 1];
</script>

<template>
  <div class="container min-h-[calc(100vh-65px)] py-10">
    <h2>{{ courseStore.course.title }}</h2>
    <VideoPlayerAccrodion id="#syllabus" />

    <div class="space-y-6 md:max-w-[840px]">
      <div class="grid grid-cols-2 gap-6 md:grid-cols-4">
        <a href="#description">
          <Button
            variant="outline"
            class="h-14 w-full text-sm font-normal"
            >Description</Button
          >
        </a>
        <a href="#instructor">
          <Button
            variant="outline"
            class="h-14 w-full text-sm font-normal"
            >Instructor</Button
          >
        </a>
        <a href="#syllabus">
          <Button
            variant="outline"
            class="h-14 w-full text-sm font-normal"
            >Syllabus</Button
          >
        </a>
        <a href="#reviews">
          <Button
            variant="outline"
            class="h-14 w-full text-sm font-normal"
            >Reviews</Button
          >
        </a>
      </div>
      <Divider />

      <div
        class="space-y-1"
        id="#description"
      >
        <h3>Course Overview</h3>
        <p class="text-sm">
          {{ courseStore.course.description }}
        </p>
      </div>
      <div class="space-y-1">
        <h3>Key Learning Objectives</h3>
        <ul class="list-inside list-disc gap-1">
          <li
            v-for="i in instructorStore.instructor.areasOfExpertise"
            :key="i"
          >
            {{ i }}
          </li>
        </ul>
      </div>

      <InstructorInformation
        :instructor="instructorStore.instructor"
        id="#instructor"
      />
    </div>
  </div>
  <div class="my-10 bg-thirdary-foreground py-10">
    <div class="container relative">
      <Carousel class="flex flex-col gap-6">
        <div
          class="relative flex flex-col items-center justify-center md:flex-row md:justify-between"
        >
          <h2 class="mb-10 text-thirdary md:mb-0 md:w-[308px]">
            More Courses by
            <span class="text-primary"
              >{{ instructorStore.instructor.firstName }}
              {{ instructorStore.instructor.lastName }}</span
            >
          </h2>

          <div
            class="w- relative mb-10 flex w-[136px] justify-between gap-6 md:mb-0"
          >
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
              v-for="card in courseStore.courses"
              :key="card.id"
              class="md:basis-2/4 lg:basis-1/4"
            >
              <CourseCard :card="card" />
            </CarouselItem>
          </CarouselContent>
        </div>
      </Carousel>
    </div>
  </div>

  <div
    class="container space-y-3 md:space-y-6"
    id="reviews"
  >
    <h4 class="text-xl font-semibold text-primary-foreground">
      Learner Reviews
    </h4>

    <div class="flex flex-col justify-between gap-5 md:flex-row md:gap-[140px]">
      <div class="flex flex-col gap-4">
        <div class="flex items-end gap-2">
          <h2 class="flex items-center gap-1 text-xl font-semibold">
            <StarIcon /> {{ courseStore.course.rating }}
          </h2>
          <p class="text-nowrap text-sm text-primary-foreground">
            {{ courseStore.course.numberOfRatings }} reviews
          </p>
        </div>
        <div class="flex flex-col gap-2">
          <StarsIcon
            v-for="item in stars"
            :key="item"
            :rating="item"
            @click="selectRating(item)"
            class="cursor-pointer rounded-xl transition-all duration-300 hover:border"
          />
        </div>
      </div>
      <div
        class="flex w-full flex-col gap-4"
        v-if="reviewStore.isLoading"
      >
        <ReviewCard2Skeleton
          class="w-full"
          v-for="review in 4"
          :key="review"
        />
        <ReviewsModal :reviews="filteredReviews" />
      </div>
      <div
        class="flex flex-col gap-4"
        v-else
      >
        <ReviewCard2
          v-for="review in filteredReviews"
          :key="review.id"
          :review="review"
        />
        <ReviewsModal :reviews="filteredReviews" />
      </div>
    </div>
  </div>
</template>
