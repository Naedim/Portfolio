<template>
  <div class="box-border flex flex-col w-screen h-screen p-3 overflow-auto sm:p-6 bg-neutral-900 md:p-10">
    <NuxtLayout>
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
  htmlAttrs : {
    lang : "eng"

  },
  
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
  ],

});
</script>

<style>

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  font-family: "Poppins", serif;
}

button{
  all : unset;
  cursor: pointer;
}

</style>
