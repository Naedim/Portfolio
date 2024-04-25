<template>
  <div id = "app"
    class="box-border flex min-h-screen w-screen flex-col p-6  bg-purple-200 "
  >
  <div class = "p-4 h-[100%] w-full bg-white rounded-lg">
    <NuxtLayout >
      <NuxtPage />
    </NuxtLayout>
  </div>
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
}
button:hover{
  transform : scale(1.05);
}
</style>
