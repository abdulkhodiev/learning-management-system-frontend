<script setup lang="ts">
import { computed, defineProps, watch } from 'vue';

const props = defineProps<{
  dataValue: number;
}>();

const progressWidth = computed(() => {
  const maxWidth = 263;
  return (Math.min(props.dataValue, 100) / 100) * maxWidth;
});

watch(
  () => props.dataValue,
  newValue => {
    console.log('Progress updated to:', newValue);
  }
);
</script>

<template>
  <svg
    width="264"
    height="3"
    viewBox="0 0 264 3"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      :width="progressWidth"
      height="3"
      rx="1.5"
      fill="currentColor"
    />
  </svg>
</template>
