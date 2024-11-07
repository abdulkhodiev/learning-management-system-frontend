<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-vue-next';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <section class="container space-y-[60px]">
    <div
      class="flex flex-col items-center justify-center md:flex-row md:justify-between"
    >
      <img
        src="@/assets/banner/WInstructor.png"
        alt="img"
        class="object-cover md:max-w-[40%]"
      />
      <div
        class="flex flex-col items-center space-y-[16px] pt-5 md:block md:max-w-[40%] md:p-0"
      >
        <h4
          class="text-center text-xl font-semibold text-thirdary md:text-start"
        >
          Become an Instructor
        </h4>
        <p class="text-center text-primary-foreground md:text-start">
          Instructors from around the world teach millions of students on Byway.
          We provide the tools and skills to teach what you love.
        </p>
        <Button
          class="bg-thirdary px-6 py-2.5 text-sm font-medium text-white"
          @click="router.push('/auth/signup')"
          >Start Your Instructor Journey
          <ArrowRight class="ml-2 text-white" />
        </Button>
      </div>
    </div>
    <div class="flex flex-col items-center justify-between md:flex-row">
      <div
        class="order-2 flex flex-col items-center space-y-[16px] pt-5 md:order-1 md:block md:max-w-[40%] md:p-0"
      >
        <h4
          class="text-center text-xl font-semibold text-thirdary md:text-start"
        >
          Transform your life through education
        </h4>
        <p class="text-center text-primary-foreground md:text-start">
          Learners around the world are launching new careers, advancing in
          their fields, and enriching their lives.
        </p>
        <Button
          class="bg-thirdary px-6 py-2.5 text-center text-sm font-medium text-white md:text-start"
          @click="router.push('/courses')"
          >Checkout Courses
          <ArrowRight class="ml-2 text-white" />
        </Button>
      </div>
      <img
        src="@/assets/banner/MInstructor.png"
        alt="img"
        class="order-1 object-cover md:order-2 md:max-w-[40%]"
      />
    </div>
  </section>
</template>
