<template>

  <div class="experience-page">
    <Experience :experience = "selectedExperience"/>
  </div>
</template>

<script setup lang="ts">
import { ExperienceInterface } from "@/models/interfaces/ExperienceInteface";
import Experience from "@/components/experience/Experience.vue";
import { Icon } from "@iconify/vue";
import { Ref } from "vue";
import experiences from "../assets/staticData/experiences.json";
/**
 * Informations about professionnal experiences, duration in months
 */

let experienceList: Array<ExperienceInterface> =
  experiences as Array<ExperienceInterface>;

let selectedExperience: Ref<ExperienceInterface> = ref(experienceList[0]);
let currentExperienceIndex: Ref<number> = ref(0);

function selectExperience(index: number) : void{
  selectedExperience.value = experienceList[index];
  currentExperienceIndex.value = index;
  console.log(currentExperienceIndex);
};
</script>
<style scoped lang="scss">
.experience-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
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
