<script setup lang="ts">
import { aboutUs } from '../data';
</script>

<template>
  <section
    class="flex w-full items-center justify-center bg-thirdary-foreground py-10 md:h-[149px]"
  >
    <div
      class="container grid grid-cols-2 justify-between gap-20 text-primary-foreground md:grid-cols-4 md:gap-0"
    >
      <div
        v-for="(item, index) in aboutUs"
        :key="item.number"
        :class="[
          'flex w-full flex-col items-center space-y-3 border-0 md:border-x-2 md:border-[#E2E8F0]',
          index === 0 ? 'md:border-l-0' : '',
          index === aboutUs.length - 1 ? 'md:border-r-0' : '',
        ]"
      >
        <h2 class="text-center text-[32px] font-semibold">
          {{ item.number }}
        </h2>
        <p class="text-center text-sm">
          {{ item.title }}
        </p>
      </div>
    </div>
  </section>
</template>
