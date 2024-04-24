<template>
  <div>
    This is the index page <NuxtLink to="/about">click here to get to about page</NuxtLink>!
  </div>
  <p>Your message is: {{ message }}</p>
</template>

<script setup lang="ts">
let message: string = await $fetch('/api');
</script>