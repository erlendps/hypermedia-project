<template>
  <div class="min-h-screen w-screen flex flex-col justify-start">
    <header class="w-100 bg-green-600 p-4 sticky top-0">
      <AppHeader />
    </header>
    <main>
      <NuxtPage />
    </main>
    <footer class="w-100 bg-green-600 p-4 mt-auto">
      <AppFooter />
    </footer>
  </div>
</template>
