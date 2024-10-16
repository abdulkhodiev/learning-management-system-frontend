<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-vue-next';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <section class="container space-y-[60px]">
    <div class="flex items-center justify-between">
      <img
        src="@/assets/banner/WInstructor.png"
        alt="img"
        class="max-w-[40%] object-cover"
      />
      <div class="max-w-[40%] space-y-[16px]">
        <h4 class="text-xl font-semibold text-thirdary">
          Become an Instructor
        </h4>
        <p class="text-primary-foreground">
          Instructors from around the world teach millions of students on Byway.
          We provide the tools and skills to teach what you love.
        </p>
        <Button
          class="bg-thirdary px-6 py-2.5 text-sm font-medium text-white"
          @click="router.push('/')"
          >Start Your Instructor Journey
          <ArrowRight class="ml-2 text-white" />
        </Button>
      </div>
    </div>
    <div class="flex items-center justify-between">
      <div class="max-w-[40%] space-y-[16px]">
        <h4 class="text-xl font-semibold text-thirdary">
          Transform your life through education
        </h4>
        <p class="text-primary-foreground">
          Learners around the world are launching new careers, advancing in
          their fields, and enriching their lives.
        </p>
        <Button
          class="bg-thirdary px-6 py-2.5 text-sm font-medium text-white"
          @click="router.push('/')"
          >Checkout Courses
          <ArrowRight class="ml-2 text-white" />
        </Button>
      </div>
      <img
        src="@/assets/banner/MInstructor.png"
        alt="img"
        class="max-w-[40%] object-cover"
      />
    </div>
  </section>
</template>
