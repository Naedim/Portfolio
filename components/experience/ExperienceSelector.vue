<template>
  <div id="experience-page__selector" class="flex items-center justify-between w-full h-full md:w-7/12 lg:w-4/12">
    <!-- Left button -->
    <button id="reverse" class="rotate-180 selector-button" title="preivous experience" @click="previousExperience"
      :class="currentExperienceIndex === 0 ? 'disabled' : 'active'">
      <Icon icon="ic:baseline-arrow-forward-ios" />
    </button>

    <!-- Company name center title -->
    <div class="flex flex-col items-center">
      <h2 class="text-base font-bold text-white sm:text-xl md:text-2xl lg:text-3xl">
        {{ selectedExperience.company.name }}
      </h2>
      <p class="text-xs font-medium text-red-300 sm:text-sm md:text-base lg:text-lg">
        {{ selectedExperience.begining }} - {{ selectedExperience.duration }}
      </p>
    </div>


    <!-- Right button -->
    <button title="next experience" @click="nextExperience" class="col-start-6 selector-button"
      :class="currentExperienceIndex === experienceList.length - 1 ? 'disabled' : 'active'">

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



const selectExperience = (index: number) => {
  if(index < 0 || index >= experienceList.length) return;
  currentExperienceIndex = index;
  selectedExperience.value = experienceList[index];
  console.log(currentExperienceIndex);
}
</script>

<style scoped>

.selector-button {
  @apply flex items-center justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl;
}

.active {
  @apply text-red-500 hover:text-orange-200
}

.disabled {
  @apply text-gray-400;
}
</style>
