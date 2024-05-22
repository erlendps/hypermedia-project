<template>
  <nav class="bg-purple text-white p-4">
    <div class="flex justify-between items-center">
      <div class="text-3xl">
        <NuxtLink to="/">Forties Mulier</NuxtLink>
      </div>
      <div
        class="flex space-x-10 md:flex-row flex-col text-xl md:space-y-0 space-y-2 text-right"
      >
        <NuxtLink
          v-for="link in links"
          :key="link.path"
          :active-class="'underline underline-offset-8 decoration-2'"
          :to="link.path"
        >
          {{ link.name }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
const links = [
  { path: '/what-we-do', name: 'What we do' },
  { path: '/contact', name: 'Contact us' },
  { path: '/about', name: 'About us' },
  { path: '/staff', name: 'Our staff' },
];
</script>
