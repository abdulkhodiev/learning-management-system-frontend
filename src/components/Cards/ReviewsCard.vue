<script setup lang="ts">
import QuotationIcon from '@/assets/icons/QuotationIcon.vue';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import CardFooter from '@/components/ui/card/CardFooter.vue';

const review = defineProps({
  text: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  profileImg: {
    type: String,
    required: true,
  },
  authorsProfession: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <Card
    class="flex h-[276px] w-[432px] flex-col justify-between gap-[10px] rounded-2xl p-6 shadow-[0_0_8px_0_#3B82F61F]"
  >
    <CardHeader class="p-0 text-primary">
      <QuotationIcon />
    </CardHeader>
    <CardContent class="m-0 flex flex-col justify-between p-0">
      <p class="p-0 text-primary-foreground">
        {{ review.text }}
      </p>
    </CardContent>
    <CardFooter class="flex items-center gap-4 p-0">
      <img
        :src="review.profileImg"
        alt="avatar"
        class="size-[60px] rounded-full"
      />
      <div>
        <h3 class="text-[18px] font-semibold text-primary-foreground">
          {{ review.author }}
        </h3>
        <p class="text-sm text-primary-foreground">
          {{ review.authorsProfession }}
        </p>
      </div>
    </CardFooter>
  </Card>
</template>
