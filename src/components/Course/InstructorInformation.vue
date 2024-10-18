<script lang="ts" setup>
import MedalIcon from '@/assets/icons/MedalIcon.vue';
import HatIcon from '@/assets/icons/HatIcon.vue';
import PlayIcon from '@/assets/icons/PlayIcon.vue';

defineProps({
  instructor: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <h4 class="text-xl font-semibold text-primary-foreground">Instructor</h4>
  <div>
    <RouterLink
      to="/"
      class="text-xl font-semibold text-primary"
      >{{ instructor.firstName }} {{ instructor.lastName }}</RouterLink
    >
    <p>{{ instructor.profession }}</p>
  </div>

  <div class="flex items-center gap-4">
    <img
      :src="instructor.profile"
      alt="profile"
      class="size-[120px] rounded-full"
    />
    <div class="space-y-2">
      <span class="flex items-center gap-1 text-sm text-primary-foreground"
        ><MedalIcon class="size-[24px]" />
        <p>{{ instructor.reviews }} Reviews</p></span
      >
      <span class="flex items-center gap-1 text-sm text-primary-foreground"
        ><HatIcon class="size-[24px]" />
        <p>{{ instructor.students }} Students</p></span
      >
      <span class="flex items-center gap-1 text-sm text-primary-foreground"
        ><PlayIcon class="size-[24px]" />
        <p>{{ instructor.courses }} Courses</p></span
      >
    </div>
  </div>

  <p class="text-primary-foreground">
    {{ instructor.description }}
  </p>
</template>
