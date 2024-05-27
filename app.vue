<template>
  <div class="min-h-screen w-screen flex flex-col justify-start bg-white">
    <header class="w-100 bg-purple p-4 sticky top-0 z-40">
      <AppHeader />
    </header>
    <main
      class="px-4 py-6 sm:px-8 md:px-16 lg:px-32 w-full self-center max-w-[1156px] gap-y-8"
    >
      <NuxtPage />
      <ChatBot />
    </main>
    <footer class="w-100 bg-purple p-4 mt-auto">
      <AppFooter />
    </footer>
  </div>
</template>
