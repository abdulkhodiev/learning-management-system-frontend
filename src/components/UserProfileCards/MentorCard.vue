<script setup lang="ts">
import { Button } from '@/components/ui/button';
import type { InstructorData } from '@/types/instructor';
import { Mail } from 'lucide-vue-next';
import { defineProps } from 'vue';

const props = defineProps<{
  card: InstructorData;
}>();
</script>

<template>
  <Card
    class="flex h-[281px] w-full max-w-[212px] cursor-pointer flex-col justify-between gap-[10px] rounded-2xl p-4 shadow-[0_0_8px_0_#3B82F61F]"
  >
    <CardHeader class="p-0">
      <img
        :src="card.profile"
        alt="Instructor Image"
      />
    </CardHeader>

    <CardContent class="flex h-full flex-col items-center justify-between p-0">
      <div class="flex flex-col items-center">
        <h3 class="text-[18px] font-semibold text-primary-foreground">
          {{ card.firstName }} {{ card.lastName }}
        </h3>
        <p class="text-sm text-primary-foreground">
          {{ card.profession }}
        </p>
      </div>
      <span class="h-[1px] w-full bg-[#E2E8F0]" />
      <Button class="w-full gap-2 text-sm font-medium text-white"
        >Send Message <Mail />
      </Button>
    </CardContent>
  </Card>
</template>
