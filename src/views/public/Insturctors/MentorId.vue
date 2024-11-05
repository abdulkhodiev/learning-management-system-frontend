<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { review2 } from '../Landing/data';
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
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { instructors } from '@/data';

const router = useRouter();
const instructorId = router.currentRoute.value.params.mentorId as string;

const instructorStore = useInstructorStore();
onMounted(() => {
  instructorStore.getInstructorById(instructorId);
});

const instructor = instructors[0];

const reviews = [5, 4, 3, 2, 1];
</script>

<template>
  <div class="space-y-8 py-10">
    <div class="container flex justify-between">
      <div class="max-w-[840px] space-y-10">
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
      <div class="flex flex-col items-center space-y-4">
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
      class="flex h-[512px] w-full items-center justify-center bg-thirdary-foreground"
    >
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
                v-for="card in instructor.courses"
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
            <p class="text-sm text-primary-foreground"></p>
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
            v-for="review in instructor.reviews"
            :key="review.id"
            :review="review"
          />
          <ReviewsModal :allReviews="review2" />
        </div>
      </div>
    </div>
    <ReviewSection class="my-10" />
  </div>
</template>
