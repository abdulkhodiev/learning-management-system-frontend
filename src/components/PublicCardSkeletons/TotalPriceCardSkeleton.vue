<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card';
import { Divider } from '../Divider';
import { Skeleton } from '@/components/ui/skeleton';
</script>

<template>
  <Card class="min-w-[330px] bg-thirdary-foreground p-4">
    <CardContent class="p-0">
      <div class="flex flex-col gap-4">
        <div
          v-for="i in 3"
          :key="i"
          class="flex items-center justify-between gap-2"
        >
          <Skeleton class="h-4 w-1/3 rounded" />
          <Skeleton class="h-6 w-1/4 rounded" />
        </div>
        <Divider />
        <div class="flex items-center justify-between gap-2">
          <Skeleton class="h-6 w-1/3 rounded" />
          <Skeleton class="h-6 w-1/4 rounded" />
        </div>
      </div>
    </CardContent>
  </Card>
</template>
