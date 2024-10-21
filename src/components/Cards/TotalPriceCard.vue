<script lang="ts" setup>
import { Card, CardContent } from '@/components/ui/card';
</script>

<template>
  <Card class="w-[330px] bg-thirdary-foreground p-4">
    <CardContent class="p-0">
      <div class="flex flex-col gap-4">
        <div
          v-for="i in 3"
          :key="i"
          class="flex items-center justify-between gap-2"
        >
          <p class="text-sm text-primary-foreground">Price</p>
          <p class="text-lg font-semibold text-primary-foreground">$300</p>
        </div>
        <Divider />
        <div class="flex items-center justify-between gap-2">
          <h5 class="text-xl font-semibold text-primary-foreground">Total</h5>
          <p class="text-lg font-semibold text-primary-foreground">$300</p>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
