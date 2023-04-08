<template>
  <div id="experience-page" class="flex h-full flex-col items-center justify-around">
    <ExperienceSelector class="mt-5 flex basis-1/6 lg:mt-20" />
    <ExperienceContract class="flex basis-1/12" />
    <div class="flex w-full flex-wrap gap-2">
      <button
        v-for="(domain, index) in experience.skillDomainList"
        @click="selectedDomainIndex = index"
        :class="selectedDomainIndex == index ? 'bg-orange-200' : ''"
        class="box-content h-6 grow rounded-full bg-red-500 px-2 focus:bg-orange-200"
      >
        <p class="text-center text-xs font-bold">{{ domain.title }}</p>
      </button>
    </div>
    <div class="auto border-3 mt-5 flex w-full flex-wrap items-start justify-center gap-3 self-start rounded-lg p-2">
      <Skill v-for="skill in experience.skillDomainList[selectedDomainIndex].skillList" :skill="skill" />
    </div>
  </div>
</template>
<script setup lang="ts">
import Skill from "~~/components/experience/Skill.vue";
import {Ref} from "vue";
import {ExperienceInterface} from "~~/models/interfaces/ExperienceInteface";
import {SkillDomainInterface} from "~~/models/interfaces/SkillDomainInterface";

const experience: Ref<ExperienceInterface> = useState("selectedExperience");
const selectedDomainIndex = ref(0);
</script>

<style scoped></style>

// { // company: { // name: "Koust", // website: "http,s://www.capgemini.com/", // }, // contractType: "Business internship", // begining: "August 2021", //
duration: 12, // title: "Web/mobile developer", // description: "", // }, // { // company: { // name: "Intia", // website: "http,s://www.capgemini.com/", // },
// contractType: "Business internship", // begining: "August 2021", // duration: 12, // title: "Web/mobile developer", // description: "", // }, // { //
company: { // name: "Intia", // website: "http,s://www.capgemini.com/", // }, // contractType: "Business internship", // begining: "August 2021", // duration:
12, // title: "Web/mobile developer", // description: "", // }, // { // company: { // name: "Intia", // website: "http,s://www.capgemini.com/", // }, //
contractType: "Business internship", // begining: "August 2021", // duration: 12, // title: "Web/mobile ", // description: "", // }
