export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
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
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
    exposeConfig: false,
    injectPosition: "first",
    viewer: true,
  },

  head: {
    htmlAttrs: {
      lang: 'en'
    }
  }
  
});
