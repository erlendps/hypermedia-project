<template>
  <nav class="bg-purple text-white p-4">
    <div class="flex justify-between items-center">
      <div class="text-3xl">
        <NuxtLink to="/">Forties Mulier</NuxtLink>
      </div>
      <div
        class="flex space-x-10 md:flex-row flex-col text-xl md:space-y-0 space-y-2 text-right"
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
                class="left-0 mt-2 w-32 bg-purple text-white shadow-lg rounded-lg"
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
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const links = ref([
  {
    path: '/what-we-do',
    name: 'What we do',
    submenu: [
      { path: '/what-we-do/projects', name: 'Projects' },
      { path: '/what-we-do/services', name: 'Services' },
    ],
    showSubmenu: false,
  },
  { path: '/contact', name: 'Contact us' },
  { path: '/about', name: 'About us' },
  { path: '/staff', name: 'Our staff' },
]);
</script>
