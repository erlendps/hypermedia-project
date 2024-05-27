<script setup lang="ts">
import { Bars3Icon } from "@heroicons/vue/24/outline";

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

<template>
  <div class="flex justify-between items-center h-full">
    <NuxtLink to="/" class="text-3xl">Forties Mulier</NuxtLink>
    <button
      @click="isOpen = !isOpen"
      class="z-10 ml-auto"
      aria-label="Open the menu"
    >
      <Bars3Icon class="w-8 h-8" />
    </button>
    <div
      v-if="isOpen"
      class="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-purple text-white text-3xl px-4 pt-[1.375rem] text-center"
    >
      <NuxtLink to="/" class="text-3xl">Forties Mulier</NuxtLink>
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
  </div>
</template>
