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
              route.fullPath.includes(link.path)
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
              class="left-0 pt-2 w-40 bg-purple text-white shadow-lg rounded-b-lg absolute border-t-4"
            >
              <li
                v-for="sublink in [link].concat(link.submenu)"
                :key="sublink.path"
                class="block px-4 py-2 hover:bg-purple-dark"
              >
                <NuxtLink :to="sublink.path">
                  {{ sublink.name }}
                </NuxtLink>
              </li>
            </ul>
          </Transition>
        </div>
        <NuxtLink
          v-else
          class="cursor-pointer hover:text-white-dark"
          :to="
            // If the link has a submenu and the current route includes the link's path
            // (if we are on a subpage of the link), set the link to the current route (so it stays active, but not clickable),
            // otherwise set it to the link's path
            link.submenu
              ? route.fullPath.includes(link.path)
                ? route.fullPath
                : ''
              : link.path
          "
          :active-class="'underline underline-offset-8 decoration-2'"
          @mousedown="link.showSubmenu = !link.showSubmenu"
        >
          {{ link.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
