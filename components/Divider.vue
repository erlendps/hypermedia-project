<script setup lang="ts">
/**
 * Component for a divider. It is meant to create vertical space by using a horizontal line.
 *
 * @prop thin=false {Boolean} - specifies whether the hr should be thin.
 * @prop color="pink" {String} - Selects the color of the divider.
 */
defineProps({
  thin: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: 'pink',
    validator(value: string, _) {
      return ['pink', 'purple'].includes(value);
    },
  },
});
</script>

<template>
  <hr
    :class="[
      color === 'pink' ? 'border-pink' : 'border-purple',
      thin ? 'border' : 'border-2',
    ]"
    class="w-[230px] rounded-lg my-10"
  />
</template>
