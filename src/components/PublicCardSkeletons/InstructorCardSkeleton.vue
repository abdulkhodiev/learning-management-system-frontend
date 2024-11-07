<script setup lang="ts">
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
</script>

<template>
  <Card
    class="flex h-[281px] w-full max-w-[212px] cursor-pointer flex-col justify-between gap-[10px] rounded-2xl p-4 shadow-[0_0_8px_0_#3B82F61F]"
  >
    <CardHeader class="p-0">
      <Skeleton class="h-[100px] w-full rounded-lg" />
    </CardHeader>

    <CardContent class="flex h-full flex-col items-center justify-between p-0">
      <div class="flex flex-col items-center">
        <Skeleton class="h-5 w-3/4 rounded" />
        <Skeleton class="mt-2 h-4 w-1/2 rounded" />
      </div>
      <span class="h-[1px] w-full bg-[#E2E8F0]" />
      <div class="flex w-full items-center justify-between">
        <Skeleton class="h-4 w-1/4 rounded" />
        <Skeleton class="h-4 w-1/4 rounded" />
      </div>
    </CardContent>
  </Card>
</template>
