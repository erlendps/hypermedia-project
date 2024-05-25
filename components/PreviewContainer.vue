<script setup lang="ts">
import notFound from "~/assets/images/not_found.svg";
/**
 * Component for a preview. The component user is required to specify the width.
 * It is meant as a preview for person, service or project
 *
 * @prop name {String} - first line of text.
 * @prop extraText {String} - second line of text.
 * @prop src {String} - image of the preview.
 * @prop alt {String} - alt description of the image.
 * @prop to {String} - link to where this preview points.
 * @prop width {String} - tailwindcss class of width
 */
defineProps({
  name: {
    type: String,
    required: true,
  },
  extraText: {
    type: String,
  },
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
  width: {
    type: String,
  },
});
</script>

<template>
  <NuxtLink :to>
    <div
      :class="width ? width : ''"
      class="flex flex-col items-center text-purple font-bold hover:text-purple-900 group"
    >
      <LoadingImage
        :src
        :alt
        height="200"
        common-class="h-[200px] w-full border-2 border-purple group-hover:border-purple-900 rounded-t-lg"
        class-img="object-cover"
      />
      <span>{{ name }}</span>
      <span v-if="extraText">{{ extraText }}</span>
    </div>
  </NuxtLink>
</template>
