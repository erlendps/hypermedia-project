<script setup lang="ts">
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

<template>
  <nav class="bg-purple text-white w-full h-12">
    <PcMenu :links="links" class="hidden md:flex" />
    <MobileMenu :links="links" class="md:hidden" />
  </nav>
</template>
