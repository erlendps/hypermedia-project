<script setup lang="ts">
import type { MenuLinks } from "~/types/types";
import { ChevronDownIcon } from "@heroicons/vue/24/outline";

const props = defineProps<{
  links: MenuLinks;
}>();
const route = useRoute();
watch(
  () => route.fullPath,
  () => {
    props.links.forEach((link) => {
      if (link.showSubmenu) {
        link.showSubmenu = false;
      }
    });
  }
);

const isActive = (path: string) => {
  return route.fullPath.includes(path);
};
</script>

<template>
  <div class="flex-row justify-between w-full h-full items-center gap-2">
    <div class="text-3xl"><NuxtLink to="/">Forties Mulier</NuxtLink></div>

    <ul
      class="flex flex-row h-full gap-8 lg:gap-16 justify-between text-xl text-right items-center"
    >
      <li v-for="link in links" class="text-left w-32">
        <div
          v-if="link.submenu && link.submenu.length > 0"
          class="relative submenu"
        >
          <button
            type="button"
            @click="() => (link.showSubmenu = !link.showSubmenu)"
            class="hover:text-white-dark flex items-center gap-2"
            :class="
              isActive(link.path)
                ? 'underline underline-offset-8 decoration-2'
                : ''
            "
          >
            {{ link.menuName }}
            <ChevronDownIcon
              class="h-6 w-6 stroke-2 transition duration-300"
              :class="link.showSubmenu ? 'rotate-180' : ''"
            />
          </button>
          <Transition>
            <ul
              v-if="link.submenu && link.showSubmenu"
              class="left-0 pt-2 w-40 bg-purple text-white shadow-lg rounded-b-lg absolute border-t-4 border-x-2 border-b-2 border-pink"
            >
              <NuxtLink
                v-for="sublink in [link].concat(link.submenu)"
                :key="sublink.path"
                :to="sublink.path"
                class="group"
              >
                <li
                  class="block px-4 py-2 hover:bg-purple-900 group-last:rounded-b-lg"
                >
                  {{ sublink.name }}
                </li>
              </NuxtLink>
            </ul>
          </Transition>
        </div>
        <NuxtLink
          v-else
          class="cursor-pointer hover:text-white-dark"
          :to="link.path"
          :class="
            isActive(link.path)
              ? 'underline underline-offset-8 decoration-2'
              : ''
          "
          @mousedown="link.showSubmenu = !link.showSubmenu"
        >
          {{ link.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
