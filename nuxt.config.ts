// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseUrl: "",
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxtjs/supabase", "nuxt-primevue"],
  supabase: {
    redirect: false,
  },
  primevue: {
    options: {
      unstyled: true,
    },
  },
  app: {
    head: {
      title: "Forties Mulier",
      charset: "utf-8",
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.png",
        },
      ],
      htmlAttrs: {
        lang: "en",
      },
    },
  },
});
