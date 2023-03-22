<template>
  <div class="h-screen w-screen bg-slate-900 box-border p-[5vw] flex flex-col overflow-auto">
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

</style>
