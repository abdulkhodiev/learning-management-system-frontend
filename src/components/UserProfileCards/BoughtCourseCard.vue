<script setup lang="ts">
import ProgressIcon from '@/assets/icons/ProgressIcon.vue';
import StarsIcon from '@/assets/icons/StarsIcon.vue';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import type { CourseData } from '@/types/course';
import { useRouter } from 'vue-router';

const props = defineProps<{
  card: CourseData;
}>();
const router = useRouter();
</script>

<template>
  <Card
    @click="router.push(`/user/my-courses/${props.card.id}`)"
    class="flex w-full cursor-pointer flex-col gap-[10px] rounded-2xl p-4 shadow-[0_0_8px_0_#3B82F61F]"
  >
    <CardHeader class="p-0">
      <img
        :src="card.coverImage"
        alt="img"
      />
    </CardHeader>
    <CardContent class="flex h-full flex-col justify-between gap-2 p-0">
      <h3 class="font-semibold text-primary-foreground">
        {{ card.title }}
      </h3>
      <p class="text-sm text-primary-foreground">
        {{ card.instructor.firstName }} {{ card.instructor.lastName }}
      </p>
      <ProgressIcon
        class="text-primary"
        :data-value="30"
      />
      <div class="flex items-center gap-2">
        <StarsIcon :rating="card.rating" />
        <p class="text-sm text-primary-foreground">
          ({{ card.numberOfRatings }} Ratings)
        </p>
      </div>
    </CardContent>
  </Card>
</template>
