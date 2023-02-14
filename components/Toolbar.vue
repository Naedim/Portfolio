<template>
  <div class="toolbar">
    <nav class="toolbar__navbar">
      <NuxtLink class="toolbar__navbar-logo" to="#" title="navbar's logo">
        Damien NOEL
        <Icon icon="material-symbols:code" class="toolbar__navbar-log-icon" title="navbar's logo's icon" />
      </NuxtLink>
      <div class="nav-links" :class="{ 'mobile-menu': isMobileMenuActive }">
        <NuxtLink v-for="page of pages" :to="page" @click="menuToggle()">{{
          page
        }}</NuxtLink>
      </div>
      <Icon icon="mdi:menu" class="menu-hamburger" title="hamburger menu" v-on:click="() => menuToggle()" />
    </nav>
    <div class="toolbar__current-page-container">
      <Icon icon="mdi:book-open-page-variant-outline" class="page-icon" title="navbar's logo's icon" />
      <h1 class="current-page-name" title="current page's name">
        {{ route.name }}
      </h1>
    </div>
  </div>
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 3.5vh;

  .toolbar__navbar-logo {
    display: flex;
    align-items: center;
    gap: 2vw;
    color: $slate-4;
    font-weight: 600;

    svg{
  font-size: 5vh;

    }

  }

  a {
    color: $secondary;

    &:hover {
      color: $accent;
    }

    &:focus {
      color: $accent;
    }
  }


  .menu-hamburger {
    // height: 50px;
    font-size: 6vh;
    width: auto;
    color: $secondary;
    z-index: 1;
  }
}

div.toolbar__current-page-container {
  display: flex;
  align-items: center;
  gap: 2%;

  .page-icon {
    color: $accent;
    margin-left: 0;
    font-size: 3vh;
  }

  .current-page-name {
    font-size: 3vh;
    color: $accent;
    font-weight: 500;
  }
}

//concerns the state of the menu bar for mobiles
@media screen and (max-width: 1000px) {

  .nav-links {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(9px);
    margin-left: -100%;
    transition: all 0.5s ease;

    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 4vh;
    gap: 7vh;
    font-weight: 600;


    &.mobile-menu {
      margin-left: 0;
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
    width: 60vw;
    display: flex;
    justify-content: space-evenly;
    font-weight: 500;
    font-size: 2.5vw;

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
