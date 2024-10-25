<script setup lang="ts">
import { SearchIcon } from 'lucide-vue-next';
</script>

<template>
  <div class="relative">
    <span class="absolute left-2.5 top-2.5 text-primary-foreground">
      <SearchIcon class="size-5" />
    </span>
    <input
      class="h-10 w-full rounded-md border-[1px] border-primary-foreground pl-12 text-sm"
      type="text"
      placeholder="Search courses"
    />
  </div>
</template>
