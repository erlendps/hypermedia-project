<script setup lang="ts">
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

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

const isActive = (path: string) => {
  return route.fullPath.includes(path);
};
</script>

<template>
  <div class="flex justify-between items-center h-full">
    <NuxtLink to="/" class="text-3xl">Forties Mulier</NuxtLink>
    <button
      @click="isOpen = !isOpen"
      class="z-10 ml-auto hover:text-white-dark"
    >
      <XMarkIcon v-if="isOpen" class="w-8 h-8" />
      <Bars3Icon v-else class="w-8 h-8" />
      <p v-if="isOpen" class="sr-only">Close Menu</p>
      <p v-else class="sr-only">Open the menu</p>
    </button>
    <div
      v-if="isOpen"
      class="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-purple text-white text-3xl px-4 pt-[1.375rem] text-center"
    >
      <NuxtLink to="/" class="text-3xl">Forties Mulier</NuxtLink>
      <Divider class="mx-auto" />
      <div v-for="link in links" :key="link.path">
        <NuxtLink
          :to="link.path"
          class="block px-4 py-2"
          :class="
            isActive(link.path)
              ? 'underline underline-offset-8 decoration-2'
              : ''
          "
        >
          {{ link.name }}
        </NuxtLink>
        <div v-if="link.submenu" class="pl-4">
          <NuxtLink
            v-for="sublink in link.submenu"
            :key="sublink.path"
            :to="sublink.path"
            class="block px-4 py-2 text-2xl"
            :class="
              isActive(sublink.path)
                ? 'underline underline-offset-8 decoration-2'
                : ''
            "
          >
            {{ sublink.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
