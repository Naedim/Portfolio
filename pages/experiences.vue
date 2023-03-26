<template>
  <div id="experience-page" class="flex flex-col items-center">
    
    <!-- <Experience2 :experience="selectedExperience" /> -->
    <ExperienceSelector :experienceList="experienceList"/>

    {{ experienceList[experienceIndex].begining}}

  </div>
</template>

<script setup lang="ts">

import { Ref } from "vue";
import { ExperienceInterface } from "~~/models/interfaces/ExperienceInteface";
import experiencesData from "../assets/staticData/experiences.json";
const experienceList: Array<ExperienceInterface> = experiencesData as Array<ExperienceInterface>;

let experienceIndex : Ref<number> = ref(0);

function updateExperience(index : number) {
  console.log("updateExperience");
  experienceIndex.value++;
}




/**
 * Informations about professionnal experiences, duration in months
 */



</script>
<style scoped>

</style>

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
