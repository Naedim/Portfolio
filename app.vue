<template>
  <!-- <div id = "app" class = "h-screen landscape:h-max landscape:xl:h-screen"> -->
  <div id = "app" class = "portrait:h-screen landscape:h-max landscape:lg:h-screen">
    <NuxtLayout >
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const title = "Damien NOEL's Portfolio";
const description =
  "Hello I'm Damien NOEL, a newly graduated developper and this is the portfolio that tracks the project I'm working on";
// This will be reactive even you change title/description above
useHead({
  htmlAttrs: {
    lang: "en",
  },

  title,
  meta: [
    {
      name: "description",
      content: description,
    },
  ],
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  overscroll-behavior: none;
}

button {
  all: unset;
  cursor: pointer;
  @apply filter text-white  bg-gradient-to-r from-violet-900 to-violet-500 rounded-full shadow-lg transition-all duration-200 
}

button:focus, button.focused {
 @apply bg-gradient-to-r from-rose-900 to-rose-500  text-white
}
</style>
