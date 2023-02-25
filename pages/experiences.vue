<template>
  <div class="experience-page">
    <div class="experience-page__selector">
      <button class="reverse" title="next experience" @click="previousExperience"
        :class="{ 'hidden': currentExperienceIndex === 0 }">
        <Icon icon="ic:baseline-arrow-forward-ios" />
      </button>

      <h2>{{ selectedExperience.company.name }}</h2>

      <button title="next experience" @click="nextExperience"
        :class="{ 'hidden': currentExperienceIndex === experienceList.length - 1 }">
        <Icon icon="ic:baseline-arrow-forward-ios" />
      </button>

      <p>{{ selectedExperience.begining }} - {{ selectedExperience.duration }}</p>
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
  selectExperience(currentExperienceIndex + 1)
}
function previousExperience() {
  selectExperience(currentExperienceIndex - 1)
}

function selectExperience(index: number): void {
  console.log("selectExperience with ", index);
  selectedExperience.value = experienceList[index];
  currentExperienceIndex = index;
  console.log("new index : " + currentExperienceIndex);
  console.log("experience list : " + experienceList.length);


};

</script>
<style scoped lang="scss">
.experience-page {
  margin-top : 10%;
  height: 80%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10% 90%;

  row-gap: 5%;

  justify-items: center;
  align-items: center;

  .experience-page__selector {
    width: 90%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: 2fr 1fr;

    justify-items: center;
    align-items: center;


    button {
      grid-row: span 2;
      color: $accent;
      font-size: 6vw;
      display: flex;
      justify-content: center;
      align-items: center;

      &.hidden {
        visibility: hidden;
      }

      &.reverse {
        transform: rotate(180deg);
      }

    }

    h2 {
      font-size: 6vw;
      color: $secondary;
    }

    p {

      grid-area: 2 / 2 / 2 / 3;
      color: $accent-2;
      font-weight: 600;
      font-size: 3vw;
    }

  }

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
