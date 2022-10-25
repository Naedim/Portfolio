<template>
  <div>
    <nav class="navbar">
      <NuxtLink class="logo" to="#" alt="Website Logo">
        Damien NOEL <Icon icon="material-symbols:code" class="logoIcon" />
      </NuxtLink>
      <div class="nav-links" :class="{ 'mobile-menu': isMobileMenuActive }">
        <NuxtLink
          v-for="page of pages"
          :to="page"
          v-on:click="() => menuToggle()"
          >{{ page }}</NuxtLink
        >
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

const pages = ["home", "education", "experiences", "about"];

let isMobileMenuActive = ref(false);

let menuToggle = () => {
  isMobileMenuActive.value = !isMobileMenuActive.value;
  console.log(isMobileMenuActive.value);
};
</script>

<style scoped lang="scss">
* {
  font-family: "Poppins", serif;
}

$focus-color: #d81264;

.navbar {
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    left: 50px;

    display: flex;
    align-items: center;
    gap: 5px;

    font-size: 2rem;
    font-weight: 600;

    .logoIcon {
      font-size: 3rem;
    }
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
  .logo {
    position: absolute;
    top: 50px;
  }

  .nav-links {
    top: 0;
    left: 0;
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
    font-size: 1.3rem;
    margin-left: -100%;
    transition: all 0.5s ease;

    &.mobile-menu {
      margin-left: 0;
    }
  }

  .menu-hamburger {
    position: absolute;
    top: 50px;
    right: 50px;
    height: 50px;
    width: auto;
    color: white;
    z-index: 1;
  }
}
@media screen and (min-width: 768px) {
  .navbar {
    padding-top: 50px;
  }

  .logo {
    position: relative;
    top: 0px;
  }
  .nav-links {
    position: relative;

    width: 60vw;

    display: flex;
    justify-content: space-evenly;
    height: auto;
    font-size: 1rem;
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
