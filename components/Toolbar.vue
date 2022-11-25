<template>
  <div class = "toolbar">
    <nav class="toolbar__navbar">
      <NuxtLink class="toolbar__navbar-logo" to="#" title = "navbar's logo">
        Damien NOEL
        <Icon icon="material-symbols:code" class="toolbar__navbar-log-icon" title = "navbar's logo's icon" />
      </NuxtLink>
      <div class="nav-links" :class="{ 'mobile-menu': isMobileMenuActive }">
        <NuxtLink v-for="page of pages" :to="page" @click="menuToggle()">{{
          page
        }}</NuxtLink>
      </div>
      <Icon
        icon="mdi:menu"
        class="menu-hamburger"
        title = "hamburger menu"
        v-on:click="() => menuToggle()"
      />
    </nav>
    <div class = "toolbar__current-page-container">
      <Icon icon="mdi:book-open-page-variant-outline" class="page-icon" title = "navbar's logo's icon" />
<p class = "current-page-name" title = "current page's name"> {{route.name}}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
const route = useRoute()
const pages = ["home", "experiences", "education", "about"];

let isMobileMenuActive = ref(false);
let menuToggle = () => {
  isMobileMenuActive.value = !isMobileMenuActive.value;
};

</script>

<style scoped lang="scss">
$focus-color: #d81264;
$secondary-color: #d81264;


.toolbar{
  margin-bottom: 5vh;
}
.toolbar__navbar {
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .toolbar__navbar-logo {
    margin-left: 7%;
    display: flex;
    align-items: center;
    gap: 5px;

    font-size: clamp(1.2rem, 2.25vw, 2.5rem);
    font-weight: 600;

    .toolbar__navbar-log-icon {
      font-size: clamp(1.5rem, 3vw, 3.75rem);
    }
    
  }

  .nav-links {
    margin-right: 7%;
    font-size: clamp(1.3rem, 2vw, 1.7rem);
  }

  a {
    color: white;

    &:hover {
      color: $secondary-color;
    }

    &:focus {
      color: $secondary-color;
    }
  }
}

div.toolbar__current-page-container{
  padding-left : 7%; 
  display : flex;
  align-items: center;
  gap : 2%;
  
  .page-icon{
      color : $secondary-color;
      margin-left: 0;
  }
  .current-page-name{
    font-size : clamp(1rem, 2vw, 1.7rem);
    color: $secondary-color;
    font-weight: 500;
      
  }


}

@media screen and (min-width : 676px){
    div.toolbar__current-page-container{
    display : none;
  }
}




@media screen and (max-width: 675px) {
  .toolbar__navbar-logo {
    margin-top: 25px;
  }
  .nav-links {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.342);
    backdrop-filter: blur(9px);
    margin-top : 90vh;

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

    // height: 50px;
    height : 2.5rem;
    width: auto;
    color: white;
    z-index: 1;
  }
}
@media screen and (min-width: 676px) {

  .toolbar__navbar {
    padding-top: 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .toolbar__navbar-logo{
    gap: 15px !important;

    }
  }

  .current-page-indicator{
    display: none;
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

  div.toolbar__current-page-container{
    display : none;
  }
}
</style>
