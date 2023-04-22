<template>
  <div id="experience-skills" class="flex w-full  flex-col">
    <div class="flex flex-wrap justify-center gap-3 md:gap-6 lg:gap-8">
      <button
        :title="`domain of ${domain.title}`"
        v-for="(domain, index) in selectedExperience.skillDomainList"
        @click="selectedDomainIndex = index"
        :class="index === selectedDomainIndex ? 'bg-orange-200 text-neutral-700' : 'bg-red-700 text-white'"
        class="box-content h-6 grow rounded-full px-2 focus:bg-orange-200 sm:h-8 sm:px-3 md:h-16 md:px-[2vw] xl:max-w-[20rem]"
      >
          <p class="text-center text-xs font-bold sm:text-base md:text-[2.5vw] lg:text-[1.8vw] xl:text-[1vw] lg:font-semibold">{{ domain.title }}</p>
      </button>
    </div>
  <div class="sm:pt-15 flex w-full flex-wrap items-center h-auto justify-center gap-3 pt-6 rounded-lg md:pt-12 md:gap-6 lg:pt-16 lg:gap-5">
      <Skill v-for="skill in selectedExperience.skillDomainList[selectedDomainIndex].skillList" :skill="skill" />
    </div>
  </div>
</template>
<script setup lang="ts">
import Skill from "~~/components/experience/Skill.vue";
import {Ref} from "vue";
import {ExperienceInterface} from "~~/models/interfaces/ExperienceInteface";

const selectedExperience: Ref<ExperienceInterface> = useState("selectedExperience");
const selectedDomainIndex: Ref<number> = useState("selectedDomainIndex");
</script>
