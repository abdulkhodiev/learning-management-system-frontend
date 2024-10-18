<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import ReviewCard2 from '../Cards/ReviewCard2.vue';
import { Button } from '../ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

defineProps({
  allReviews: {
    type: Array,

    required: true,
  },
});
</script>

<template>
  <Dialog class="max-w-full">
    <DialogTrigger as-child>
      <Button
        variant="outline"
        class="h-12 w-fit"
      >
        View more Reviews
      </Button>
    </DialogTrigger>
    <DialogContent class="max-h-[95svh]">
      <ScrollArea class="h-[90svh] w-full space-y-2 px-3">
        <DialogHeader>
          <DialogTitle class="mb-3">Reviews from learners</DialogTitle>
        </DialogHeader>

        <div class="grid w-full items-center gap-4">
          <ReviewCard2
            v-for="review in allReviews"
            :key="review.id"
            :review="review"
          />
        </div>
      </ScrollArea>
    </DialogContent>
  </Dialog>
</template>
Installation
