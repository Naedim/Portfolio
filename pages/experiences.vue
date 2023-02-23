<template>
  <div class="experience-page">
    <div class="experience-page__selector">
      <button class="experience-page__select-button reverse" title="next experience" @click="previousExperience"
        :class="{ 'hidden': currentExperienceIndex === 0 }">
        <Icon icon="ic:baseline-arrow-forward-ios" />
      </button>
      <div class="selection">

        <h3>{{ selectedExperience.company.name }}</h3>
        <p>{{ selectedExperience.begining }} - {{ selectedExperience.duration }}</p>
      </div>

      <button class="experience-page__select-button" title="next experience" @click="nextExperience"
        :class="{ 'hidden': currentExperienceIndex === experienceList.length - 1 }">
        <Icon icon="ic:baseline-arrow-forward-ios" />
      </button>
    </div>

    <div class="experience-page__experience-container">
      <Experience2 :experience="selectedExperience" />
    </div>
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

function knowMore() {
  console.log("Know more");
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
  height: 100%;
  width: 100%;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;

  .experience-page__selector {
    width: 90%;
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    button.experience-page__select-button {
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

  }

  .selection {

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    h3 {
      font-size: 6vw;
      color: $secondary;
    }
  }

  p {
    color: $accent-2;
    font-weight: 600;
    font-size: 3vw;
  }

  .experience-page__experience-container {
    flex: 5;
    width: 90%;
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
