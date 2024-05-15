<template>
  <nav class="flex w-full items-start justify-center text-white z-10">
      

    <ul
      id="toolbar__mobile-menu"
      :class="isMobileMenuActive ? 'ml-0' : 'ml-[-100%]'"
      class="absolute top-0 left-0  pt-40 box-border flex h-[100vh] landscape:overflow-x-hidden w-full flex-col items-center portrait:justify-start portrait:gap-20 landscape:justify-evenly text-xl lg:text-3xl font-medium backdrop-blur-md transition-all duration-200 xl:hidden"
    >
      <li v-for="(page, path) in pages" :key="path">
          <NuxtLink :to="path" class="font-extrabold" @click="menuToggle()" :title="`go to page ${page}`"
            >
              <button title="page navigation"  :class="pages[route.fullPath] === page && 'focused'"  class = "px-4 py-2">
                  {{ page }}
              </button>
          </NuxtLink>
      </li>
    </ul>

    <ul id="toolbar__big-screen-menu" class="hidden xl:flex w-full items-start justify-start gap-16 ">
      <li v-for="(page, path) in pages" :key="path">

          <NuxtLink
            :to="path"
            :title="`go to page ${page}`"
            class="font-semibold" 
            >
            <button title="page navigation" :class="pages[route.fullPath] === page && 'focused'" class = "px-4 py-4 text-xl rounded-full" data-twe-ripple-init data-twe-ripple-color="dark">
            {{ page }}
            </button>
          </NuxtLink>
      </li>
    </ul>

    <div class = "xl:hidden flex gap-2 items-center">

      <button class="z-10 text-4xl h-12 w-12 lg:h-16 lg:w-16 box-border p-3 flex justify-center items-center" title ="menu unfold button" v-on:click="() => menuToggle()">
        <Icon id="navbar-logo" name="mdi:book-open-page-variant-outline" aria-label="navbar's logo icon" />
      </button>
      <div
          id="toolbar__current-page-info"
          class="flex items-center gap-2 text-lg lg:text-xl font-semibold text-white"
        >

          <h1
            id="toolbar__current-page-name"
            :title="'currently at ' + pages[route.fullPath] + ' page'"
            alt="The current page name"
          >
            {{ pages[route.fullPath] }}
          </h1>
      </div>
    </div>

    <!-- social medias button -->
    <div class = "ml-auto flex gap-4 lg:gap-6 xl:gap-8 ">
    <div v-for="(media, index) in medias"  >
      <NuxtLink :to= media.url target="_blank" :title = "`${media.label} link`" class = "flex flex-col items-center">
        <button class = "text-5xl h-12 w-12 lg:h-16 lg:w-16 box-border p-2 flex justify-center items-center">
            <Icon :name = "media.iconName" :aria-label = "`${media.label} link`"/>
        </button>
      </NuxtLink>
    </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute()
const pages = {
  "/": "home",
  "/experiences": "experiences"
};

const medias = [{
   iconName : "mdi:linkedin",
   label : "Linkedin",
   url : "https://www.linkedin.com/in/dam-no/"
},{
   iconName : "mdi:github",
   label : "Github",
   url : "https://github.com/Naedim"
}]

const isMobileMenuActive: Ref<Boolean> = ref(false);


function menuToggle(): void {
  isMobileMenuActive.value = !isMobileMenuActive.value;
}
</script>
