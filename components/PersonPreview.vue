<script setup lang="ts">
const props = defineProps({
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

const ariaDescribedBy = computed(() => {
  return `avatar-${props.name.replace(/\s/g, "-").toLowerCase()}`;
});
</script>
<template>
  <NuxtLink :to>
    <div
      class="flex gap-2 h-[50px] items-center text-purple hover:text-purple-900"
    >
      <LoadingImage
        :src
        :alt
        width="50"
        height="50"
        common-class="h-full w-[50px] border-2 rounded-full"
        svg-size="sm"
        :described-by="ariaDescribedBy"
      />
      <span :id="ariaDescribedBy" class="font-bold">{{ name }}</span>
    </div>
  </NuxtLink>
</template>
