<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Video } from 'lucide-vue-next';
import sampleVideo from '@/assets/hello.mp4';
import { ref } from 'vue';

const currentVideo = ref(sampleVideo);

const videoHandler = ({ videoSrc }: { videoSrc: string }) => {
  currentVideo.value = videoSrc;
};
</script>

<template>
  <div class="flex w-full flex-wrap justify-between gap-6 py-6">
    <video
      class="w-full rounded-xl md:max-w-[840px]"
      controls
    >
      <source
        :src="currentVideo"
        type="video/mp4"
      />
      <source
        :src="currentVideo"
        type="video/ogg"
      />

      Your browser does not support the video tag.
    </video>
    <Accordion
      type="single"
      collapsible
      class="h-full w-full overflow-hidden rounded-xl bg-thirdary-foreground p-0 lg:max-w-[400px]"
    >
      <h3 class="p-4">Course Completion</h3>
      <AccordionItem
        value="item-1"
        class="border-b-0 border-t-[1px]"
      >
        <AccordionTrigger class="justify-start gap-4 border-none px-4 text-lg"
          >Introduction to UX Design</AccordionTrigger
        >
        <AccordionContent
          @click="videoHandler({ videoSrc: sampleVideo })"
          class="align-start flex cursor-pointer justify-between gap-2 border-t-[1px] p-4"
          :class="currentVideo === sampleVideo && 'bg-thirdary text-white'"
        >
          <Checkbox :class="currentVideo === sampleVideo && 'bg-white'" />
          <div
            class="flex items-start gap-2 p-0"
            :class="currentVideo === sampleVideo && 'text-white'"
          >
            <p :class="currentVideo === sampleVideo && 'text-white'">1.</p>
            <p
              :class="currentVideo === sampleVideo && 'text-white'"
              class="text-base hover:underline"
            >
              What is User Experience (UX) Design?
            </p>
          </div>
          <div class="flex flex-nowrap items-center gap-2">
            <Video />
            <p
              :class="currentVideo === sampleVideo && 'text-white'"
              class="text-nowrap text-base"
            >
              4 min
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>
