<template>
  <div id="experience-page" class="flex flex-col items-center h-full">

      <ExperienceSelector class="flex basis-1/5"/>


      <ExperienceContract class="flex basis-1/5"/>



  </div>
</template>

<script setup lang="ts">

import { Ref } from "vue";
import { ExperienceInterface } from "~~/models/interfaces/ExperienceInteface";


</script>
<style scoped></style>

// { // company: { // name: "Koust", // website: "http,s://www.capgemini.com/",
// }, // contractType: "Business internship", // begining: "August 2021", //
duration: 12, // title: "Web/mobile developer", // description: "", // }, // {
// company: { // name: "Intia", // website: "http,s://www.capgemini.com/", // },
// contractType: "Business internship", // begining: "August 2021", // duration:
12, // title: "Web/mobile developer", // description: "", // }, // { // company:
{ // name: "Intia", // website: "http,s://www.capgemini.com/", // }, //
contractType: "Business internship", // begining: "August 2021", // duration:
12, // title: "Web/mobile developer", // description: "", // }, // { // company:
{ // name: "Intia", // website: "http,s://www.capgemini.com/", // }, //
contractType: "Business internship", // begining: "August 2021", // duration:
12, // title: "Web/mobile developer", // description: "", // }
