<script setup lang="ts">
import { Button } from '@/components/ui/button';
</script>

<template>
  <div class="container flex h-[calc(100vh-65px)] items-center justify-between">
    <div
      class="flex flex-col items-center space-y-5 md:w-[592px] md:items-start"
    >
      <h1
        class="text-center text-[40px] font-bold leading-[48px] text-thirdary md:w-[483px] md:text-start"
      >
        Unlock Your Potential with Byway
      </h1>
      <p class="text-center text-primary-foreground md:text-start">
        Welcome to Byway, where learning knows no bounds. We believe that
        education is the key to personal and professional growth, and we're here
        to guide you on your journey to success. Whether you're a student,
        professional, or lifelong learner, our cutting-edge Learning Management
        System is designed to elevate your learning experience.
      </p>
      <Button class="h-12 w-[238px] text-white"
        >Start your instructor journey</Button
      >
    </div>
    <img
      src="@/assets/banner/hero.png"
      class="hidden w-[50%] object-cover md:block"
    />
  </div>
</template>
