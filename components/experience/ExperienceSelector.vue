<template>
  <div id = "experience-selector" class="flex w-full flex-col items-center justify-center md:w-7/12 lg:w-5/12">
    <div class="flex justify-around w-full">
      <!-- Left button -->
      <button
        id="reverse"
        class="selector-button rotate-180"
        title="preivous experience"
        @click="previousExperience"
        :class="currentExperienceIndex === 0 ? 'disabled' : 'active'"
      >
        <Icon aria-label = "previous experience" icon="ic:baseline-arrow-forward-ios" />
      </button>

      <!-- Company name center title -->
      <div class="flex flex-col items-center">
        <h2 class="text-base font-bold text-red-500 sm:text-xl md:text-2xl lg:text-3xl">
          {{ selectedExperience.company.name }}
        </h2>
        <!-- Lower duration -->
        <p class="text-xs font-medium text-gray-200 sm:text-sm md:text-base lg:text-lg">
          {{ selectedExperience.begining }} - {{ selectedExperience.duration }}
        </p>
      </div>

      <!-- Right button -->
      <button
        title="next experience"
        @click="nextExperience"
        class="selector-button col-start-6"
        :class="currentExperienceIndex === experienceList.length - 1 ? 'disabled' : 'active'"
      >
        <Icon aria-label = "next experience" icon="ic:baseline-arrow-forward-ios" />
      </button>
    </div>

    <!-- <ExperienceContract class="flex basis-1/12" /> -->
  </div>
</template>

<script setup lang="ts">
import {Icon} from "@iconify/vue";
import {ExperienceInterface} from "~~/models/interfaces/ExperienceInteface";
import experiencesData from "../../assets/staticData/experiences.json";
import { SkillDomainInterface } from "~~/models/interfaces/SkillDomainInterface";

const experienceList: Array<ExperienceInterface> = experiencesData as Array<ExperienceInterface>;
let currentExperienceIndex = 0;
const selectedExperience = useState("selectedExperience", () => experienceList[currentExperienceIndex]);
const selectedDomainIndex = useState("selectedDomainIndex", () => 0);
function nextExperience() {
  selectExperience(currentExperienceIndex + 1);
}
function previousExperience() {
  selectExperience(currentExperienceIndex - 1);
}

const selectExperience = (index: number) => {
  if (index < 0 || index >= experienceList.length) return;
  currentExperienceIndex = index;
  selectedExperience.value = experienceList[index];
  selectedDomainIndex.value = 0;
};
</script>

<style scoped>
.selector-button {
  @apply flex items-center justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl;
}

.active {
  @apply text-red-500 hover:text-orange-200;
}

.disabled {
  @apply text-gray-400;
}
</style>
