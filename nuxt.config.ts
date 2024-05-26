import { defineNuxtConfig } from "nuxt/config";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

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
