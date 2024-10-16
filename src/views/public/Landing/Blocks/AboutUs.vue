<script setup lang="ts">
import { aboutUs } from '../data';
</script>

<template>
  <section
    class="flex h-[149px] w-full items-center justify-center bg-thirdary-foreground"
  >
    <div
      class="container flex items-center justify-between text-primary-foreground"
    >
      <div
        v-for="(item, index) in aboutUs"
        :key="item.number"
        :class="[
          'flex w-full flex-col items-center space-y-3 border-x-2 border-[#E2E8F0]',
          index === 0 ? 'border-l-0' : '',
          index === aboutUs.length - 1 ? 'border-r-0' : '',
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
