<template>
  <div>
    This is the about page <NuxtLink to="/">click here to get to index page</NuxtLink>!
  </div>
  <p>This is a message from the database: {{ data.message }}</p>
</template>

<script setup lang="ts">
let data: { message: string } = await $fetch('/api/about');
</script>