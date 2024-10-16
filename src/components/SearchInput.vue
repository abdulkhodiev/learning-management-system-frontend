<script setup lang="ts">
import { SearchIcon } from 'lucide-vue-next'
</script>

<template>
  <div class="relative">
    <span class="absolute top-2.5 left-2.5 text-primary-foreground">
      <SearchIcon class="size-5" />
    </span>
    <input
      class="h-10 border-primary-foreground border-[1px] rounded-md text-sm md:w-[622px] pl-12"
      type="text"
      placeholder="Search courses"
    />
  </div>
</template>
