<script lang="ts" setup>
import { useRouter } from 'vue-router';
import avatar from '@/assets/reviewers/image.png';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon } from 'lucide-vue-next';
import { Input } from '@/components/ui/input';

const router = useRouter();
</script>

<template>
  <div class="w-full space-y-4">
    <h2>Messages</h2>
    <div class="rounded-xl border-[1px]">
      <div class="flex items-center justify-between border-b-[1px] p-6">
        <div class="flex items-center gap-3">
          <span
            class="cursor-pointer text-primary-foreground"
            @click="router.back()"
            ><ArrowLeftIcon
          /></span>
          <img
            :src="avatar"
            class="h-[60px] w-[60px] rounded-full"
          />
          <h3>Ronald Richards</h3>
        </div>
        <div>...</div>
      </div>
      <div class="flex flex-col gap-1 p-6">
        <p
          class="m-auto w-max rounded-xl bg-thirdary-foreground p-2 text-center"
        >
          Today
        </p>
        <p class="w-fit self-end rounded-xl bg-thirdary p-2 text-white">
          Hello
        </p>
        <p
          class="w-fit self-end rounded-xl bg-thirdary p-2 text-white sm:max-w-[80%] md:max-w-[70%] lg:max-w-[70%]"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Voluptatibus, quidem, eaque officia dolore incidunt accusantium porro
          deleniti velit iste vero fuga, quam autem. Sapiente sed a obcaecati
          iusto inventore quisquam?
        </p>
        <p class="w-fit rounded-xl bg-thirdary-foreground p-2 text-black">
          Hello
        </p>
        <p
          class="w-fit rounded-xl bg-thirdary-foreground p-2 text-black sm:max-w-[80%] md:max-w-[70%] lg:max-w-[70%]"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Voluptatibus, quidem, eaque officia dolore incidunt accusantium porro
          deleniti velit iste vero fuga, quam autem. Sapiente sed a obcaecati
          iusto inventore quisquam?
        </p>
      </div>
      <div class="flex gap-4 border-t-[1px] p-6">
        <Input placeholder="Type a message" />
        <Button class="text-white">Send</Button>
      </div>
    </div>
  </div>
</template>
