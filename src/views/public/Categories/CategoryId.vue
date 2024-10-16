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
import { topCourses } from '../Landing/data';
import CourseCard from '@/components/Cards/CourseCard.vue';
import InstructorCard from '@/components/Cards/InstructorCard.vue';
import { topInstructors } from '../Landing/data';
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
        </div>
      </div>
    </div>
    <div class="container flex justify-between gap-6">
      <div class="min-w-[300px]">Ranking</div>
      <div class="grid w-full grid-cols-2 gap-6 md:grid-cols-3">
        <CourseCard
          v-for="card in topCourses"
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
        <div class="flex items-center justify-between gap-6">
          <InstructorCard
            v-for="card in topInstructors"
            :key="card.id"
            :card="card"
            class="bg-white"
          />
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center p-[60px]">
      <div class="container space-y-6">
        <h2>Featured Courses</h2>
        <div class="flex items-center justify-between gap-6">
          <CourseCard
            v-for="card in topCourses"
            :key="card.id"
            :card="card"
            class="bg-white"
          />
        </div>
      </div>
    </div>
  </div>
</template>
