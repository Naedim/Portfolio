<template class = "@container">
  <nav>

    <div class="w-full flex justify-between items-center text-[2.5vh] text-white">
      <NuxtLink id="toolbar__navbar-logo" class="flex items-center gap-[2vw] slate-400 font-semibold" to="#"
        title="navbar's logo">
        Damien NOEL
        <Icon icon="material-symbols:code" class="toolbar__navbar-log-icon" title="navbar's logo's icon" />
      </NuxtLink>

      <ul id="mobile-menu" class= "md:hidden absolute top-0 left-0 w-full h-full backdrop-blur ml-[-100%] 
                      transition-all duration-200 pt-[20vh] box-border sm:flex flex-col items-center text-[3vh] gap-[5vh] {'ml-0' isMobileMenuActive }" >
        <li v-for="page of pages">
          <NuxtLink :to="page" class="text-white hover:lime-400 focus:lime-400" @click="menuToggle()">{{ page }}
          </NuxtLink>
        </li>

      </ul>

      <Icon icon="mdi:menu" class="text-4vh w-auto text-white z-10]" title="hamburger menu"
        v-on:click="() => menuToggle()" />
    </div>

    <div id = "toolbar__current-page-container" class="flex items-center gap-2 text-purple-600 text-[2vh]">
      <Icon icon="mdi:book-open-page-variant-outline" title="navbar's logo's icon" />

      <h1 id="current-page-name" title="current page's name">
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
  isMobileMenuActive.value = !isMobileMenuActive.value;
};
</script>


<style scoped lang="scss">
.toolbar__navbar {
  //   width: 100%;
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;

  //   font-size: 2.5vh;

  .toolbar__navbar-logo {
    //   display: flex;
    //   align-items: center;
    //   gap: 2vw;
    //   color: $slate-4;
    //   font-weight: 600;

    svg {
      // font-size: 3vh;

    }

  }

  a {
    // color: $secondary;

    &:hover {
      // color: $accent;
    }

    &:focus {
      // color: $accent;
    }
  }


  .menu-hamburger {
    // font-size: 4vh;
    // width: auto;
    // color: $secondary;
    // z-index: 1;
  }
}

div.toolbar__current-page-container {
  // display: flex;
  // align-items: center;
  // gap: 2%;

  .page-icon {
    // color: $accent;
    // margin-left: 0;
    // font-size: 2vh;
  }

  .current-page-name {
    // font-size: 2vh;
    // color: $accent;
  }
}

//concerns the state of the menu bar for mobiles
@media screen and (max-width: 1000px) {

  .nav-links {
    // position: absolute;
    // top: 0;
    // left: 0;
    // width: 100vw;
    // height: 100vh;
    // backdrop-filter: blur(9px);
    // margin-left: -100%;
    // transition: all 0.2s ease;

    // padding-top: 20vh;

    // box-sizing: border-box;
    // display: flex;
    // flex-direction: column;
    // align-items: center;

    // font-size: 3vh;
    // gap: 5vh;


    &.mobile-menu {
      // margin-left: 0;
    }
  }
}

//higher then mobile
@media screen and (min-width: 1000px) {
  .toolbar__navbar {
    padding-top: 2vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .toolbar__navbar-logo {
      font-size: 2.5vw;
    }
  }

  .current-page-indicator {
    display: none;
  }

  .nav-links {
    // width: 60vw;
    // display: flex;
    // justify-content: space-evenly;
    // font-weight: 500;
    // font-size: 2.5vw;

    // a{
    //   font-size: 2vw;
    // }
  }

  .menu-hamburger {
    display: none;
  }

  div.toolbar__current-page-container {
    display: none;
  }
}
</style>
