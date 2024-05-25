<template>
  <button
    @click="isOpen = !isOpen"
    class="md:hidden z-50"
    aria-label="Open the menu"
  >
    <Bars3Icon class="w-8 h-8" />
  </button>
  <div
    v-if="isOpen"
    class="md:hidden fixed top-0 left-0 w-full h-full bg-purple text-white text-3xl p-4 pt-16 text-center z-40"
  >
    <div class="text-4xl">
      <NuxtLink to="/">Forties Mulier</NuxtLink>
    </div>
    <Divider class="mx-auto" />
    <div v-for="link in links" :key="link.path">
      <NuxtLink :to="link.path" class="block px-4 py-2">
        {{ link.name }}
      </NuxtLink>
      <div v-if="link.submenu" class="pl-4">
        <NuxtLink
          v-for="sublink in link.submenu"
          :key="sublink.path"
          :to="sublink.path"
          class="block px-4 py-2 text-2xl"
        >
          {{ sublink.name }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Bars3Icon } from '@heroicons/vue/24/outline';
import { ref } from 'vue';
import { watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
watch(
  () => route.fullPath,
  () => {
    isOpen.value = false;
  }
);

defineProps({
  links: {
    type: Array<{
      path: string;
      name: string;
      submenu?: Array<{ path: string; name: string }>;
      showSubmenu?: boolean;
    }>,
    required: true,
  },
});

const isOpen = ref(false);
</script>
