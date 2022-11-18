<template>
  <div>
    <nav class="navbar">
      <NuxtLink class="navbar__logo" to="#" alt="Website navbar logo">
        Damien NOEL
        <Icon icon="material-symbols:code" class="navbar__icon" />
      </NuxtLink>
      <div class="nav-links" :class="{ 'mobile-menu': isMobileMenuActive }">
        <NuxtLink v-for="page of pages" :to="page" @click="menuToggle()">{{
          page
        }}</NuxtLink>
      </div>
      <Icon
        icon="mdi:menu"
        class="menu-hamburger"
        alt="hamburger menu"
        v-on:click="() => menuToggle()"
      />
    </nav>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

const pages = ["home", "experiences", "education", "about"];

let isMobileMenuActive = ref(false);

let menuToggle = () => {
  isMobileMenuActive.value = !isMobileMenuActive.value;
  console.log(isMobileMenuActive.value);
};
</script>

<style scoped lang="scss">
$focus-color: #d81264;

.navbar {
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding-bottom: 10vh;

  .navbar__logo {
    margin-left: 8vw;
    display: flex;
    align-items: center;
    gap: 5px;

    font-size: clamp(1.5rem, 2.25vw, 3rem);
    font-weight: 600;

    .navbar__icon {
      font-size: clamp(2rem, 3vw, 3.75rem);
    }
  }

  .nav-links {
    margin-right: 8vw;

    font-size: clamp(1.3rem, 2vw, 2.7rem);
  }

  a {
    color: white;

    &:hover {
      color: $focus-color;
    }

    &:focus {
      color: $focus-color;
    }
  }
}

@media screen and (max-width: 767px) {
  .navbar__logo {
    margin-top: 25px;
  }
  .nav-links {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.342);
    backdrop-filter: blur(9px);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    font-weight: 600;
    margin-left: -100%;
    transition: all 0.5s ease;

    &.mobile-menu {
      margin-left: 0;
    }
  }

  .menu-hamburger {
    margin-top: 25px;
    margin-right: 30px;

    height: 50px;
    width: auto;
    color: white;
    z-index: 1;
  }
}
@media screen and (min-width: 768px) {
  .navbar {
    padding-top: 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-links {
    width: 60vw;
    display: flex;
    justify-content: space-evenly;
    font-weight: 500;
  }

  .menu-hamburger {
    display: none;
  }
}

@media screen and (min-width: 900px) {
  .nav-links {
    width: 50vw;
  }
}
</style>
