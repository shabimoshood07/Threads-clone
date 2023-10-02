// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  modules: ["@nuxtjs/tailwindcss", 'nuxt-icon', "@pinia/nuxt", "@vite-pwa/nuxt"
    // "@nuxtjs/supabase"
  ],
  devtools: { enabled: true },

})
