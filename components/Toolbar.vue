<template class="@container">
  <nav>
    <div
      class="flex w-full items-center justify-between text-[2.5vh] text-white"
    >
      <NuxtLink
        id="toolbar__navbar-logo"
        class="slate-400 flex items-center gap-[2vw] font-semibold"
        to="#"
        title="navbar's logo"
      >
        Damien NOEL
        <Icon
          icon="material-symbols:code"
          class="toolbar__navbar-log-icon"
          title="navbar's logo's icon"
        />
      </NuxtLink>
      <ul
        id="toolbar__mobile-menu"
        :class="isMobileMenuActive ? 'ml-0' : 'ml-[-100%]'"
        class="absolute top-0 left-0 box-border h-full w-full flex-col items-center gap-[5vh] pt-[20vh] text-[3vh] backdrop-blur transition-all duration-200 sm:flex md:hidden"
      >
        <li v-for="page of pages">
          <NuxtLink
            :to="page"
            class="hover:lime-400 focus:lime-400 text-white"
            @click="menuToggle()"
            >{{ page }}
          </NuxtLink>
        </li>
      </ul>

      <ul
        id="toolbar__big-screen-menu"
        class="hidden grow items-center justify-evenly transition-all duration-200 md:flex"
      >
        <li v-for="page of pages">
          <NuxtLink :to="page" class="hover:lime-400 focus:lime-400 text-white"
            >{{ page }}
          </NuxtLink>
        </li>
      </ul>

      <button
        class="z-10 w-auto text-[4vh] text-white md:hidden"
        v-on:click="() => menuToggle()"
      >
        <Icon icon="mdi:menu" title="hamburger menu" />
      </button>
    </div>

    <div
      id="toolbar__current-page-info"
      class="flex items-center gap-2 text-[2vh] text-purple-700"
    >
      <Icon
        icon="mdi:book-open-page-variant-outline"
        title="navbar's logo's icon"
        class=""
      />

      <h1 id="toolbar__current-page-name" title="current page's name">
        {{ route.name }}
      </h1>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
const route = useRoute();
const pages = ["home", "experiences", "education", "about"];

let isMobileMenuActive = ref(false);

function menuToggle(): void {
  console.log("menuToggle");
  isMobileMenuActive.value = !isMobileMenuActive.value;
}
</script>
