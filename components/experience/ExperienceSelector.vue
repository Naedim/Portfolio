<template>
  <div id="experience-selector" class="flex w-full flex-col items-center justify-center md:w-9/12 lg:w-5/12">
    <div class="flex w-full justify-around">
      <!-- Left button -->
      <button
        id="reverse"
        class="selector-button"
        title="preivous experience"
        @click="previousExperience"
        :class="currentExperienceIndex === 0 ? 'disabled' : 'active'"
      >
        <Icon aria-label="previous experience" name="ic:baseline-arrow-back-ios" />
      </button>

      <!-- Company name center title -->
      <div class="flex flex-col items-center md:gap-2">
        <button>
          <NuxtLink
            :to= selectedExperience.company.website
            target="_blank"
            :title="`${selectedExperience.company.name}`"
            class="flex items-center gap-2 text-xl font-bold text-purple-500 hover:text-purple-500 sm:text-xl md:text-4xl lg:text-3xl"
          >
            <h2>
              {{ selectedExperience.company.name }}
            </h2>
            <Icon class="h-5" name="material-symbols:arrow-forward" :aria-label="`${selectedExperience.company.name} website link`" />
          </NuxtLink>
        </button>

        <!-- Lower duration -->
        <p class="text-[11px] font-semibold text-gray-900 sm:text-sm md:text-2xl lg:text-lg lg:font-bold">
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
        <Icon aria-label="next experience" name="ic:baseline-arrow-forward-ios" />
      </button>
    </div>

    <!-- <ExperienceContract class="flex basis-1/12" /> -->
  </div>
</template>

<script setup lang="ts">
import type { ExperienceInterface } from "~/models/interfaces/ExperienceInterface";
import experiencesData from "../../assets/staticData/experiences.json";

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
  @apply flex items-center justify-center text-xl sm:text-2xl md:text-4xl lg:text-4xl;
}

.active {
  @apply text-purple-500 hover:text-orange-500;
}

.disabled {
  @apply text-gray-400;
}
</style>
~/models/interfaces/ExperienceInterface