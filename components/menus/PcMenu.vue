<script setup lang="ts">
import type { MenuLinks } from '~/types/types';

defineProps<{
  links: MenuLinks;
}>();
</script>

<template>
  <div class="flex-row justify-between w-full h-full items-center">
    <div class="text-3xl"><NuxtLink to="/">Forties Mulier</NuxtLink></div>

    <div
      class="md:flex md:flex-row h-full gap-16 justify-between text-xl text-right hidden items-center"
    >
      <div
        v-for="link in links"
        class="flex-1 text-left w-32"
        @mouseover="link.showSubmenu = true"
        @mouseleave="link.showSubmenu = false"
      >
        <div class="relative group">
          <NuxtLink
            :active-class="'underline underline-offset-8 decoration-2'"
            :to="link.path"
          >
            {{ link.name }}
          </NuxtLink>
          <div
            v-if="link.submenu"
            class="left-0 mt-2 w-40 bg-purple text-white shadow-lg rounded-b-lg border-t-4 absolute hidden group-hover:block"
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
