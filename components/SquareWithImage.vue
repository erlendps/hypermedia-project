<script setup lang="ts">
import notFound from "~/assets/images/not_found.svg";
/**
 * This is a component for that is meant to be square and contains an image.
 * You can customize the width and height, as well as the border radius.
 *
 * @prop imagePath {String} - Path of image, can be local or an url.
 * @prop alt {String} - The alt description of a image.
 * @prop circular=false {Boolean} - If true, rounded-full will be used for border radius, otherwise
 * rounded-lg is used.
 * @prop width=w-[150px] {String} - Width formatted as a tailwind class
 * @prop height=h-[150px] {String} - Height formatted as a tailwind class
 */
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  circular: {
    type: Boolean,
    default: false,
  },
  width: {
    type: String,
    default: "w-[150px]",
  },
  height: {
    type: String,
    default: "h-[150px]",
  },
});

const rounding = computed(() => {
  return props.circular ? "rounded-full" : "rounded-lg";
});
</script>

<template>
  <div :class="[width, height]">
    <LoadingImage
      :src
      :alt
      :common-class="`w-full h-full border-2 border-purple ${rounding}`"
      :class-img="`object-cover`"
      height="150"
      width="150"
    />
  </div>
</template>
