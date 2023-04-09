<template>
  <div class="flex h-2/5 lg:h-1/5 lg:w-2/3 flex-col">
    <div class="flex flex-wrap gap-2  md:gap-4 lg:gap-12">
      <button
        v-for="(domain, index) in selectedExperience.skillDomainList"
        @click=" selectedDomainIndex= index"
        :class=" index === selectedDomainIndex ? 'bg-orange-200 text-neutral-700' : 'bg-red-700 text-white'"
        class=" box-content h-6 sm:h-8 md:h-16 grow rounded-full px-2 sm:px-3 md:px-4 focus:bg-orange-200"
      >
        <p class="text-center text-xs sm:text-base md:text-xl font-bold">{{ domain.title }}</p>
      </button>
    </div>
    <div class="flex flex-wrap items-start justify-center gap-3 md:gap-10 lg:gap-5 self-start w-full rounded-lg pt-10 sm:pt-15 md:pt-20">
      <Skill class = "lg:max-w-sm " v-for="skill in  selectedExperience.skillDomainList[selectedDomainIndex].skillList" :skill="skill" />
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

