<template>
  <div class="experiences-page">
    <div class="experience-page__experience">
      <div class="experience-page__experience-selector">
        <h2>
          {{ selectedExperience.begining }}
        </h2>
        <div class="experience__duration">
          <h3>{{ selectedExperience.duration }} mounths</h3>
          <Icon icon="ic:baseline-hourglass-bottom" title="open in new tab" />
        </div>
        <div class="experience-page__selection-arrows">
          <div
            v-if="currentExperienceIndex > 0"
            class="experience-page__left-side"
          >
            <Icon
              icon="ic:baseline-arrow-back"
              @click="selectExperience(currentExperienceIndex - 1)"
              title="open in new tab"
            />
            <!-- <p>{{ experienceList[currentExperienceIndex - 1].begining }}</p> -->
          </div>

          <div
            @click="selectExperience(currentExperienceIndex + 1)"
            class="experience-page__right-side"
          >
            <Icon
              icon="ic:outline-arrow-forward"
              v-if="currentExperienceIndex < experienceList.length - 1"
              title="open in new tab"
            />
          </div>
        </div>
      </div>
      <Experience :experience="selectedExperience" />
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
$secondary-color: #d81264;
$third-color: #ccd6f6;
$fourth-color: #6b7dad;

.experiences-page {
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.experience-page__experience {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .experience-page__experience-selector {
    width: 90%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      width: 100%;
      text-align: center;
      font-size: clamp(1.5rem, 3vw, 2.5rem);
      color: white;
      font-weight: 500;
    }

    .experience__duration {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1%;
      h3 {
        font-size: clamp(1.2rem, 3vw, 2.5rem);
        color: $third-color;
        font-weight: 500;
      }
      svg {
        color: $third-color;
        font-size: clamp(1.2remrem, 3vw, 2.5rem);
      }
    }

    .experience-page__selection-arrows {
      width: 100%;
      display: flex;

      .experience-page__left-side {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        height: 100%;
        color: $secondary-color;
      }

      .experience-page__right-side {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        height: 100%;
        color: $secondary-color;
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
