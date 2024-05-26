<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps({
  error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: '/' });
</script>

<template>
  <div class="min-h-screen w-screen flex flex-col justify-start">
    <header class="w-100 bg-purple p-4 sticky top-0">
      <AppHeader />
    </header>
    <main
      class="px-4 py-6 sm:px-8 md:px-16 lg:px-32 w-full self-center max-w-[1156px] gap-y-8"
    >
      <div class="flex flex-col items-center gap-4">
        <h1 class="font-bold text-3xl sm:text-4xl text-purple mb-4">
          Something went wrong
        </h1>
        <p class="text-center">
          This might be because the page is not available or an error occurred.
          Please go back to the homepage, or if you are certain that this is an
          error, please contact the website administrator.
        </p>
        <NuxtLink to="/" class="text-purple underline">
          Go back to the homepage
        </NuxtLink>
        <h3 class="font-bold text-2xl text-purple mt-8">Error details:</h3>
        <p class="text-center">{{ error!.statusCode }} {{ error!.message }}</p>
      </div>
    </main>
    <footer class="w-100 bg-purple p-4 mt-auto">
      <AppFooter />
    </footer>
  </div>
</template>
