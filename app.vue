<template>
  <div class="min-h-screen w-screen flex flex-col justify-start">
    <header class="w-100 bg-purple p-4 sticky top-0">
      <AppHeader />
    </header>
    <main
      class="px-4 py-4 sm:px-8 md:px-16 lg:px-32 w-full self-center max-w-screen-xl"
    >
      <NuxtPage />
    </main>
    <footer class="w-100 bg-purple p-4 mt-auto">
      <AppFooter />
    </footer>
  </div>
</template>
