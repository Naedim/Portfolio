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

  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", 
    { injectPosition: "first" }],
    configPath: "tailwind.config",
    exposeConfig: false,
    viewer: true,
  },

  head: {
    htmlAttrs: {
      lang: 'en'
    }
  },

  devtools: {
    enabled: true
  }
});
