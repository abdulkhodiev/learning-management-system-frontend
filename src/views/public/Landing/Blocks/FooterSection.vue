<script setup lang="ts">
import {
  Facebook,
  Github,
  ChromeIcon,
  TwitterIcon,
  Instagram,
} from 'lucide-vue-next';
</script>

<template>
  <footer
    class="mt-[60px] flex h-full items-center justify-center bg-secondary py-10 md:h-[400px] md:p-0"
  >
    <div
      class="container flex flex-col justify-between gap-10 md:flex-row md:items-start"
    >
      <div class="space-y-4 md:w-[416px]">
        <div class="flex items-center space-x-2">
          <img
            src="@/assets/logo/logo.png"
            alt=""
          />
          <RouterLink
            to="/"
            class="text-white"
            >Byway</RouterLink
          >
        </div>
        <p class="text-sm text-[#CBD5E1]">
          Empowering learners through accessible and engaging online education.
          <br />
          Byway is a leading online learning platform dedicated to providing
          high-quality, flexible, and affordable educational experiences.
        </p>
      </div>
      <div class="space-y-4">
        <h5 class="text-lg font-semibold text-white">Get Help</h5>

        <div class="flex flex-col gap-2">
          <RouterLink
            to="/"
            class="text-sm text-[#CBD5E1]"
            >Contact Us</RouterLink
          >
          <RouterLink
            to="/"
            class="text-sm text-[#CBD5E1]"
            >Latest Articles</RouterLink
          >
          <RouterLink
            to="/"
            class="text-sm text-[#CBD5E1]"
            >FAQ</RouterLink
          >
        </div>
      </div>
      <div class="space-y-4">
        <h5 class="text-lg font-semibold text-white">Programs</h5>

        <div class="flex flex-col gap-2">
          <RouterLink
            to="/"
            class="text-sm text-[#CBD5E1]"
            >Art & Design</RouterLink
          >
          <RouterLink
            to="/"
            class="text-sm text-[#CBD5E1]"
            >Business</RouterLink
          >
          <RouterLink
            to="/"
            class="text-sm text-[#CBD5E1]"
            >IT & Software</RouterLink
          >
          <RouterLink
            to="/"
            class="text-sm text-[#CBD5E1]"
            >Languages</RouterLink
          >
          <RouterLink
            to="/"
            class="text-sm text-[#CBD5E1]"
            >Programming</RouterLink
          >
        </div>
      </div>
      <div class="space-y-4">
        <h5 class="text-lg font-semibold text-white">Contact Us</h5>

        <div class="space-y-4">
          <div class="flex flex-col gap-2">
            <RouterLink
              to="/"
              class="text-sm text-[#CBD5E1]"
              >Address: 123 Main Street, Anytown, CA 12345</RouterLink
            >
            <RouterLink
              to="/"
              class="text-sm text-[#CBD5E1]"
              >Tel: +(123) 456-7890</RouterLink
            >
            <RouterLink
              to="/"
              class="text-sm text-[#CBD5E1]"
              >Mail: bywayedu@webkul.in</RouterLink
            >
          </div>
          <div class="flex items-center space-x-2">
            <RouterLink
              to="/"
              class="text-sm text-[#CBD5E1]"
              ><Facebook class="inline-block text-[#CBD5E1]"
            /></RouterLink>
            <RouterLink
              to="/"
              class="text-sm text-[#CBD5E1]"
              ><Github class="inline-block text-[#CBD5E1]"
            /></RouterLink>
            <RouterLink
              to="/"
              class="text-sm text-[#CBD5E1]"
              ><ChromeIcon class="inline-block text-[#CBD5E1]"
            /></RouterLink>
            <RouterLink
              to="/"
              class="text-sm text-[#CBD5E1]"
              ><TwitterIcon class="inline-block text-[#CBD5E1]"
            /></RouterLink>
            <RouterLink
              to="/"
              class="text-sm text-[#CBD5E1]"
              ><Instagram class="inline-block text-[#CBD5E1]"
            /></RouterLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
