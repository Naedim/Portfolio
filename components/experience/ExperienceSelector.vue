<template>
  <div id="experience-selector" class="flex w-full flex-col items-center justify-center">
    <div class="flex w-11/12 lg:w-2/5 xl:w-3/5 justify-between  items-center">
      <!-- Left button -->
      <button
        id="reverse"
        class="selector-button"
        title="preivous experience"
        data-twe-ripple-init
        data-twe-ripple-color="dark"
        @click="previousExperience"
        :class="currentExperienceIndex === 0 && 'disabled'"
      >
        <Icon  class = "rotate-180 h-6" aria-label="previous experience" name="ic:baseline-arrow-forward-ios" />
      </button>

      <!-- Company name center title -->
      <div class="flex flex-col items-center">
        <button class = " px-6 py-4">
          <NuxtLink
            :to= selectedExperience.company.website
            target="_blank"
            :title="`${selectedExperience.company.name}`"
            class="flex items-center gap-2 text-xl lg:text-3xl font-bold"
          >
            <h2>
              {{ selectedExperience.company.name }}
            </h2>
          </NuxtLink>
        </button>
      </div>

      <!-- Right button -->
      <button
        title="next experience"
        data-twe-ripple-init
        data-twe-ripple-color="dark"
        @click="nextExperience"
        class="selector-button col-start-6"
        :class="currentExperienceIndex === experienceList.length - 1 && 'disabled'"
      >
        <Icon class = "h-6" aria-label="next experience" name="ic:baseline-arrow-forward-ios" />
      </button>
    </div>
    
    <!-- Lower duration -->
    <div class = "flex w-full justify-center pt-1">
        <p class="text-sm font-semibold text-violet-600">
          {{ selectedExperience.begining }} - {{ selectedExperience.duration }}
        </p>
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

onMounted(() => {
  initTWE({Ripple });
});

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
  @apply  h-12 w-12 lg:h-14 lg:w-14 rounded-full flex items-center  text-2xl lg:text-4xl justify-center;
}


.disabled {
  @apply bg-none bg-gray-900 text-gray-400 border-gray-400 hover:border-gray-400 transition-none transform-none;
}
</style>