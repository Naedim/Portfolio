<template>

  <div class="experience-page">
    <div class="experience-page__selector">
      <div class="selection">
        <button class="experience-page__select-button" title="">
          <Icon icon="ic:baseline-arrow-circle-left" title="previous experience" />
        </button>
        <h3>{{ selectedExperience.company.name }}</h3>
        <button class="experience-page__select-button" title="">
          <Icon icon="ic:baseline-arrow-circle-right" title="previous experience" />
        </button>
      </div>
      <p>{{ selectedExperience.begining }} - {{ selectedExperience.duration }}</p>

    </div>

    <Experience2 :experience="selectedExperience" />
  </div>
</template>

<script setup lang="ts">
import { ExperienceInterface } from "@/models/interfaces/ExperienceInteface";
import ExperienceCard from "@/components/experience/ExperienceCard.vue";
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
let currentExperienceIndex: Ref<number> = ref(0);

function selectExperience(index: number): void {
  selectedExperience.value = experienceList[index];
  currentExperienceIndex.value = index;
  console.log(currentExperienceIndex);
};

</script>
<style scoped lang="scss">
.experience-page {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding-left: 5%;
  padding-right: 5%;

  display: flex;
  flex-direction: column;
  align-items: center;

  .experience-page__selector {
    width: 100%;
    height : 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .selection {

      display : flex;
      justify-content: space-around;
      width : 100%;
      h3 {
        font-size: 8vw;
        color: $secondary;
      }

      button.experience-page__select-button {
        all: unset;
        color: $accent;

        svg {
          vertical-align: middle; //Ensure that the logo is centered vertically inside the button
          font-size: 10vw;
        }
      }
    }

  p {
    color: $slate-4;
    font-weight: 600;
    font-size: 2vh;
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
