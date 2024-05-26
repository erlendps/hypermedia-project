<script setup lang="ts">
import type { MenuLinks } from "~/types/types";

defineProps<{
  links: MenuLinks;
}>();
</script>

<template>
  <div class="flex-row justify-between w-full h-full items-center gap-2">
    <div class="text-3xl"><NuxtLink to="/">Forties Mulier</NuxtLink></div>

    <ul
      class="flex flex-row h-full gap-8 lg:gap-16 justify-between text-xl text-right items-center"
    >
      <li v-for="link in links" class="text-left w-32">
        <div class="relative group">
          <NuxtLink
            :active-class="'underline underline-offset-8 decoration-2'"
            :to="link.path"
          >
            {{ link.name }}
          </NuxtLink>
          <ul
            v-if="link.submenu"
            class="left-0 pt-2 w-40 bg-purple text-white shadow-lg rounded-b-lg absolute border-t-4 hidden group-hover:block"
          >
            <li
              v-for="sublink in link.submenu"
              :key="sublink.path"
              class="block px-4 py-2 hover:bg-purple-dark"
            >
              <NuxtLink :to="sublink.path">
                {{ sublink.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
