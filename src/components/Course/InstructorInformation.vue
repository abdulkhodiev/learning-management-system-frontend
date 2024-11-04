<script lang="ts" setup>
import MedalIcon from '@/assets/icons/MedalIcon.vue';
import HatIcon from '@/assets/icons/HatIcon.vue';
import PlayIcon from '@/assets/icons/PlayIcon.vue';
import type { InstructorData } from '@/types/instructor';

const props = defineProps<{
  instructor: InstructorData;
}>();
</script>

<template>
  <h4 class="text-xl font-semibold text-primary-foreground">Instructor</h4>
  <div>
    <RouterLink
      to="/"
      class="text-xl font-semibold text-primary"
      >{{ props.instructor.firstName }}
      {{ props.instructor.lastName }}</RouterLink
    >
    <p>{{ props.instructor.profession }}</p>
  </div>

  <div class="flex items-center gap-4">
    <img
      :src="props.instructor.profile"
      alt="profile"
      class="size-[120px] rounded-full object-cover"
    />
    <div class="space-y-2">
      <span class="flex items-center gap-1 text-sm text-primary-foreground"
        ><MedalIcon class="size-[24px]" />
        <p>{{ props.instructor.numberOfReviews }} Reviews</p></span
      >
      <span class="flex items-center gap-1 text-sm text-primary-foreground"
        ><HatIcon class="size-[24px]" />
        <p>{{ props.instructor.numberOfStudents }} Students</p></span
      >
      <span class="flex items-center gap-1 text-sm text-primary-foreground"
        ><PlayIcon class="size-[24px]" />
        <p>{{ instructor.courses.length }} Courses</p></span
      >
    </div>
  </div>

  <p class="text-primary-foreground">
    {{ props.instructor.description }}
  </p>
</template>
