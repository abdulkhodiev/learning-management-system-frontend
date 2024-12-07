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
import CourseCard from '@/components/PublicCards/CourseCard.vue';
import InstructorCard from '@/components/PublicCards/InstructorCard.vue';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { courses, instructors } from '@/data';
import StarsIcon from '@/assets/icons/StarsIcon.vue';
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { userCourseStore } from '@/stores/courses';
import CourseCardSkeleton from '@/components/PublicCardSkeletons/CourseCardSkeleton.vue';
import InstructorCardSkeleton from '@/components/PublicCardSkeletons/InstructorCardSkeleton.vue';
import { useInstructorStore } from '@/stores/instructors';

const courseStore = userCourseStore();
const instructorStore = useInstructorStore();

onMounted(() => {
  courseStore.getAllCourses();
  instructorStore.getAllInstructors();
});

const router = useRouter();

const stars = [5, 4, 3, 2, 1];
const chapters = ['1-10', '10-15', '15-20'];

const selectedRating = ref(0);
const price = ref(5000);

const filteredCourses = computed(() => {
  return courseStore.courses.filter(
    course =>
      course.rating >= selectedRating.value && course.price <= price.value
  );
});

const selectRating = (rating: number) => {
  selectedRating.value = rating;
};
</script>

<template>
  <div class="min-h-[calc(100vh-65px)] space-y-6 py-10">
    <div class="container space-y-3 md:space-y-6">
      <h1
        class="text-center text-xl font-bold text-thirdary md:text-start md:text-[40px]"
      >
        Design Courses
      </h1>
      <h2
        class="text-center text-lg font-bold text-thirdary md:text-start md:text-2xl"
      >
        All Development Courses
      </h2>
      <div class="flex items-center justify-between">
        <Button
          class="hidden h-12 border-[1px] border-thirdary bg-transparent px-6 py-2.5 hover:bg-transparent md:flex"
        >
          <ListFilter class="mr-2" /> Filter
        </Button>
        <Dialog>
          <DialogTrigger class="md:hidden">
            <Button
              class="h-12 border-[1px] border-thirdary bg-transparent px-6 py-2.5 hover:bg-transparent"
            >
              <ListFilter class="mr-2" /> Filter
            </Button>
          </DialogTrigger>
          <DialogContent>
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
          </DialogContent>
        </Dialog>
        <div class="flex items-center gap-4">
          <p
            class="hidden text-nowrap text-[15px] text-primary-foreground md:block"
          >
            Sort by
          </p>
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

    <div class="container flex w-full justify-between gap-6">
      <div class="hidden min-w-[300px] md:block">
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

      <div
        class="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
        v-if="courseStore.isLoading"
      >
        <CourseCardSkeleton
          class="w-full"
          v-for="i in 6"
          :key="i"
        />
      </div>
      <div
        class="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
        v-else
      >
        <CourseCard
          v-for="card in filteredCourses"
          :key="card.id"
          :card="card"
        />
      </div>
    </div>

    <div
      class="flex items-center justify-center bg-thirdary-foreground py-5 md:p-[60px]"
    >
      <div class="container space-y-6">
        <h2>Top Mentors</h2>
        <div
          class="grid w-full grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4"
          v-if="instructorStore.isLoading"
        >
          <InstructorCardSkeleton
            v-for="i in 4"
            :key="i"
          />
        </div>
        <div
          class="grid w-full grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4"
          v-else
        >
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

    <div class="flex items-center justify-center py-5 md:p-[60px]">
      <div class="container space-y-6">
        <h2>Featured Courses</h2>
        <div
          class="grid grid-cols-1 justify-between gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          v-if="courseStore.isLoading"
        >
          <CourseCardSkeleton
            v-for="i in 4"
            :key="i"
          />
        </div>
        <div
          class="grid grid-cols-1 justify-between gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          v-else
        >
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
