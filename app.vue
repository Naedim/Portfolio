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
  font-family: "Poppins", serif;
}

.app-container {
  height: 100vh;
  width: 100vw;
  background: rgb(105, 72, 203);
  background: #061336;
  // background: -moz-linear-gradient(
  //   90deg,
  //   rgba(22, 65, 177, 1) 15%,
  //   rgba(12, 38, 107, 1) 50%,
  //   rgba(6, 19, 54, 1) 85%
  // );
  // background: -webkit-linear-gradient(
  //   90deg,
  //   rgba(22, 65, 177, 1) 15%,
  //   rgba(12, 38, 107, 1) 50%,
  //   rgba(6, 19, 54, 1) 85%
  // );
  // background: linear-gradient(
  //   90deg,
  //   rgba(22, 65, 177, 1) 15%,
  //   rgba(12, 38, 107, 1) 50%,
  //   rgba(6, 19, 54, 1) 85%
  // );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1641b1",endColorstr="#061336",GradientType=1);
}
</style>
