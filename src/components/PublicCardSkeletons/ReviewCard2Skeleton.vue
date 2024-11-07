<script setup lang="ts">
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
</script>

<template>
  <Card
    class="w-full justify-between gap-10 rounded-2xl p-6 shadow-[0_0_8px_0_#3B82F61F] md:flex md:gap-[10px]"
  >
    <CardHeader class="flex w-full p-0">
      <div class="mb-5 flex items-center gap-3 md:mb-0">
        <Skeleton class="size-[60px] rounded-full" />
        <Skeleton class="h-5 w-1/2 rounded" />
      </div>
    </CardHeader>
    <CardContent class="m-0 flex flex-col justify-between gap-1.5 p-0">
      <div class="flex items-center gap-4">
        <Skeleton class="h-5 w-1/5 rounded" />
        <Skeleton class="h-4 w-1/4 rounded" />
      </div>
      <Skeleton class="mt-2 h-4 w-full rounded" />
      <Skeleton class="h-4 w-5/6 rounded" />
    </CardContent>
  </Card>
</template>
