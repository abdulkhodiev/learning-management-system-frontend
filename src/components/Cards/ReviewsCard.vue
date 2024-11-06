<script setup lang="ts">
import QuotationIcon from '@/assets/icons/QuotationIcon.vue';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import CardFooter from '@/components/ui/card/CardFooter.vue';
import type { ReviewData } from '@/types/reviews';

const props = defineProps<{
  review: ReviewData;
}>();
</script>

<template>
  <Card
    class="flex w-[300px] flex-col justify-between gap-[10px] rounded-2xl p-6 shadow-[0_0_8px_0_#3B82F61F] md:h-[276px] md:w-[432px]"
  >
    <CardHeader class="p-0 text-primary">
      <QuotationIcon />
    </CardHeader>
    <CardContent class="m-0 flex flex-col justify-between p-0">
      <p class="p-0 text-primary-foreground">
        {{ props.review.reviewText }}
      </p>
    </CardContent>
    <CardFooter class="flex items-center gap-4 p-0">
      <img
        :src="props.review.profilePicture"
        alt="avatar"
        class="size-[60px] rounded-full"
      />
      <div>
        <h3 class="text-[18px] font-semibold text-primary-foreground">
          {{ props.review.firstName }} {{ props.review.lastName }}
        </h3>
      </div>
    </CardFooter>
  </Card>
</template>
