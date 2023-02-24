<template>
  <div class="app-container">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const title = ref("Damien NOEL's Portfolio");
const description = ref(
  "Hello I'm Damien NOEL, a newly graduated developper and this is the portfolio that tracks the project I'm working on"
);
// This will be reactive even you change title/description above
useHead({
  title,
  meta: [
    {
      name: "description",
      content: description,
    },
  ],
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Poppins",
    },
    {
      rel : "stylesheet",
      href : "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
    }
  ],
});
</script>

<style lang="scss">

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  font-family: "Poppins", serif;
}

button{
  all : unset;
}

.app-container {
  height: 100vh;
  width: 100vw;
  background: $slate-9;
  box-sizing: border-box;
  padding : 5vw;
  display :flex;
  flex-direction: column;
}
</style>
