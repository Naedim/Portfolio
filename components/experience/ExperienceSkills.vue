<template>
  <div class="flex h-2/5 flex-col">
    <div class="flex w-full flex-wrap gap-2 md:gap-4">
      <button
        v-for="(domain, index) in selectedExperience.skillDomainList"
        @click=" selectedDomainIndex= index"
        :class=" index === selectedDomainIndex ? 'bg-orange-200 text-neutral-700' : 'bg-red-700 text-white'"
        class=" box-content h-6 sm:h-8 md:h-12 grow rounded-full px-2 sm:px-3 md:px-4 focus:bg-orange-200"
      >
        <p class="text-center text-xs sm:text-base md:text-xl font-bold">{{ domain.title }}</p>
      </button>
    </div>
    <div class="auto flex w-full flex-wrap items-start justify-center gap-3 self-start rounded-lg pt-10 sm:pt-15 md:pt-20">
      <Skill v-for="skill in  selectedExperience.skillDomainList[selectedDomainIndex].skillList" :skill="skill" />
    </div>
  </div>
</template>
<script setup lang="ts">

import Skill from "~~/components/experience/Skill.vue";
import {Ref} from "vue";
import {ExperienceInterface} from "~~/models/interfaces/ExperienceInteface";
import experiencesData from "../../assets/staticData/experiences.json";

const selectedExperience: Ref<ExperienceInterface> = useState("selectedExperience");
const selectedDomainIndex : Ref<number> = useState("selectedDomainIndex");

</script>

