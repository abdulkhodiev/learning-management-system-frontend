<script setup lang="ts">
import StarIcon from '@/assets/icons/StarIcon.vue';
import { defineProps } from 'vue';
import type { InstructorData } from '@/types/instructor';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps<{
  card: InstructorData;
}>();
</script>

<template>
  <Card
    @click="router.push(`/mentor/${props.card.id}`)"
    class="flex h-[281px] w-full max-w-[212px] cursor-pointer flex-col justify-between gap-[10px] rounded-2xl p-4 shadow-[0_0_8px_0_#3B82F61F]"
  >
    <CardHeader class="p-0">
      <img
        :src="props.card.profile"
        alt="Instructor Image"
      />
    </CardHeader>

    <CardContent class="flex h-full flex-col items-center justify-between p-0">
      <div class="flex flex-col items-center">
        <h3 class="text-[18px] font-semibold text-primary-foreground">
          {{ props.card.firstName }} {{ props.card.lastName }}
        </h3>
        <p class="text-sm text-primary-foreground">
          {{ props.card.profession }}
        </p>
      </div>
      <span class="h-[1px] w-full bg-[#E2E8F0]" />
      <div class="flex w-full items-center justify-between">
        <p
          class="flex items-center gap-1 text-xs font-semibold text-primary-foreground"
        >
          <StarIcon />
          <!-- {{ props.card.reviews }} -->
          5.0
        </p>
        <p class="text-xs font-semibold text-primary-foreground">
          {{ props.card.numberOfStudents }} students
        </p>
      </div>
    </CardContent>
  </Card>
</template>
