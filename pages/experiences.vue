<template>

  <div class="experience-page">
    <div class="experience-page__selector">
      <button class="experience-page__select-button" title="">
        <Icon icon="ic:baseline-arrow-back-ios" title="previous experience" />
      </button>
      <div class="selection">

        <h3>{{ selectedExperience.company.name }}</h3>
        <p>{{ selectedExperience.begining }} - {{ selectedExperience.duration }}</p>
      </div>
      <button class="experience-page__select-button" title="">
        <Icon icon="ic:baseline-arrow-forward-ios" title="previous experience" />
      </button>
    </div>

    <div class = "experience-page__experience-container">
      <Experience2 :experience="selectedExperience" />
    </div>


    <div class="experience-page__know-more">
      <button>
        <Icon icon="ic:outline-arrow-downward" title="experience remaining-infos" />
      </button>
    </div>
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
      all: unset;

      svg {
        vertical-align: middle; //Ensure that the logo is centered vertically inside the button
        color : $accent-2;
        font-size: 10vw;
      }
    }

    .selection {

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;

      h3 {
        font-size: 8vw;
        color: $secondary;
      }
    }

    p {
      color: $accent-2;
      font-weight: 600;
      font-size: 2vh;
    }
  }

  .experience-page__experience-container{
    flex: 3;
  }

  .experience-page__know-more {
    flex: 1;
    width: 100%;
    display : flex;
    justify-content: center;
    align-items: center;

    button{
      all : unset;
      background-color: $primary;
      border-radius: 50%;
      height : 9vh;
      width : 9vh;

      svg{
        font-size : 8vh;
        color : $accent-2;
        vertical-align: middle; 

      }
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
