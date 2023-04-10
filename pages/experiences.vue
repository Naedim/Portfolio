<template>
  <div id="experience-page" class="flex h-full flex-col items-center justify-evenly">
    <ExperienceSelector class="flex " />
    <ExperienceDescription class="flex basis-1/12" />
    <ExperienceSkills />
  </div>
</template>
<script setup lang="ts">
import {Ref} from "vue";
import {ExperienceInterface} from "~~/models/interfaces/ExperienceInteface";
const experience: Ref<ExperienceInterface> = useState("selectedExperience");
const selectedDomainIndex = ref(0);
</script>

<style scoped></style>

// { // company: { // name: "Koust", // website: "http,s://www.capgemini.com/", // }, // contractType: "Business internship", // begining: "August 2021", //
duration: 12, // title: "Web/mobile developer", // description: "", // }, // { // company: { // name: "Intia", // website: "http,s://www.capgemini.com/", // },
// contractType: "Business internship", // begining: "August 2021", // duration: 12, // title: "Web/mobile developer", // description: "", // }, // { //
company: { // name: "Intia", // website: "http,s://www.capgemini.com/", // }, // contractType: "Business internship", // begining: "August 2021", // duration:
12, // title: "Web/mobile developer", // description: "", // }, // { // company: { // name: "Intia", // website: "http,s://www.capgemini.com/", // }, //
contractType: "Business internship", // begining: "August 2021", // duration: 12, // title: "Web/mobile ", // description: "", // }
