<template>

  <div class="experience">
    <div class="experience__selected-experience">

      <div class="experience__header">

        <div class="experience__title">
          <h2>
            {{ selectedExperience.company.name }}

          </h2>
          <!-- <img src="~/assets/img/CAP.PA.svg" alt="company name" /> -->
        </div>

        <div class="experience__timeline">

          <div class="experience__start">
            <Icon icon="majesticons:rocket-3-start" class="page-icon" title="navbar's logo's icon" />
            <h3>
              {{ selectedExperience.begining }}
            </h3>
          </div>

          <div class="experience__duration">
            <Icon icon="ion:clock" class="page-icon" title="navbar's logo's icon" />

            <h3>
              {{ selectedExperience.duration }} months
            </h3>
          </div>

        </div>

        <hr class="experience__separator" />

        <div class="experience__timeline">

          <div class="experience__start">
            <Icon icon="ic:baseline-code" class="page-icon" title="navbar's logo's icon" />
            <h3>
              {{ selectedExperience.title }}
            </h3>
          </div>

          <div class="experience__duration">
            <Icon icon="ic:outline-handshake" class="page-icon" title="navbar's logo's icon" />

            <h3>
              {{ selectedExperience.contractType }}
            </h3>
          </div>

        </div>

        
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import { ExperienceInterface } from "@/models/interfaces/ExperienceInteface";
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

const selectExperience = (index: number) => {
  selectedExperience.value = experienceList[index];
  currentExperienceIndex.value = index;
  console.log(currentExperienceIndex);
};
</script>
<style scoped lang="scss">
.experience-page {

.experience {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;


  .experience__selected-experience {
    height: 80%;

    .experience__title {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5%;

      h2 {
        text-align: center;
        color: $third-color;
        font-size: 30px;
      }

      img {
        width: 100%;
        height: auto;

      }
    }

  }

  hr{
    border-color: $fourth-color;
  }

  .experience__timeline {
    padding-top: 20px;

    display: flex;
    justify-content: space-around;

    .experience__start,
    .experience__duration {
      display: flex;
      flex-direction: column;
      align-items: center;

      svg {
        color: #d81264;
        font-size: 40px;
      }

      h3 {
        color: white;
        font-size: 12px;

      }
    }

  }

  .experience__separator {
    margin: auto;
    border-top: solid;
    margin-top: 10px;
    border-top: 1px;
    width: 80%;
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
