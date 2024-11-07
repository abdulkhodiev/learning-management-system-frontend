<script setup lang="ts">
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import CardFooter from '@/components/ui/card/CardFooter.vue';
import { Skeleton } from '@/components/ui/skeleton';
</script>

<template>
  <Card
    class="flex w-[300px] flex-col justify-between gap-[10px] rounded-2xl p-6 shadow-[0_0_8px_0_#3B82F61F] md:h-[276px] md:w-[432px]"
  >
    <CardHeader class="p-0 text-primary">
      <Skeleton class="h-6 w-6" />
    </CardHeader>
    <CardContent class="m-0 flex flex-col justify-between p-0">
      <Skeleton class="mt-2 h-4 w-full" />
      <Skeleton class="mt-2 h-4 w-5/6" />
      <Skeleton class="mt-2 h-4 w-4/6" />
    </CardContent>
    <CardFooter class="flex items-center gap-4 p-0">
      <Skeleton class="size-[60px] rounded-full" />
      <div>
        <Skeleton class="h-5 w-3/4 rounded" />
      </div>
    </CardFooter>
  </Card>
</template>
