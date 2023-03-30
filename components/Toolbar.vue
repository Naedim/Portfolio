<template >
  <nav class="flex items-start justify-between w-full text-orange-100">
    <div class="flex flex-col">
      <button>
        <NuxtLink id="toolbar__navbar-logo"
          class="flex items-center gap-2 text-sm font-semibold slate-400 sm:text-base md:text-3xl md:gap-3" to="#"
          title="navbar's logo">
          Damien NOEL
          <Icon icon="material-symbols:code" title="navbar's logo's icon" class="text-base sm:text-2xl md:text-4xl" />
        </NuxtLink>
      </button>


      <div id="toolbar__current-page-info" class="flex items-center gap-2 text-xs font-semibold text-red-500 sm:font-bold lg:text-xl md:text-base sm:text-sm">
        <Icon id="navbar-logo" icon="mdi:book-open-page-variant-outline" title="navbar's logo's icon"
          aria-label="navbar's logo icon" class="" />

        <h1 id="toolbar__current-page-name"
          :title="'currently at ' + pages[route.name != 'index' ? route.name : '/'] + ' page'"
          alt="The current page name">
          {{ pages[route.name != "index" ? route.name : "/"] }}
        </h1>
      </div>
    </div>

    <ul id="toolbar__mobile-menu" :class="isMobileMenuActive ? 'ml-0' : 'ml-[-100%]'"
      class="box-border absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full gap-20 text-2xl font-medium transition-all duration-200 md:text-4xl md: backdrop-blur-md xs:flex lg:hidden">
      <li v-for="(page, path) in pages" :key="path">
        <button>
          <NuxtLink :to="path" class="font-extrabold text-white " @click="menuToggle()" :title="page">{{ page }}
          </NuxtLink>
        </button>

      </li>
    </ul>

    <ul id="toolbar__big-screen-menu"
      class="items-center hidden w-4/6 text-3xl transition-all duration-200 justify-evenly lg:flex">
      <li v-for="(page, path) in pages" :key="path">
        <NuxtLink :to="path" :title="page"
          class="font-semibold text-white hover:underline hover:text-orange-300 focus:text-red-500 focus:underline">{{
            page }}
        </NuxtLink>
      </li>
    </ul>

    <button class="z-10 w-auto text-4xl text-white md:text-5xl lg:hidden" v-on:click="() => menuToggle()">
      <Icon icon="mdi:menu" title="hamburger menu" />
    </button>


  </nav>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
const route = useRoute();
const pages = {
  "/": "home",
  experiences: "experiences",
  education: "education",
  about: "about",
};

let isMobileMenuActive = ref(false);

function menuToggle(): void {
  isMobileMenuActive.value = !isMobileMenuActive.value;
}

</script>
