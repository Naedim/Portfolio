export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/global.scss";',
        },
      },
    },
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/',
        redirect: '/home'
      })
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
