<script lang="ts" setup>
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import SearchInput from '@/components/SearchInput.vue';
import BoughtCourseCard from '@/components/Cards/UserProfileCards/BoughtCourseCard.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';
import { computed, ref } from 'vue';
import { courses } from '@/data';
import StarsIcon from '@/assets/icons/StarsIcon.vue';

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
  <div class="w-full space-y-4 pb-10">
    <h2>Courses</h2>
    <div class="flex items-center justify-between">
      <SearchInput class="hidden w-full max-w-[330px] md:block" />
      <div class="flex items-center justify-between">
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
            <SelectContent class="">
              <SelectGroup
                class="flex flex-col items-center justify-center text-center"
              >
                <SelectItem
                  value="apple"
                  class="text-normal flex items-center justify-center p-2 text-sm text-primary-foreground"
                >
                  Top Rated
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
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
                        <label class="text-base"
                          >Price Range: {{ price }}</label
                        >
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
        </div>
      </div>
    </div>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <BoughtCourseCard
        v-for="course in filteredCourses"
        :key="course.id"
        :card="course"
      />
    </div>
    <div class="flex justify-center">
      <PaginationComponent />
    </div>
  </div>
</template>
