<script setup lang="ts">
/**
 * This component is a link styled as a button, there are 3 sizes which decided the
 * padding, font weight and font size.
 * Since it uses slots, the content is to be put as a child of this component.
 *
 * @prop size="md" {String} - The size of the button.
 * @prop to {String} - The target for the link / where to navigate.
 */
const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator(value: string, _) {
      return ['sm', 'md', 'lg'].includes(value);
    },
  },
  to: {
    type: String,
    required: true,
  },
});

const padding = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-6 py-2';
    case 'md':
      return 'px-8 py-2';
    case 'lg':
      return 'px-10 py-2';
    default:
      return 'px-8 py-2';
  }
});

const fontSize = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'text-base';
    case 'md':
      return 'text-base';
    case 'lg':
      return 'text-xl';
    default:
      'text-base';
  }
});

const fontWeight = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'font-normal';
    case 'md':
      return 'font-normal';
    case 'lg':
      return 'font-medium';
    default:
      'font-normal';
  }
});
</script>

<template>
  <NuxtLink :to>
    <div
      :class="[padding, fontSize, fontWeight]"
      class="text-white bg-purple rounded-lg text-center inline-block hover:bg-purple-900"
    >
      <slot></slot>
    </div>
  </NuxtLink>
</template>
