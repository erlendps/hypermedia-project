<template>
  <div class="min-h-screen w-screen flex flex-col justify-start bg-white">
    <header class="w-100 bg-purple p-4 sticky top-0 z-40">
      <AppHeader />
    </header>
    <main class="grow flex flex-col">
      <div
        class="mx-auto px-4 py-6 sm:px-8 md:px-16 lg:px-32 w-full max-w-[1156px] grow"
      >
        <NuxtPage />
      </div>
      <Transition>
        <ChatBot />
      </Transition>
    </main>
    <footer class="w-100 bg-purple p-4 mt-auto">
      <AppFooter />
    </footer>
  </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
