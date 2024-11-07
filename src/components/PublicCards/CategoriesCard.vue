<script setup lang="ts">
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { useRouter } from 'vue-router';

const router = useRouter();

defineProps({
  card: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <Card
    @click="router.push(`/categories/${card.id}`)"
    class="flex h-[224px] w-full cursor-pointer flex-col items-center justify-center gap-[10px] rounded-2xl shadow-[0_0_8px_0_#3B82F61F]"
  >
    <CardHeader
      class="flex size-[100px] items-center justify-center rounded-full bg-[#E0F2FE] text-primary"
    >
      <component :is="card.icon" />
    </CardHeader>
    <CardContent class="p-0">
      <h3 class="md:text-xl">{{ card.title }}</h3>
    </CardContent>
    <CardFooter class="p-0"> {{ card.desc }} </CardFooter>
  </Card>
</template>
