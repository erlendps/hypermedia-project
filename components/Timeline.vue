<script setup lang="ts">
import { type TimelineEvent } from '~/types/types';
/**
 * This is a component for a horizontal timeline. It takes in an array of events and displays them
 * in a horizontal line with the date and event information. On mobile, the events are displayed in
 * a column.
 * @prop events {TimelineEvent[]} - Array of events to display on the timeline
 */
const props = defineProps<{
  events: TimelineEvent[];
}>();
</script>

<template>
  <!-- Container for the horizontal timeline with dates on the x-axis -->
  <div class="flex flex-col items-center">
    <div class="flex flex-col md:flex-row space-x-4 items-center">
      <!-- Iterate through the events and display each one in a row (or column on mobile) -->
      <div
        v-for="event in events"
        :key="event.date"
        class="flex flex-col items-center"
      >
        <div class="flex flex-col items-center gap-2">
          <!-- Display event date -->
          <span>{{ event.date }}</span>
          <!-- Horizontal line representing the timeline -->
          <hr class="border border-purple w-full rounded-lg" />
          <!-- Display event information -->
          <span class="h-16 mb-4">{{ event.eventInfo }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
