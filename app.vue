<template>
  <div class="wholeAppContainer">
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
$primaryColor: #6948cb;
$secondaryColor: #284fb5;
$accentColor: #22268f;

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}

.wholeAppContainer {
  height: 100vh;
  width: 100vw;
  background: rgb(105, 72, 203);
  background: linear-gradient(
    90deg,
    rgba(105, 72, 203, 1) 0%,
    rgba(40, 79, 181, 1) 50%,
    rgba(0, 0, 0, 1) 100%
  );
}
</style>
