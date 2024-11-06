<script setup lang="ts">
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import CourseCard from '@/components/Cards/CourseCard.vue';
import StarsIcon from '@/assets/icons/StarsIcon.vue';
import ReviewCard2 from '@/components/Cards/ReviewCard2.vue';
import ReviewsModal from '@/components/Course/ReviewsModal.vue';
import { useInstructorStore } from '@/stores/instructors';
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { instructors, reviews as allReviews, courses } from '@/data';
import { userCourseStore } from '@/stores/courses';

const router = useRouter();
const instructorId = router.currentRoute.value.params.mentorId as string;

const instructorStore = useInstructorStore();
onMounted(() => {
  instructorStore.getInstructorById(instructorId);
});

const courseStore = userCourseStore();

onMounted(() => {
  courseStore.getAllCourses();
});

const course = courses[1];

const instructor = instructors[0];

const selectedRating = ref(0);
const selectRating = (rating: number) => {
  selectedRating.value = rating;
};

const filteredReviews = computed(() => {
  return allReviews.filter(review => review.rating >= selectedRating.value);
});

const stars = [5, 4, 3, 2, 1];
</script>

<template>
  <div class="space-y-8 py-10">
    <div class="container flex flex-col justify-between gap-3 lg:flex-row">
      <div class="order-2 max-w-[840px] space-y-10 lg:order-1">
        <div class="space-y-4">
          <p>Instructor</p>
          <div>
            <h2 class="pb-2 text-[32px] font-semibold">
              {{ instructor.firstName }} {{ instructor.lastName }}
            </h2>
            <p>{{ instructor.profession }}</p>
          </div>
          <div class="flex max-w-[270px] items-center justify-between gap-6">
            <div class="">
              <p>Total Students</p>
              <h5 class="text-2xl font-semibold">
                {{ instructor.numberOfStudents }}
              </h5>
            </div>
            <div>
              <p>Reviews</p>
              <h5 class="text-2xl font-semibold">
                {{ instructor.numberOfReviews }}
              </h5>
            </div>
          </div>
        </div>
        <div class="space-y-4">
          <div class="space-y-1">
            <h3>About {{ instructor.firstName }} {{ instructor.lastName }}</h3>
            <p class="text-base">
              {{ instructor.description }}
            </p>
          </div>
          <div class="space-y-1">
            <h3>Areas of Expertise</h3>
            <ul class="list-inside list-disc">
              <li
                v-for="i in instructor.areasOfExpertise"
                :key="i"
                class="text-primary-foreground"
              >
                {{ i }}
              </li>
            </ul>
          </div>
          <div class="space-y-1">
            <h3>Professional Experience</h3>
            <p class="text-base">
              {{ instructor.professionalExperience }}
            </p>
          </div>
        </div>
      </div>
      <div class="order-1 flex flex-col items-center space-y-4 lg:order-2">
        <img
          :src="instructor.profile"
          alt="img"
          class="size-[200px] rounded-full object-cover"
        />
        <div class="space-y-2">
          <Button
            variant="outline"
            class="h-12 w-full border-[1px] border-thirdary text-sm"
            >Website</Button
          >
          <Button
            variant="outline"
            class="h-12 w-full border-[1px] border-thirdary text-sm"
            >Twitter</Button
          >
          <Button
            variant="outline"
            class="h-12 w-full border-[1px] border-thirdary text-sm"
            >Youtube</Button
          >
        </div>
      </div>
    </div>
    <div
      class="flex w-full items-center justify-center bg-thirdary-foreground py-10 md:h-[512px] md:py-0"
    >
      <div class="container relative">
        <Carousel class="flex flex-col gap-6">
          <div
            class="relative flex flex-col items-center justify-center md:flex-row md:justify-between"
          >
            <h2
              class="mb-10 text-center text-thirdary md:mb-0 md:w-[308px] md:text-start"
            >
              More Courses by
              <span class="text-primary"
                >{{ instructor.firstName }} {{ instructor.lastName }}</span
              >
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
          <div class="mt-5 md:mt-0">
            <CarouselContent>
              <CarouselItem
                v-for="card in instructor.courses"
                :key="card.id"
                class="basis-2/2 md:basis-1/3 lg:basis-1/4"
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

      <div
        class="flex flex-col justify-between gap-5 md:flex-row md:gap-[140px]"
      >
        <div class="flex flex-col gap-4">
          <div class="flex items-end gap-2">
            <h2 class="flex items-center gap-1 text-xl font-semibold">
              <StarIcon /> {{ course.rating }}
            </h2>
            <p class="text-nowrap text-sm text-primary-foreground">
              {{ course.numberOfRatings }} reviews
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
        <div class="flex flex-col gap-4">
          <ReviewCard2
            v-for="review in filteredReviews"
            :key="review.id"
            :review="review"
          />
          <ReviewsModal :reviews="filteredReviews" />
        </div>
      </div>
    </div>
    <ReviewSection class="my-10" />
  </div>
</template>
