<template>
  <div id="experience-skills" class="flex w-full  flex-col">
    <div class="flex flex-wrap justify-center gap-3 md:gap-6 lg:gap-8">
      <button
        data-twe-ripple-init
        data-twe-ripple-color="light"
        :title="`domain of ${domain.title}`"
        v-for="(domain, index) in selectedExperience.skillDomainList"
        @click="selectedDomainIndex = index"
        :class="index === selectedDomainIndex && 'border-rose-300 text-rose-300'"
        class="box-content h-6 grow text-2xl rounded-full p-2 border-solid  border-2"
      >
          <p class="text-center text-xs font-bold ">{{ domain.title }}</p>
      </button>
    </div>
    <div class="flex  flex-wrap items-center h-auto justify-start gap-3 pt-12 rounded-lg">
      <Skill v-for="skill in selectedExperience.skillDomainList[selectedDomainIndex].skillList" :skill="skill" />
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  Ripple,
  initTWE,
} from "tw-elements";

onMounted(() => {
  initTWE({Ripple });
});
import type { ExperienceInterface } from "~/models/interfaces/ExperienceInterface";
import Skill from "~~/components/experience/Skill.vue";

const selectedExperience: Ref<ExperienceInterface> = useState("selectedExperience");
const selectedDomainIndex: Ref<number> = useState("selectedDomainIndex");
</script>