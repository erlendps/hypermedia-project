<script setup lang="ts">
defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <NuxtLink :to>
    <div class="flex gap-2 h-[50px] items-center">
      <LoadingImage
        :src
        :alt
        width="50"
        height="50"
        common-class="h-full w-[50px] border-2 border-purple rounded-full"
        svg-size="sm"
      />
      <span class="font-bold text-purple">{{ name }}</span>
    </div>
  </NuxtLink>
</template>
