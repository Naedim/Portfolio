<template>
  <div
    id="experience-page__selector"
    class="mt-[3vh] grid w-full grid-flow-row grid-cols-6 grid-rows-2 items-center text-center"
  >
    <button
      id="reverse"
      class="row-span-1 row-start-1 rotate-180 selector-button"
      title="next experience"
      @click="previousExperience"
      :class="{ hidden: currentExperienceIndex === 0 }"
    >
      <Icon icon="ic:baseline-arrow-forward-ios" />
    </button>
    <h2 class="col-span-4 col-start-2 row-start-1 text-[8vw] text-white">
      {{ selectedExperience.company.name }}
    </h2>

    <button
      title="next experience"
      @click="nextExperience"
      :class="{
        hidden: currentExperienceIndex === experienceList.length - 1,
      }"
      class="col-start-6 row-start-1 selector-button"
    >
      <Icon icon="ic:baseline-arrow-forward-ios" />
    </button>

    <p
      class="col-span-4 col-start-2 row-start-2 text-[5vw] font-semibold text-red-300"
    >
      {{ selectedExperience.begining }} - {{ selectedExperience.duration }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { Ref } from "vue";
import { ExperienceInterface } from "~~/models/interfaces/ExperienceInteface";
import experiencesData from "../../assets/staticData/experiences.json";

const experienceList: Array<ExperienceInterface> = experiencesData as Array<ExperienceInterface>;
let currentExperienceIndex = 0;
const selectedExperience = useState('selectedExperience', () => experienceList[currentExperienceIndex]);

function nextExperience() {
  console.log("next");
  selectExperience(currentExperienceIndex + 1);
}
function previousExperience() {
  selectExperience(currentExperienceIndex - 1);
}



const selectExperience = (index: number)=>{
  currentExperienceIndex = index;
  selectedExperience.value = experienceList[index];
}
</script>

<style scoped>
.selector-button {
  @apply flex items-center justify-center text-[9vw] text-red-500 hover:text-orange-200;
}
</style>
