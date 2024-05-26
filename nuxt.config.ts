export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxtjs/supabase"],
  supabase: {
    redirect: false,
  },
  // Add the publicRuntimeConfig to expose environment variables to the app
  runtimeConfig: {
    openaiApiKey: "",
  },
});
