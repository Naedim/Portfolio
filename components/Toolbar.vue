<template>
  <nav class="flex w-full items-star text-white z-10">
    <div class="flex flex-col">
      <div
        id="toolbar__navbar-logo"
        class="flex items-start gap-2 text-violet-900 font-semibold text-base lg:text-xl xl:text-2xl"
        title="navbar's logo"
      >
       Damien NOEL 
      </div>

      <div
        id="toolbar__current-page-info"
        class="flex items-center gap-2 text-sm lg:text-lg xl:text-2xl font-semibold text-white"
      >
        <Icon id="navbar-logo" name="mdi:book-open-page-variant-outline" aria-label="navbar's logo icon" />

        <h1
          id="toolbar__current-page-name"
          :title="'currently at ' + pages[route.fullPath != 'index' ? route.name : '/'] + ' page'"
          alt="The current page name"
        >
          {{ pages[route.name != "index" ? route.name : "/"] }}
        </h1>
      </div>
    </div>

    <ul
      id="toolbar__mobile-menu"
      :class="isMobileMenuActive ? 'ml-0' : 'ml-[-100%]'"
      class="absolute top-0 left-0  pt-40 box-border flex h-[100vh] landscape:overflow-x-hidden w-full flex-col items-center portrait:justify-start portrait:gap-20 landscape:justify-evenly text-xl lg:text-3xl font-medium backdrop-blur-md transition-all duration-200 xl:hidden"
    >
      <li v-for="(page, path) in pages" :key="path">
          <NuxtLink :to="path" class="font-extrabold" @click="menuToggle()" :title="`go to page ${page}`"
            >
              <button title="page navigation" class = "px-4 py-2">
                  {{ page }}
              </button>
          </NuxtLink>
      </li>
    </ul>

    <ul id="toolbar__big-screen-menu" class="hidden w-4/6 grow  items-start justify-end gap-32 xl:flex ">
      <li v-for="(page, path) in pages" :key="path">

          <NuxtLink
            :to="path"
            :title="`go to page ${page}`"
            class="font-semibold" 
            >
            <button title="page navigation" class = "px-4 py-3 text-xl rounded-full" data-twe-ripple-init data-twe-ripple-color="dark">
            {{ page }}
            </button>
          </NuxtLink>
      </li>
    </ul>

    <button class="z-10 ml-auto text-4xl h-12 w-12 lg:h-16 lg:w-16 box-border p-1 xl:hidden flex justify-center items-center" title ="menu unfold button" v-on:click="() => menuToggle()">
      <Icon name="mdi:menu" aria-label="hamburger menu" />
    </button>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute()
const pages = {
  "/": "home",
  "experiences": "experiences"
};

const isMobileMenuActive: Ref<Boolean> = ref(false);


function menuToggle(): void {
  isMobileMenuActive.value = !isMobileMenuActive.value;
}
</script>
