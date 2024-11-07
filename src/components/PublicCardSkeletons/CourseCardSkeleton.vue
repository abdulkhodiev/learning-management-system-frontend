<script setup lang="ts">
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
</script>

<template>
  <Card
    class="flex w-full cursor-pointer flex-col gap-[10px] rounded-2xl p-4 shadow-[0_0_8px_0_#3B82F61F] md:h-[338px]"
  >
    <CardHeader class="p-0">
      <Skeleton class="h-[180px] w-full rounded-lg" />
    </CardHeader>
    <CardContent class="flex h-full flex-col justify-between p-0">
      <Skeleton class="h-6 w-3/4 rounded" />
      <Skeleton class="mt-2 h-4 w-1/2 rounded" />
      <div class="mt-2 flex items-center gap-2">
        <Skeleton class="h-4 w-1/4 rounded" />
        <Skeleton class="h-4 w-1/4 rounded" />
      </div>
      <Skeleton class="mt-2 h-4 w-1/2 rounded" />
      <Skeleton class="mt-4 h-8 w-1/3 rounded" />
    </CardContent>
  </Card>
</template>
