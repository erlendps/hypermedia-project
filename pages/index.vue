<template>
  <div>
    This is the index page <NuxtLink to="/about">click here to get to about page</NuxtLink>!
  </div>
  <p>Your message is: {{ message }}</p>
  <div>
    <ChatBot />
  </div>
</template>

<script setup lang="ts">
let message: string = await $fetch('/api');
import ChatBot from '~/components/ChatBot.vue';
</script>