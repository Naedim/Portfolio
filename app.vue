<template>
  <div id = "app" class = "h-screen w-screen">
    <NuxtLayout >
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">

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
  @apply filter shadow-md shadow-violet-200
}

button:hover{
  transform : scale(1.05);
}
</style>
