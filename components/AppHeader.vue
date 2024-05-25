<template>
  <nav class="bg-purple text-white p-4">
    <div class="flex justify-between items-center">
      <div class="text-3xl">
        <NuxtLink to="/">Forties Mulier</NuxtLink>
      </div>

      <PcMenu :links="links" class="hidden md:block" />
      <MobileMenu :links="links" class="md:hidden" />
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import PcMenu from '~/components/menus/PcMenu.vue';
import MobileMenu from '~/components/menus/MobileMenu.vue';

const links = ref([
  {
    path: '/what-we-do',
    name: 'What we do',
    submenu: [
      { path: '/what-we-do/services', name: 'Services' },
      { path: '/what-we-do/projects', name: 'Projects' },
    ],

    showSubmenu: false,
  },
  { path: '/contact', name: 'Contact us' },
  { path: '/about', name: 'About us' },
  { path: '/staff', name: 'Our staff' },
]);
</script>
