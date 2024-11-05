<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { ListFilter } from 'lucide-vue-next';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import CourseCard from '@/components/Cards/CourseCard.vue';
import InstructorCard from '@/components/Cards/InstructorCard.vue';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { courses, instructors } from '@/data';
import StarsIcon from '@/assets/icons/StarsIcon.vue';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const stars = [5, 4, 3, 2, 1];
const chapters = ['1-10', '10-15', '15-20'];

const selectedRating = ref(0);
const price = ref(5000);

const filteredCourses = computed(() => {
  return courses.filter(
    course =>
      course.rating >= selectedRating.value && course.price <= price.value
  );
});

const selectRating = (rating: number) => {
  selectedRating.value = rating;
};
</script>

<template>
  <div class="min-h-[calc(100vh-65px)] space-y-6 py-6">
    <div class="container space-y-6">
      <h1 class="text-[40px] font-bold text-thirdary">Design Courses</h1>
      <h2 class="text-2xl font-bold text-thirdary">All Development Courses</h2>
      <div class="flex items-center justify-between">
        <Button
          class="h-12 border-[1px] border-thirdary bg-transparent px-6 py-2.5 hover:bg-transparent"
        >
          <ListFilter class="mr-2" /> Filter
        </Button>
        <div class="flex items-center gap-4">
          <p class="text-nowrap text-[15px] text-primary-foreground">Sort by</p>
          <Select>
            <SelectTrigger
              class="h-12 border-[1px] border-thirdary px-6 py-2.5"
            >
              <SelectValue
                class="text-normal text-sm text-primary-foreground"
                placeholder="Relevance"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup
                class="flex flex-col items-center justify-center text-center"
              >
                <SelectItem
                  value="top-rated"
                  class="text-normal flex items-center justify-center p-2 text-sm text-primary-foreground"
                >
                  Top Rated
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>

    <div class="container flex justify-between gap-6">
      <div class="min-w-[300px]">
        <Accordion
          type="single"
          collapsible
        >
          <AccordionItem value="item-1">
            <AccordionTrigger class="[&>svg]:order-last">
              <p class="text-base">Rating</p>
            </AccordionTrigger>
            <AccordionContent>
              <div class="flex flex-col gap-2">
                <StarsIcon
                  v-for="item in stars"
                  :key="item"
                  :rating="item"
                  @click="selectRating(item)"
                  class="cursor-pointer rounded-xl transition-all duration-300 hover:border"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion
          type="single"
          collapsible
        >
          <AccordionItem value="item-2">
            <AccordionTrigger class="[&>svg]:order-last">
              <p class="text-base">Number of Chapters</p>
            </AccordionTrigger>
            <AccordionContent>
              <div class="flex flex-col gap-2">
                <div
                  v-for="item in chapters"
                  :key="item"
                  class="flex cursor-pointer items-center gap-2 p-2 text-base hover:underline"
                >
                  <input
                    type="checkbox"
                    class="h-4 w-4"
                  />
                  <label>{{ item }}</label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion
          type="single"
          collapsible
        >
          <AccordionItem value="item-3">
            <AccordionTrigger class="[&>svg]:order-last">
              <p class="text-base">Price</p>
            </AccordionTrigger>
            <AccordionContent>
              <div class="flex flex-col gap-2">
                <label class="text-base">Price Range: {{ price }}</label>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  v-model="price"
                  class="w-full"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div class="grid w-full grid-cols-2 gap-6 md:grid-cols-3">
        <CourseCard
          v-for="card in filteredCourses"
          :key="card.id"
          :card="card"
        />
      </div>
    </div>

    <div
      class="flex items-center justify-center bg-thirdary-foreground p-[60px]"
    >
      <div class="container space-y-6">
        <h2>Top Mentors</h2>
        <div class="flex items-center gap-6">
          <InstructorCard
            v-for="card in instructors"
            :key="card.id"
            :card="card"
            @click="router.push(`/mentor/${card.id}`)"
            class="cursor-pointer bg-white"
          />
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center p-[60px]">
      <div class="container space-y-6">
        <h2>Featured Courses</h2>
        <div class="flex items-center justify-between gap-6">
          <CourseCard
            v-for="card in courses.length > 4 ? courses.slice(0, 4) : courses"
            :key="card.id"
            :card="card"
            class="bg-white"
          />
        </div>
      </div>
    </div>
  </div>
</template>
