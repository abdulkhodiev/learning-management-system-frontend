<script setup lang="ts">
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { topCategories } from '../data';
</script>

<template>
  <section class="container space-y-[24px]">
    <div class="flex items-center justify-between">
      <h2>Top Categories</h2>
      <RouterLink
        to="/"
        class="px-6 py-2.5 text-sm text-primary"
        >See all</RouterLink
      >
    </div>
    <div class="flex w-full gap-6">
      <Card
        v-for="card in topCategories"
        :key="card.id"
        class="flex h-[224px] w-full flex-col items-center justify-center gap-[10px] rounded-2xl shadow-[0_0_8px_0_#3B82F61F]"
      >
        <CardHeader
          class="flex size-[100px] items-center justify-center rounded-full bg-[#E0F2FE] text-primary"
        >
          <component :is="card.icon" />
        </CardHeader>
        <CardContent class="p-0">
          <h3>{{ card.title }}</h3>
        </CardContent>
        <CardFooter class="p-0"> {{ card.desc }} </CardFooter>
      </Card>
    </div>
  </section>
</template>
