<template>
  <div id="experience-skills" class="flex w-full flex-col gap-6">
    <div class="flex flex-wrap justify-center gap-3">
      <button
        data-twe-ripple-init
        data-twe-ripple-color="dark"
        :title="`domain of ${domain.title}`"
        v-for="(domain, index) in selectedExperience.skillDomainList"
        @click="selectedDomainIndex = index"
        :class="index === selectedDomainIndex && 'focused-skill'"
        class="box-content h-6 grow text-2xl p-2  rounded-full"
      >
          <p class="text-center text-xs font-bold ">{{ domain.title }}</p>
      </button>
    </div>
    <!-- dashed separator -->
    <div class="w-1/2 border-dashed border-t-[1px] border-violet-300 self-center"/>
    <div class="flex  flex-wrap items-center h-auto justify-start gap-3 rounded-lg">
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

<style>
button:first{
  
}
</style>