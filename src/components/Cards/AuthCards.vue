<script setup lang="ts">
import FacebookIcon from '@/assets/icons/FacebookIcon.vue';
import GoogleIcon from '@/assets/icons/GoogleIcon.vue';
import MicrosoftIcon from '@/assets/icons/MicrosoftIcon.vue';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <div class="flex w-full gap-4">
    <Card
      @click="router.push('/auth/login')"
      class="flex w-full cursor-pointer items-center justify-center gap-3 border-[1px] border-[#B2B5C4] p-5"
    >
      <CardHeader class="p-0">
        <FacebookIcon />
      </CardHeader>
      <CardContent class="p-0 text-primary">Facebook</CardContent>
    </Card>
    <Card
      @click="router.push('/auth/login')"
      class="flex w-full cursor-pointer items-center justify-center gap-3 border-[1px] border-[#B2B5C4] p-5"
    >
      <CardHeader class="p-0">
        <GoogleIcon />
      </CardHeader>
      <CardContent class="p-0 text-red-500">Google</CardContent>
    </Card>
    <Card
      @click="router.push('/auth/login')"
      class="flex w-full cursor-pointer items-center justify-center gap-3 border-[1px] border-[#B2B5C4] p-5"
    >
      <CardHeader class="p-0">
        <MicrosoftIcon />
      </CardHeader>
      <CardContent class="p-0">Microsoft</CardContent>
    </Card>
  </div>
</template>
