<template >
  <nav>
    <div class="flex w-full items-center justify-between text-[2.5vh] md:text-[3vh] text-white">
      <button>
        <NuxtLink id="toolbar__navbar-logo" class="slate-400 flex items-center gap-[2vw] font-semibold" to="#"
        title="navbar's logo">
        Damien NOEL
        <Icon   icon="material-symbols:code"  title="navbar's logo's icon" />
      </NuxtLink>
      </button>
     
      <ul id="toolbar__mobile-menu" :class="isMobileMenuActive ? 'ml-0' : 'ml-[-100%]'" class="absolute top-0 left-0 box-border h-full w-full flex flex-col items-center justify-center gap-[5vh] text-[6vw] font-medium backdrop-blur-md	
           transition-all duration-200 xs:flex lg:hidden">
        <li v-for="(page, path) in pages" :key="path">
          <button>
            <NuxtLink :to="path" class="font-extrabold text-white " @click="menuToggle()" :title="page">{{ page }}
          </NuxtLink>
          </button>
         
        </li>
      </ul>

      <ul id="toolbar__big-screen-menu"
        class="hidden grow-[0.4] items-center text-[2vw] justify-evenly transition-all duration-200 lg:flex">
        <li v-for="(page, path) in pages" :key="path">
          <NuxtLink :to="path" :title="page" class="text-white hover:text-red-500 focus:red-500">{{ page }}
          </NuxtLink>
        </li>
      </ul>

      <button class="z-10 w-auto text-[4vh] md:text-[6vh] text-white lg:hidden" v-on:click="() => menuToggle()">
        <Icon icon="mdi:menu" title="hamburger menu" />
      </button>
    </div>

    <div id="toolbar__current-page-info" class="flex items-center gap-2 text-[2vh] font-bold text-red-500">
      <Icon id = "navbar-logo" icon="mdi:book-open-page-variant-outline" title="navbar's logo's icon" aria-label="navbar's logo icon" class="" />

      <h1 id="toolbar__current-page-name"
        :title="'currently at ' + pages[route.name != 'index' ? route.name : '/'] + ' page'" alt="The current page name">
        {{ pages[route.name != "index" ? route.name : "/"] }}
      </h1>
    </div>
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
  console.log("menuToggle");
  isMobileMenuActive.value = !isMobileMenuActive.value;
}

</script>

<style>
</style>
