<script setup lang="ts">
import { type MenuLinks } from '~/types/types';

const props = defineProps<{
  links: MenuLinks;
}>();
</script>

<template>
  <div class="text-3xl">
    <NuxtLink to="/">Forties Mulier</NuxtLink>
  </div>
  <div
    class="md:flex space-x-10 md:flex-row flex-col text-xl md:space-y-0 space-y-2 text-right hidden"
  >
    <div v-for="link in links" :key="link.path" class="relative group">
      <div
        class="group relative flex-1 text-left w-32"
        @mouseover="link.showSubmenu = true"
        @mouseleave="link.showSubmenu = false"
      >
        <div class="md:absolute">
          <NuxtLink
            :active-class="'underline underline-offset-8 decoration-2'"
            :to="link.path"
          >
            {{ link.name }}
          </NuxtLink>
          <div
            v-if="link.submenu && link.showSubmenu"
            class="left-0 mt-2 w-40 bg-purple text-white shadow-lg rounded-b-lg border-t-4"
          >
            <NuxtLink
              v-for="sublink in link.submenu"
              :key="sublink.path"
              :to="sublink.path"
              class="block px-4 py-2 hover:bg-purple-dark"
            >
              {{ sublink.name }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
