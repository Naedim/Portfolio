<template>
  <div
    id="experience-page__selector"
    class="flex items-center justify-between w-full h-full md:w-4/5 lg:w-1/2"
  >
  <!-- Left button -->
    <button
      id="reverse"
      class="rotate-180 selector-button"
      title="preivous experience"
      @click="previousExperience"
      :class="{ hidden: currentExperienceIndex === 0 }"
    >
      <Icon icon="ic:baseline-arrow-forward-ios" />
    </button>

      <!-- Company name center title -->
    <div class = "flex flex-col items-center">
      <h2 class=" text-[6vw] md:text-[5vw] lg:text-[3vw] text-white">
      {{ selectedExperience.company.name }}
    </h2>
    <p
      class="text-[4vw] md:text-[3vw] lg:text-[1.5vw] font-semibold text-red-300"
    >
      {{ selectedExperience.begining }} - {{ selectedExperience.duration }}
    </p>
    </div>
    

    <!-- Right button -->
    <button
      title="next experience"
      @click="nextExperience"
      :class="{
        hidden: currentExperienceIndex === experienceList.length - 1,
      }"
      class="col-start-6 selector-button">
      <Icon icon="ic:baseline-arrow-forward-ios" />
    </button>

    <!-- Lower duration -->
   
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
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
  @apply flex items-center justify-center text-[9vw] md:text-[6vw] lg:text-[4vw] text-red-500 hover:text-orange-200;
}
</style>
