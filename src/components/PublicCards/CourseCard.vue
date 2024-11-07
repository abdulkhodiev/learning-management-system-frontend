<script setup lang="ts">
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
    @click="router.push(`/courses/${props.card.id}`)"
    class="flex w-full cursor-pointer flex-col gap-[10px] rounded-2xl p-4 shadow-[0_0_8px_0_#3B82F61F] md:h-[338px]"
  >
    <CardHeader class="p-0">
      <img
        :src="props.card.coverImage"
        alt="img"
      />
    </CardHeader>
    <CardContent class="flex h-full flex-col justify-between p-0">
      <h3 class="font-semibold text-primary-foreground">
        {{ card.title }}
      </h3>
      <p class="text-sm text-primary-foreground">
        <!-- By {{ props.card.instructor.firstName }}
        {{ props.card.instructor.lastName }} -->
        Olim Olimov
      </p>
      <div class="flex items-center gap-2">
        <StarsIcon :rating="props.card.rating" />
        <p class="text-sm font-semibold text-primary-foreground">
          ({{ card.numberOfRatings }} Ratings)
        </p>
      </div>
      <p class="text-sm text-primary-foreground">
        {{ props.card.duration }} Total Hours.
        {{ props.card.lectures }} Lectures
      </p>
      <h3 class="text-[20px] text-primary-foreground">
        ${{ props.card.price }}
      </h3>
    </CardContent>
  </Card>
</template>
