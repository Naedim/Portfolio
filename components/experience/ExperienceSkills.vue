<template>
  <div class="flex h-2/5 flex-col">
    <div class="flex w-full flex-wrap gap-2">
      <button
        v-for="(domain, index) in selectedExperience.skillDomainList"
        @click=" selectedDomainIndex= index"
        :class=" index === selectedDomainIndex ? 'bg-orange-200' : 'bg-red-700'"
        class=" box-content h-6 grow rounded-full px-2 text-white focus:bg-orange-200"
      >
        <p class="text-center text-xs font-bold">{{ domain.title }}</p>
      </button>
    </div>
    <div class="auto border-3 flex w-full flex-wrap items-start justify-center gap-3 self-start rounded-lg pt-10">
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

