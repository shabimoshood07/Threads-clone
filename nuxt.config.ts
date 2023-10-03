// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  modules: ["@nuxtjs/tailwindcss", 'nuxt-icon', "@pinia/nuxt", "@vite-pwa/nuxt",
    "@nuxtjs/supabase"
  ],
  runtimeConfig: {
    public: {
      bucketUrl: process.env.BUCKET_URL,
    }
  },
  supabase: {
    // redirect: false,
    redirectOptions: {
      login: '/auth',
      callback: '/',
      exclude: [],
    }
  },
  // devtools: { enabled: true },

})
