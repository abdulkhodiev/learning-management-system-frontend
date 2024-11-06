<script setup lang="ts">
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import FacebookIcon from '@/assets/icons/FacebookIcon.vue';
import GoogleIcon from '@/assets/icons/GoogleIcon.vue';
import MicrosoftIcon from '@/assets/icons/MicrosoftIcon.vue';
import StarsIcon from '@/assets/icons/StarsIcon.vue';
import { Globe } from 'lucide-vue-next';

import InstructorInformation from '@/components/Course/InstructorInformation.vue';
import { courseSyllabus } from '../Landing/data';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import PlayIcon from '@/assets/icons/PlayIcon.vue';
import { useRouter } from 'vue-router';
import StarIcon from '@/assets/icons/StarIcon.vue';
import ReviewCard2 from '@/components/Cards/ReviewCard2.vue';
import ReviewSection from '../Landing/Blocks/ReviewSection.vue';
import ReviewsModal from '@/components/Course/ReviewsModal.vue';
import CourseCard from '@/components/Cards/CourseCard.vue';
import { userCourseStore } from '@/stores/courses';
import { computed, onMounted, ref } from 'vue';
import { courses, instructors, reviews } from '@/data';
import { useInstructorStore } from '@/stores/instructors';
import { useReviewStore } from '@/stores/reviews';

// Router Usage
const router = useRouter();
const courseId = router.currentRoute.value.params.courseId as string;

const course = courses[1];

// CourseStore Usage
const courseStore = userCourseStore();

onMounted(() => {
  courseStore.getCourseById(courseId);
});

// InstructorStore Usage
const instructorStore = useInstructorStore();

onMounted(() => {
  instructorStore.getInstructorById(course.instructor.id);
});

const instructor = instructors[0];

// ReviewStore Usage
const reviewStore = useReviewStore();

onMounted(() => {
  reviewStore.getReviewsByCourseId(courseId);
});

const allReviews = reviews;

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
  <div class="container flex justify-between space-y-6 py-6">
    <div
      class="absolute inset-0 z-[-1] h-0 w-full bg-thirdary-foreground lg:h-[542px] xl:h-[451px]"
    />
    <div class="max-w-[840px] space-y-10">
      <div class="space-y-6">
        <Breadcrumb>
          <BreadcrumbList class="flex items-center gap-2">
            <BreadcrumbItem>
              <BreadcrumbLink href="/"> Home </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/categories"> Categories </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{{ course.title }}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Card
          class="top-20 flex h-max w-full flex-col gap-7 rounded-2xl py-4 shadow-[0_0_8px_0_#3B82F61F] lg:hidden"
        >
          <CardHeader class="px-4 py-0">
            <img
              :src="course.coverImage"
              alt="img"
              class="h-full w-full object-cover"
            />
          </CardHeader>
          <CardContent
            class="flex h-full flex-col justify-between gap-6 p-0 px-4"
          >
            <div class="flex items-center gap-[13px]">
              <h3 class="text-2xl font-semibold text-primary-foreground">
                ${{ course.price - course.price * 0.5 }}
              </h3>
              <h3 class="text-[18px] text-[#94A3B8] line-through">
                ${{ course.price }}
              </h3>
              <h3 class="text-2xl font-semibold text-[#16A34A]">50% Off</h3>
            </div>
            <div class="flex flex-col gap-4">
              <Button
                class=":hover:bg-thirdary h-12 w-full bg-thirdary text-sm text-white"
              >
                Add To Cart</Button
              >
              <Button
                variant="outline"
                class="h-12 w-full border-[1px] border-thirdary text-sm"
                >Buy Now</Button
              >
            </div>
          </CardContent>
          <CardContent class="p-0"
            ><div class="h-[1px] w-full bg-thirdary-foreground"
          /></CardContent>
          <CardFooter class="m-0 flex flex-col items-start gap-4 px-4 py-0">
            <p class="text-primary-foreground">Share</p>
            <div class="flex gap-3">
              <FacebookIcon
                class="size-10 rounded-full border-[2px] border-thirdary-foreground p-1"
              />
              <MicrosoftIcon
                class="size-10 rounded-full border-[2px] border-thirdary-foreground p-1"
              />
              <GoogleIcon
                class="size-10 rounded-full border-[2px] border-thirdary-foreground p-1"
              /></div
          ></CardFooter>
        </Card>
        <h1
          class="line-clamp-2 text-[40px] font-bold leading-[48px] text-thirdary"
        >
          {{ course.title }}
        </h1>
        <p class="line-clamp-3 text-primary-foreground">
          {{ course.description }}
        </p>
        <div class="flex flex-col gap-3 text-sm md:flex-row md:items-center">
          <div class="flex items-center gap-2">
            <p class="text-[#FEC84B]">4.6</p>
            <StarsIcon :rating="4.6" />
            <p class="border-thirdary pr-2 md:border-r-[1px]">
              ({{ course.numberOfRatings }} ratings)
            </p>
          </div>

          <p>
            {{ course.duration }} Total Hours. {{ course.lectures }} Lectures.
            All levels
          </p>
        </div>
        <div class="font- flex items-center gap-2 text-sm">
          <img
            :src="instructor.profile"
            alt="img"
            class="size-10 rounded-full object-cover"
          />
          <p>
            Created by
            <RouterLink
              class="text-primary"
              to="/"
            >
              {{ course.instructor.firstName }}
              {{ course.instructor.lastName }}</RouterLink
            >
          </p>
        </div>
        <div class="flex items-center gap-3 text-sm">
          <Globe />
          <p
            class="text-primary-foreground"
            v-for="lan in course.languages"
            :key="lan.id"
          >
            {{ lan.name }}
          </p>
        </div>
      </div>
      <div class="space-y-6">
        <div class="grid grid-cols-2 gap-6 md:grid-cols-4">
          <a href="#description">
            <Button
              variant="outline"
              class="h-14 w-full text-sm font-normal md:w-[148px]"
              >Description</Button
            >
          </a>
          <a href="#instructor">
            <Button
              variant="outline"
              class="h-14 w-full text-sm font-normal md:w-[148px]"
              >Instructor</Button
            >
          </a>
          <a href="#syllabus">
            <Button
              variant="outline"
              class="h-14 w-full text-sm font-normal md:w-[148px]"
              >Syllabus</Button
            >
          </a>
          <a href="#reviews">
            <Button
              variant="outline"
              class="h-14 w-full text-sm font-normal md:w-[148px]"
              >Reviews</Button
            >
          </a>
        </div>
        <div class="h-[1px] w-full bg-[#E2E8F0]" />
        <div
          class="space-y-1"
          id="description"
        >
          <h4 class="text-xl font-semibold text-primary-foreground">
            Course Description
          </h4>
          <p class="text-primary-foreground">
            {{ course.description }}
          </p>
        </div>
        <div class="space-y-1">
          <h4 class="text-xl font-semibold text-primary-foreground">
            Certification
          </h4>
          <p class="text-primary-foreground">
            {{ course.description }}
          </p>
        </div>
        <div class="h-[1px] w-full bg-[#E2E8F0]" />

        <div id="instructor">
          <InstructorInformation :instructor="instructor" />
        </div>

        <div class="h-[1px] w-full bg-[#E2E8F0]" />

        <h4
          class="text-xl font-semibold text-primary-foreground"
          id="syllabus"
        >
          Syllabus
        </h4>

        <Accordion
          class="rounded-[8px] border-[1px] border-[#E2E8F0] text-primary-foreground"
          type="single"
          collapsible
        >
          <AccordionItem
            class="px-6 py-2"
            v-for="section in courseSyllabus"
            :key="section.title"
            :value="section.title"
            :class="section.title === 'Section 4' ? 'border-b-0' : ''"
          >
            <AccordionTrigger
              class="flex w-full justify-start gap-4 hover:no-underline"
              ><div class="flex w-full items-center justify-between gap-4">
                <h3 class="truncate text-lg font-semibold">
                  {{ section.title }}
                </h3>
                <div class="flex flex-col items-center gap-2 md:flex-row">
                  <p
                    class="text-nowrap text-sm text-primary-foreground md:border-r-[1px] md:pr-2"
                  >
                    {{ course.duration }} Hours
                  </p>
                  <p class="text-nowrap text-sm text-primary-foreground">
                    {{ course.duration }} Lectures
                  </p>
                </div>
              </div></AccordionTrigger
            >
            <AccordionContent>
              <ul>
                <li
                  @click="router.push(`/course/${courseId}/video/${item.id}`)"
                  v-for="item in section.videos"
                  :key="item.id"
                  class="flex cursor-pointer items-center gap-2 py-2 hover:underline"
                >
                  <PlayIcon class="h-4 w-4" />{{ item.title }}
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div class="h-[1px] w-full bg-[#E2E8F0]" />
      </div>
    </div>

    <!-- Course Buy Card -->
    <Card
      class="sticky top-20 hidden h-max min-w-[400px] cursor-pointer flex-col gap-7 rounded-2xl py-4 shadow-[0_0_8px_0_#3B82F61F] lg:flex"
    >
      <CardHeader class="px-4 py-0">
        <img
          :src="course.coverImage"
          alt="img"
          class="h-full w-full object-cover"
        />
      </CardHeader>
      <CardContent class="flex h-full flex-col justify-between gap-6 p-0 px-4">
        <div class="flex items-center gap-[13px]">
          <h3 class="text-2xl font-semibold text-primary-foreground">
            ${{ course.price - course.price * 0.5 }}
          </h3>
          <h3 class="text-[18px] text-[#94A3B8] line-through">
            ${{ course.price }}
          </h3>
          <h3 class="text-2xl font-semibold text-[#16A34A]">50% Off</h3>
        </div>
        <div class="flex flex-col gap-4">
          <Button
            class=":hover:bg-thirdary h-12 w-full bg-thirdary text-sm text-white"
          >
            Add To Cart</Button
          >
          <Button
            variant="outline"
            class="h-12 w-full border-[1px] border-thirdary text-sm"
            >Buy Now</Button
          >
        </div>
      </CardContent>
      <CardContent class="p-0"
        ><div class="h-[1px] w-full bg-thirdary-foreground"
      /></CardContent>
      <CardFooter class="m-0 flex flex-col items-start gap-4 px-4 py-0">
        <p class="text-primary-foreground">Share</p>
        <div class="flex gap-3">
          <FacebookIcon
            class="size-10 rounded-full border-[2px] border-thirdary-foreground p-1"
          />
          <MicrosoftIcon
            class="size-10 rounded-full border-[2px] border-thirdary-foreground p-1"
          />
          <GoogleIcon
            class="size-10 rounded-full border-[2px] border-thirdary-foreground p-1"
          /></div
      ></CardFooter>
    </Card>
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

  <div class="container space-y-6 py-10">
    <h4 class="text-xl font-semibold text-primary-foreground">
      More Courses Like This
    </h4>

    <div
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <CourseCard
        v-for="card in courses"
        :key="card.id"
        :card="card"
      />
    </div>
  </div>
</template>
