export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", '@nuxtjs/robots'],
  target : "static",

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/',
        redirect: '/home'
      })
    }
  },

  buildModules: [
   '@nuxtjs/google-fonts'
 ],

  googleFonts : {
    families : {
      Poppins : true,
    }
  },

  head: {
    htmlAttrs: {
      lang: 'en'
    }
  },

  devtools: {
    enabled: true
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
