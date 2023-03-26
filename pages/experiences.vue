<template>
  <div id="experience-page" class="">
    <div
      id="experience-page__selector"
      class="grid w-[90%] grid-flow-row grid-cols-6 grid-rows-3 items-center text-center"
    >
      <button
        id="reverse"
        class="selector-button row-span-1 row-start-2 rotate-180"
        title="next experience"
        @click="previousExperience"
        :class="{ '': currentExperienceIndex === 0 }"
      >
        <Icon icon="ic:baseline-arrow-forward-ios" />
      </button>
      <h2 class="col-span-4 col-start-2 row-start-2 text-[6vw] text-white">
        {{ selectedExperience.company.name }}
      </h2>

      <button
        title="next experience"
        @click="nextExperience"
        :class="{ '': currentExperienceIndex === experienceList.length - 1 }"
        class="selector-button col-start-6 row-start-2"
      >
        <Icon icon="ic:baseline-arrow-forward-ios" />
      </button>
      <p
        class="col-span-4 col-start-2 row-start-3 text-[3vw] font-semibold text-red-300"
      >
        {{ selectedExperience.begining }} - {{ selectedExperience.duration }}
      </p>
    </div>

    <Experience2 :experience="selectedExperience" />
  </div>
</template>

<script setup lang="ts">
import { ExperienceInterface } from "@/models/interfaces/ExperienceInteface";
import Experience2 from "~~/components/experience/Experience2.vue";
import { Icon } from "@iconify/vue";
import { Ref } from "vue";
import experiences from "../assets/staticData/experiences.json";

/**
 * Informations about professionnal experiences, duration in months
 */

let experienceList: Array<ExperienceInterface> =
  experiences as Array<ExperienceInterface>;

let selectedExperience: Ref<ExperienceInterface> = ref(experienceList[0]);
let currentExperienceIndex = 0;

function nextExperience() {
  console.log("next");
  selectExperience(currentExperienceIndex + 1);
}
function previousExperience() {
  selectExperience(currentExperienceIndex - 1);
}

function selectExperience(index: number): void {
  console.log("selectExperience with ", index);
  selectedExperience.value = experienceList[index];
  currentExperienceIndex = index;
  console.log("new index : " + currentExperienceIndex);
  console.log("experience list : " + experienceList.length);
}
</script>
<style scoped>
.selector-button {
  @apply flex items-center justify-center text-[6vw] text-red-500 hover:text-orange-200;
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
