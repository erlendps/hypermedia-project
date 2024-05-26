<script setup lang="ts">
import PcMenu from "~/components/menus/PcMenu.vue";
import MobileMenu from "~/components/menus/MobileMenu.vue";

const links = [
  {
    path: "/what-we-do",
    name: "What we do",
    submenu: [
      { path: "/what-we-do/projects", name: "Projects" },
      { path: "/what-we-do/services", name: "Services" },
    ],
    showSubmenu: false,
  },
  { path: "/contact", name: "Contact us" },
  { path: "/about", name: "About us" },
  { path: "/staff", name: "Our staff" },
];
</script>

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
