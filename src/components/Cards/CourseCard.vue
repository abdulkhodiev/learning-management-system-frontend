<script setup lang="ts">
import StarsIcon from '@/assets/icons/StarsIcon.vue';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useRouter } from 'vue-router';

defineProps({
  card: {
    type: Object,
    required: true,
  },
});

const router = useRouter();
</script>

<template>
  <Card
    @click="router.push(`/courses/${card.id}`)"
    class="flex h-[338px] w-full cursor-pointer flex-col gap-[10px] rounded-2xl p-4 shadow-[0_0_8px_0_#3B82F61F]"
  >
    <CardHeader class="p-0">
      <img
        :src="card.img"
        alt="img"
      />
    </CardHeader>
    <CardContent class="flex h-full flex-col justify-between p-0">
      <h3 class="font-semibold text-primary-foreground">
        {{ card.title }}
      </h3>
      <p class="text-sm text-primary-foreground">{{ card.author }}</p>
      <div class="flex items-center gap-2">
        <StarsIcon :rating="card.rating" />
        <p class="text-sm text-primary-foreground">
          ({{ card.numberOfRatings }} Ratings)
        </p>
      </div>
      <p class="text-sm text-primary-foreground">{{ card.duration }}</p>
      <h3 class="text-[20px] text-primary-foreground">${{ card.price }}</h3>
    </CardContent>
  </Card>
</template>
