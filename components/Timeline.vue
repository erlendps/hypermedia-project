<script setup lang="ts">
import { type TimelineEvent } from "~/types/types";

const props = defineProps<{
  events: TimelineEvent[];
}>();
</script>

<template>
  <!-- Horizontal timeline with dates on the x-axis -->
  <div class="flex flex-col items-center">
    <div class="flex flex-col md:flex-row space-x-4 items-center">
      <!-- Timeline events -->
      <div
        v-for="event in events"
        :key="event.date"
        class="flex flex-col items-center"
      >
        <div class="flex flex-col items-center gap-2">
          <span>{{ event.date }}</span>
          <hr class="border border-purple w-full rounded-lg" />
          <span class="h-16 mb-4">{{ event.eventInfo }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
