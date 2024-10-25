<script setup lang="ts">
import StarsIcon from '@/assets/icons/StarsIcon.vue';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import ReviewEditModal from '@/views/user/Profile/MyReviews/components/ReviewEditModal.vue';
import { Trash } from 'lucide-vue-next';

defineProps({
  review: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <Card
    class="flex w-full items-start justify-between gap-[10px] rounded-2xl p-4 shadow-[0_0_8px_0_#3B82F61F]"
  >
    <CardContent class="m-0 flex flex-col justify-between gap-1.5 p-0">
      <div class="flex gap-2">
        <p>Course Name:</p>
        <h4 class="text-lg font-semibold">{{ review.courseName }}</h4>
      </div>
      <div class="flex gap-2">
        <p>Rating:</p>
        <StarsIcon :rating="review.rating" />
      </div>
      <div class="flex gap-2">
        <p>Review:</p>
        <p class="p-0 text-primary-foreground">
          {{ review.text }}
        </p>
      </div>
    </CardContent>
    <CardFooter>
      <DropdownMenu>
        <DropdownMenuTrigger class="m-0 p-0 text-xl font-bold"
          >...</DropdownMenuTrigger
        >
        <DropdownMenuContent>
          <DropdownMenuItem><ReviewEditModal /> </DropdownMenuItem>
          <DropdownMenuItem><Trash class="mr-3" /> Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </CardFooter>
  </Card>
</template>
