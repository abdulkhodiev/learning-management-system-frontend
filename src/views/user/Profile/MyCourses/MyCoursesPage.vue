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
import SearchInput from '@/components/SearchInput.vue';
import { topCourses } from '@/views/public/Landing/data';
import BoughtCourseCard from '@/components/Cards/UserProfileCards/BoughtCourseCard.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';
</script>

<template>
  <div class="w-full space-y-4">
    <h2>Courses</h2>
    <div class="flex items-center justify-between">
      <SearchInput class="w-full max-w-[330px]" />
      <div class="flex items-center justify-between">
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
          <Button
            class="h-12 border-[1px] border-thirdary bg-transparent px-6 py-2.5 hover:bg-transparent"
          >
            <ListFilter class="mr-2" /> Filter
          </Button>
        </div>
      </div>
    </div>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <BoughtCourseCard
        v-for="course in topCourses"
        :key="course.id"
        :card="course"
      />
    </div>
    <div class="flex justify-center">
      <PaginationComponent />
    </div>
  </div>
</template>
