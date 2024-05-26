<script setup lang="ts">
import { defineProps } from 'vue';
import { type TimelineEvent } from '~/types/types';

const props = defineProps<{
  events: TimelineEvent[];
}>();
</script>

<template>
  <!-- Horizontal timeline with dates on the x-axis -->
  <div class="flex flex-col items-center">
    <div class="flex space-x-4 items-center">
      <div class="w-1/2 h-1 bg-purple"></div>
      <div class="w-1/2 h-1 bg-purple"></div>
    </div>
    <div class="flex flex-col md:flex-row space-x-4 items-center">
      <!-- Timeline events -->
      <div
        v-for="event in events"
        :key="event.date"
        class="flex flex-col items-center"
      >
        <div class="flex flex-col items-center gap-2">
          <span>{{ event.date }}</span>
          <div class="h-1 bg-purple w-full" />
          <span class="h-8">{{ event.eventInfo }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
