<template>
  <div id="experience-selector" class="flex w-full flex-col items-center justify-center md:w-9/12 lg:w-5/12">
    <div class="flex w-full justify-around">
      <!-- Left button -->
      <button
        id="reverse"
        class="selector-button"
        title="preivous experience"
        data-twe-ripple-init
        data-twe-ripple-color="light"
        @click="previousExperience"
        :class="currentExperienceIndex === 0 && 'disabled'"
      >
        <Icon  class = "rotate-180 h-6" aria-label="previous experience" name="ic:baseline-arrow-forward-ios" />
      </button>

      <!-- Company name center title -->
      <div class="flex flex-col items-center md:gap-2">
        <button class =  "shadow-none">
          <NuxtLink
            :to= selectedExperience.company.website
            target="_blank"
            :title="`${selectedExperience.company.name}`"
            class="flex items-center gap-2 text-xl font-bold sm:text-xl md:text-4xl lg:text-3xl"
          >
            <h2>
              {{ selectedExperience.company.name }}
            </h2>
            <Icon class="h-5" name="material-symbols:arrow-forward" :aria-label="`${selectedExperience.company.name} website link`" />
          </NuxtLink>
        </button>

        <!-- Lower duration -->
        <p class="text-[11px] font-semibold text-lime-500 sm:text-sm md:text-2xl lg:text-lg lg:font-bold">
          {{ selectedExperience.begining }} - {{ selectedExperience.duration }}
        </p>
      </div>

      <!-- Right button -->
      <button
        title="next experience"
        data-twe-ripple-init
        data-twe-ripple-color="light"
        @click="nextExperience"
        class="selector-button col-start-6"
        :class="currentExperienceIndex === experienceList.length - 1 ? 'disabled' : 'active'"
      >
        <Icon class = "h-6" aria-label="next experience" name="ic:baseline-arrow-forward-ios" />
      </button>
    </div>

    <!-- <ExperienceContract class="flex basis-1/12" /> -->
  </div>
</template>

<script setup lang="ts">
import type { ExperienceInterface } from "~/models/interfaces/ExperienceInterface";
import experiencesData from "../../assets/staticData/experiences.json";
import {
  Ripple,
  initTWE,
} from "tw-elements";

initTWE({ Ripple });

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
  @apply  border-solid border-2 border-white h-10 w-10  hover:border-rose-300 rounded-full flex items-center justify-center sm:text-2xl md:text-4xl lg:text-4xl;
}


.disabled {
  @apply text-gray-400 border-gray-400 hover:border-gray-400 transition-none transform-none;
}
</style>
~/models/interfaces/ExperienceInterface